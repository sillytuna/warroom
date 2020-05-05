import React from 'react';
import './App.css';
import _ from 'lodash';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

import { metaboss_testdata, GAMEDATA } from './exampleData.js';

const PHASE_SLUGS = ["infiltration", "analysis", "assault"];
const MAX_MATCH_COUNT = 3;
const MAX_ROUND_COUNT = 8;

const STRATEGIES = ["Fire", "Snow", "Water"];
const STRATEGY_CHECK = {
	"-": { "-": null, "Fire": false, "Snow": false, "Water": false },
	"Fire": { "-": true, "Fire": null, "Snow": true, "Water": false },
	"Snow": { "-": true, "Fire": false, "Snow": null, "Water": true },
	"Water": { "-": true, "Fire": true, "Snow": false, "Water": null }
};

var flecTeamNames = { rogue: "rogue", sage: "sage", armr: "armr" };
var conflictTeams = { infiltration: "", analysis: "", combat: "" }

function InitGameData() {
	_.forIn(GAMEDATA.flec, function (value, key) {
		flecTeamNames[value.slug] = value.name;
		conflictTeams[value.conflict] = value.slug;
	});
}

function ProcessResults(data) {
	let outcomes = data.outcomes;

	let nameStrategy = (s) => (s != null) ? STRATEGIES[s] : "-";

	const TEAM_ACTIONS = {
		skirge: {
			'0': GAMEDATA.actions.skirge['0'].name,
			'1': GAMEDATA.actions.skirge['1'].name,
			'2': GAMEDATA.actions.skirge['2'].name,
			'3': GAMEDATA.actions.skirge['3'].name,
		},
		rogue: {
			'0': GAMEDATA.actions.rogue['0'].name,
			'1': GAMEDATA.actions.rogue['1'].name,
			'2': GAMEDATA.actions.rogue['2'].name,
			'3': GAMEDATA.actions.rogue['3'].name,
		},
		sage: {
			'0': GAMEDATA.actions.sage['0'].name,
			'1': GAMEDATA.actions.sage['1'].name,
			'2': GAMEDATA.actions.sage['2'].name,
			'3': GAMEDATA.actions.sage['3'].name,
		},
		armr: {
			'0': GAMEDATA.actions.armr['0'].name,
			'1': GAMEDATA.actions.armr['1'].name,
			'2': GAMEDATA.actions.armr['2'].name,
			'3': GAMEDATA.actions.armr['3'].name,
		}
	};

	let nameAction = (team, s) => (s != null) ? TEAM_ACTIONS[team][s] : "-";

	_.forIn(outcomes, function (phase, key) {
		_.forIn(phase, function (match, key) {
			_.forIn(match, function (round, key) {
				// Make sense of the results
				round.flec_strategy_vote = nameStrategy(round.flec_strategy_vote);
				round.skirge_strategy_vote = nameStrategy(round.skirge_strategy_vote);

				round.flec_action = nameAction(round.flec_faction, round.flec_action);
				round.skirge_action = nameAction("skirge", round.skirge_action);

				// Add extra metadata
				let result = strategyResult(round.flec_strategy_vote, round.skirge_strategy_vote);
				if (result === true)
					round._strategy_winner = "flec";
				else if (result === false)
					round._strategy_winner = "skirge";
				else
					round._strategy_winner = null;

			});
		});
	});
}

function strategyResult(a, b) {
	return STRATEGY_CHECK[a][b];
}

function displayRounds(rounds) {
	let resultArray = [];

	for (let i = 0; i < MAX_ROUND_COUNT; i++) {
		let roundNum = (i + 1).toString();

		if (rounds !== null && rounds[roundNum] !== undefined) {
			resultArray[i] = rounds[roundNum];
		}
		else {
			resultArray[i] = null;
		}
	}

	return resultArray.map((round, index) => {
		let content = (
			<>
			</>
		);

		if (round != null) {
			const HIGHLIGHT = "font-weight-bold";
			let markup = { winner: { flec: "", skirge: "" }, strategy_winner: { flec: "", skirge: "" } };

			markup.winner[round.winner] = HIGHLIGHT;
			markup.strategy_winner[round._strategy_winner] = HIGHLIGHT;

			content = (
				<>
					<td>{round.winner}</td>
					<td className={markup.winner.flec}>{round.flec_score}</td>
					<td className={markup.winner.skirge}>{round.skirge_score}</td>
					<td className={markup.strategy_winner.flec}>{round.flec_strategy_vote}</td>
					<td className={markup.strategy_winner.skirge}>{round.skirge_strategy_vote}</td>
					<td>{round.flec_action}</td>
					<td>{round.skirge_action}</td>
				</>
			);
		}

		return (
			<tr key={index}>
				<td>{index + 1}</td>
				{content}
			</tr>
		)
	});
}

function Match(props) {
	return (
		<Table striped bordered variant="dark">
			<thead>
				<tr>
					<th>#</th>
					<th>winner</th>
					<th>flec score</th>
					<th>skirge score</th>
					<th>flec strategy</th>
					<th>skirge strategy</th>
					<th>flec action</th>
					<th>skirge action</th>
				</tr>
			</thead>
			<tbody>
				{displayRounds(props.rounds)}
			</tbody>
		</Table>
	);
}

function Phase(props) {
	let content = [];

	for (let i = 0; i < MAX_MATCH_COUNT; i++) {
		const HIGHLIGHT = "font-weight-bold";
		let matchNum = (i + 1).toString();
		let buttonMarkup;

		if (props.matches !== null && props.matches[matchNum] !== undefined) {
			let result = props.results[matchNum];
			let markup = { winner: { flec: "", skirge: "" } };

			if ((result.flec_round_wins + result.skirge_round_wins) === MAX_ROUND_COUNT) {
				buttonMarkup = (result.winner === "flec") ? "success" : "danger";
				markup.winner[result.winner] = HIGHLIGHT;
			}
			else {
				buttonMarkup = "warning";
			}

			content[i] = (
				<React.Fragment key={i}>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant={buttonMarkup} eventKey={i.toString()}>
								<span className={markup.winner.flec}>{flecTeamNames[result.flec_team]} {result.flec_round_wins}</span>
									&nbsp;-&nbsp;
									<span className={markup.winner.skirge}>{result.skirge_round_wins} Skirge</span>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey={i.toString()}>
							<Card.Body>
								<Match rounds={props.matches[matchNum]} />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</React.Fragment>
			);
		}
		else {
			buttonMarkup = "secondary";

			content[i] = (
				<React.Fragment key={i}>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant={buttonMarkup} eventKey={i.toString()}>
								{flecTeamNames[conflictTeams[props.phaseSlug]]} v Skirge
								</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey={i.toString()}>
							<Card.Body>
								<Match rounds={null} />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</React.Fragment>
			);
		}
	}

	return (
		<Accordion>
			{content}
		</Accordion>
	);
}

function Episode(props) {
	let content = [];

	for (let i = 0; i < PHASE_SLUGS.length; i++) {
		let phaseSlug = PHASE_SLUGS[i];

		if (props.data.outcomes[phaseSlug] !== undefined) {
			content[i] = (
				<React.Fragment key={PHASE_SLUGS[i]}>
					<h3>{GAMEDATA.conflicts[i.toString()].name}</h3>
					<Phase matches={props.data.outcomes[phaseSlug]} results={props.data.results.match[phaseSlug]} phaseSlug={phaseSlug} />
				</React.Fragment>
			);
		}
		else {
			content[i] = (
				<React.Fragment key={PHASE_SLUGS[i]}>
					<h3>{GAMEDATA.conflicts[i.toString()].name}</h3>
					<Phase matches={null} results={props.data.results.match[phaseSlug]} phaseSlug={phaseSlug} />
				</React.Fragment>
			);
		}
	}

	return (
		<div>
			{content}
		</div>
	);
}

function App() {
	InitGameData();
	ProcessResults(metaboss_testdata.data);

	return (
		<Container fluid>
			<h1>MetaBoss War Room: {metaboss_testdata.data.params.episode}</h1>
			<Episode data={metaboss_testdata.data} />
		</Container>
	);
}

export default App;
