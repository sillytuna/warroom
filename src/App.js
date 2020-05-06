import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
//import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Table from 'react-bootstrap/Table';
// import Card from 'react-bootstrap/Card';
// import Accordion from 'react-bootstrap/Accordion';
// import Badge from 'react-bootstrap/Badge';

import { EPISODE_INCOMPLETE, gGameDefs } from './exampleData.js';

// ------------------------------------------------------------------------------------------------------//

// Game definitions
var gMatchesPerShowdown;
var gRoundsPerMatch;
//var gEpisodesPerSeason;

var gFlecTeamNames = { rogue: "rogue", sage: "sage", armr: "armr" };
var gConflictTeams = { infiltration: "", analysis: "", combat: "" }

const PHASE_SLUGS = ["infiltration", "analysis", "assault"];

const STRATEGIES = ["Fire", "Snow", "Water"];
const STRATEGY_CHECK = {
	"-": { "-": null, "Fire": false, "Snow": false, "Water": false },
	"Fire": { "-": true, "Fire": null, "Snow": true, "Water": false },
	"Snow": { "-": true, "Fire": false, "Snow": null, "Water": true },
	"Water": { "-": true, "Fire": true, "Snow": false, "Water": null }
};

var gTeamActions;

// ------------------------------------------------------------------------------------------------------//

const useStyles = makeStyles({
	winStyle: {
		fontWeight: 'bold'
	}
});

// ------------------------------------------------------------------------------------------------------//

function InitGameDefs() {
	gTeamActions = {
		skirge: {
			'0': gGameDefs.actions.skirge['0'].name,
			'1': gGameDefs.actions.skirge['1'].name,
			'2': gGameDefs.actions.skirge['2'].name,
			'3': gGameDefs.actions.skirge['3'].name,
		},
		rogue: {
			'0': gGameDefs.actions.rogue['0'].name,
			'1': gGameDefs.actions.rogue['1'].name,
			'2': gGameDefs.actions.rogue['2'].name,
			'3': gGameDefs.actions.rogue['3'].name,
		},
		sage: {
			'0': gGameDefs.actions.sage['0'].name,
			'1': gGameDefs.actions.sage['1'].name,
			'2': gGameDefs.actions.sage['2'].name,
			'3': gGameDefs.actions.sage['3'].name,
		},
		armr: {
			'0': gGameDefs.actions.armr['0'].name,
			'1': gGameDefs.actions.armr['1'].name,
			'2': gGameDefs.actions.armr['2'].name,
			'3': gGameDefs.actions.armr['3'].name,
		}
	};

	_.forIn(gGameDefs.flec, function (value, key) {
		gFlecTeamNames[value.slug] = value.name;
		gConflictTeams[value.conflict] = value.slug;
	});

	gMatchesPerShowdown = gGameDefs.matchesPerShowdown;
	gRoundsPerMatch = gGameDefs.roundsPerMatch;
	//gEpisodesPerSeason = GAMEDATA.episodesPerSeason;
}

function ProcessResults(episodeData) {
	if (!episodeData.processed) {
		let outcomes = episodeData.outcomes;
		let nameStrategy = (s) => (s != null) ? STRATEGIES[s] : "-";
		let nameAction = (team, s) => (s != null) ? gTeamActions[team][s] : "-";

		_.forIn(outcomes, function (phase, key) {
			_.forIn(phase, function (match, key) {
				_.forIn(match, function (round, key) {
					// Make sense of the results
					///////////TODO: Move these to custom keys, don't overwrite!
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

	episodeData.processed = true;
}

function strategyResult(a, b) {
	return STRATEGY_CHECK[a][b];
}

function displayRounds(rounds) {
	let resultArray = [];

	for (let i = 0; i < gRoundsPerMatch; i++) {
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

// ------------------------------------------------------------------------------------------------------//

// function LoadingButton(props) {
// 	const [isLoading, setLoading] = useState(false);
// 	const onLoad = useRef(props.onLoad);

// 	useEffect(() => {
// 		if (isLoading) {
// 			onLoad.current().then(() => {
// 				setLoading(false);
// 			});
// 		}
// 	}, [isLoading]);

// 	function handleClick() {
// 		setLoading(true);
// 	}

// 	return (
// 		<Button variant={props.variant} disabled={isLoading} onClick={!isLoading ? handleClick : null} >
// 			{isLoading ? 'Loading…' : props.label}
// 		</Button>
// 	);
// }

// // ------------------------------------------------------------------------------------------------------//

// function Match(props) {
// 	return (
// 		<Table striped bordered variant="dark">
// 			<thead>
// 				<tr>
// 					<th>#</th>
// 					<th>winner</th>
// 					<th>flec score</th>
// 					<th>skirge score</th>
// 					<th>flec strategy</th>
// 					<th>skirge strategy</th>
// 					<th>flec action</th>
// 					<th>skirge action</th>
// 				</tr>
// 			</thead>
// 			<tbody>
// 				{displayRounds(props.rounds)}
// 			</tbody>
// 		</Table>
// 	);
// }

// function Phase(props) {
// 	let content = [];

// 	for (let i = 0; i < gMatchesPerShowdown; i++) {
// 		const HIGHLIGHT = "font-weight-bold";
// 		let matchNum = (i + 1).toString();
// 		let buttonMarkup;

// 		if (props.matches !== null && props.matches[matchNum] !== undefined) {
// 			let result = props.results[matchNum];
// 			let markup = { winner: { flec: "", skirge: "" } };

// 			if ((result.flec_round_wins + result.skirge_round_wins) === gRoundsPerMatch) {
// 				buttonMarkup = (result.winner === "flec") ? "success" : "danger";
// 				markup.winner[result.winner] = HIGHLIGHT;
// 			}
// 			else {
// 				buttonMarkup = "warning";
// 			}

// 			content[i] = (
// 				<React.Fragment key={i}>
// 					<Card>
// 						<Card.Header>
// 							<Accordion.Toggle as={Button} variant={buttonMarkup} eventKey={i.toString()}>
// 								<span className={markup.winner.flec}>{gFlecTeamNames[result.flec_team]} {result.flec_round_wins}</span>
// 									&nbsp;-&nbsp;
// 									<span className={markup.winner.skirge}>{result.skirge_round_wins} Skirge</span>
// 							</Accordion.Toggle>
// 						</Card.Header>
// 						<Accordion.Collapse eventKey={i.toString()}>
// 							<Card.Body>
// 								<Match rounds={props.matches[matchNum]} />
// 							</Card.Body>
// 						</Accordion.Collapse>
// 					</Card>
// 				</React.Fragment>
// 			);
// 		}
// 		else {
// 			buttonMarkup = "secondary";

// 			content[i] = (
// 				<React.Fragment key={i}>
// 					<Card>
// 						<Card.Header>
// 							<Accordion.Toggle as={Button} variant={buttonMarkup} eventKey={i.toString()}>
// 								{gFlecTeamNames[gConflictTeams[props.phaseSlug]]} v Skirge
// 								</Accordion.Toggle>
// 						</Card.Header>
// 						<Accordion.Collapse eventKey={i.toString()}>
// 							<Card.Body>
// 								<Match rounds={null} />
// 							</Card.Body>
// 						</Accordion.Collapse>
// 					</Card>
// 				</React.Fragment>
// 			);
// 		}
// 	}

// 	return (
// 		<Accordion>
// 			{content}
// 		</Accordion>
// 	);
// }

// function Episode(props) {
// 	let content = [];

// 	for (let i = 0; i < PHASE_SLUGS.length; i++) {
// 		let phaseSlug = PHASE_SLUGS[i];

// 		if (props.episodeData.outcomes[phaseSlug] !== undefined) {
// 			content[i] = (
// 				<React.Fragment key={PHASE_SLUGS[i]}>
// 					<h3>{gGameDefs.conflicts[i.toString()].name}</h3>
// 					<Phase matches={props.episodeData.outcomes[phaseSlug]} results={props.episodeData.results.match[phaseSlug]} phaseSlug={phaseSlug} />
// 				</React.Fragment>
// 			);
// 		}
// 		else {
// 			content[i] = (
// 				<React.Fragment key={PHASE_SLUGS[i]}>
// 					<h3>{gGameDefs.conflicts[i.toString()].name}</h3>
// 					<Phase matches={null} results={props.episodeData.results.match[phaseSlug]} phaseSlug={phaseSlug} />
// 				</React.Fragment>
// 			);
// 		}
// 	}

// 	return (
// 		<div>
// 			{content}
// 		</div>
// 	);
// }

// function Game(props) {
// 	var content = "";
// 	var episode = "...";

// 	if (props.episodeData !== null) {
// 		ProcessResults(props.episodeData);
// 		episode = props.episodeData.params.episode;

// 		content = (
// 			<>
// 				<Episode episodeData={props.episodeData} />
// 			</>
// 		);
// 	}

// 	return (
// 		<Container fluid>
// 			<h1>MetaBoss War Room: {episode}</h1>
// 			{content}
// 		</Container>
// 	);
// }

function App() {
	const classes = useStyles();

	InitGameDefs();

	const [episodeData, setEpisodeData] = useState(null)

	async function loadTestData() {
		// Forces a UX refresh with no data which resets the accordions
		setEpisodeData(null);
		await new Promise(resolve => setTimeout(resolve, 1));

		EPISODE_INCOMPLETE.data.testData = true;
		setEpisodeData(EPISODE_INCOMPLETE.data);

		return true;
	}

	async function loadRealData() {
		setEpisodeData(null);

		await fetch('https://metaboss.blockade.games/api/get-stats?episode=s01e01')
			.then(res => res.json())
			.then((loadedData) => {
				setEpisodeData(loadedData.data);
			})
			.catch((error) => {
				console.error(error);
			})
		return true;
	}

	useEffect(() => {
		loadRealData();
	}, []);

	// let testData;
	// if (episodeData && episodeData.testData) {
	// 	testData = (
	// 		<>
	// 			<Badge variant="danger">Test Mode!</Badge>
	// 		</>
	// 	);
	// }

	return (
		<Container maxWidth="lg">
			{/*			<p></p>
			<LoadingButton variant="primary" onLoad={loadRealData} label="Live Data" />&nbsp;
			<LoadingButton variant="primary" onLoad={loadTestData} label="Test Data" />
			&nbsp;{testData}&nbsp;
			<p></p>
			<Game episodeData={episodeData} />
			*/}
			<Typography className={classes.winStyle} variant="h1" color="primary">
				Test
			</Typography>
		</Container>
	);
}

export default App;
