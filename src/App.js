import React from 'react';
import './App.css';
import _ from 'lodash';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

import { metaboss_testdata, GAMEDATA } from './exampleData.js';

const PHASES = ["infiltration", "analysis", "assault"];
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

function InitGameData() {
	_.forIn(GAMEDATA.flec, function (value, key) {
		flecTeamNames[value.slug] = value.name;
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

		if (rounds[roundNum] === undefined) {
			break;
		}

		resultArray[i] = rounds[roundNum];
	}

	return resultArray.map((round, index) => {
		const HIGHLIGHT = "font-weight-bold";
		let markup = { winner: { flec: "", skirge: "" }, strategy_winner: { flec: "", skirge: "" } };

		markup.winner[round.winner] = HIGHLIGHT;
		markup.strategy_winner[round._strategy_winner] = HIGHLIGHT;

		return (
			<tr key={index}>
				<td>{index + 1}</td>
				<td>{round.winner}</td>
				<td className={markup.winner.flec}>{round.flec_score}</td>
				<td className={markup.winner.skirge}>{round.skirge_score}</td>
				<td className={markup.strategy_winner.flec}>{round.flec_strategy_vote}</td>
				<td className={markup.strategy_winner.skirge}>{round.skirge_strategy_vote}</td>
				<td>{round.flec_action}</td>
				<td>{round.skirge_action}</td>
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
	const HIGHLIGHT = "font-weight-bold";
	let content = [];

	for (let i = 0; i < MAX_MATCH_COUNT; i++) {
		let matchNum = (i + 1).toString();

		if (props.matches[matchNum] !== undefined) {
			let result = props.results[matchNum];
			let markup = { winner: { flec: "", skirge: "" } };
			let buttonMarkup = "";

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
								<span className={markup.winner.skirge}> {result.skirge_round_wins} Skirge</span>
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
			break;
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

	for (let i = 0; i < PHASES.length; i++) {
		let phaseName = PHASES[i];

		if (props.data.outcomes[phaseName] !== undefined) {
			content[i] = (
				<React.Fragment key={PHASES[i]}>
					<h3>{GAMEDATA.conflicts[i.toString()].name}</h3>
					<Phase matches={props.data.outcomes[phaseName]} results={props.data.results.match[phaseName]} />
				</React.Fragment>
			);
		}
		else {
			break;
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
