import React, { useState, useEffect, useContext, useRef } from 'react';
import _ from 'lodash';
//import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GameConfig from './GameConfig';
import gameDefs from './gameDefs.js';

//import Table from 'react-bootstrap/Table';
// import Card from 'react-bootstrap/Card';
// import Accordion from 'react-bootstrap/Accordion';
// import Badge from 'react-bootstrap/Badge';

// ------------------------------------------------------------------------------------------------------//

const GameConfigContext = React.createContext();

const useStyles = makeStyles((theme) => ({
	winStyle: {
		fontWeight: 'bold'
	}
}));

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

// ------------------------------------------------------------------------------------------------------//

// function displayRounds(gameConfig, rounds) {
// 	let resultArray = [];

// 	for (let i = 0; i < gameConfig.roundsPerMatch; i++) {
// 		let roundNum = (i + 1).toString();

// 		if (rounds !== null && rounds[roundNum] !== undefined) {
// 			resultArray[i] = rounds[roundNum];
// 		}
// 		else {
// 			resultArray[i] = null;
// 		}
// 	}

// 	return resultArray.map((round, index) => {
// 		let content = (
// 			<>
// 			</>
// 		);

// 		if (round != null) {
// 			const HIGHLIGHT = "font-weight-bold";
// 			let markup = { winner: { flec: "", skirge: "" }, strategy_winner: { flec: "", skirge: "" } };

// 			markup.winner[round.winner] = HIGHLIGHT;
// 			markup.strategy_winner[round._strategy_winner] = HIGHLIGHT;

// 			content = (
// 				<>
// 					<td>{round.winner}</td>
// 					<td className={markup.winner.flec}>{round.flec_score}</td>
// 					<td className={markup.winner.skirge}>{round.skirge_score}</td>
// 					<td className={markup.strategy_winner.flec}>{round._flec_strategy_vote}</td>
// 					<td className={markup.strategy_winner.skirge}>{round._skirge_strategy_vote}</td>
// 					<td>{round._flec_action}</td>
// 					<td>{round._skirge_action}</td>
// 				</>
// 			);
// 		}

// 		return (
// 			<tr key={index}>
// 				<td>{index + 1}</td>
// 				{content}
// 			</tr>
// 		)
// 	});
// }

// function Match(props) {
// 	const gameConfig = useContext(GameConfigContext);

// 	return (
// 		<Table>
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
// 				{displayRounds(gameConfig, props.rounds)}
// 			</tbody>
// 		</Table>
// 	);
// }

// function Phase(props) {
// 	const gameConfig = useContext(GameConfigContext);
// 	let content = [];

// 	for (let i = 0; i < gameConfig.matchesPerShowdown; i++) {
// 		const HIGHLIGHT = "font-weight-bold";
// 		let matchNum = (i + 1).toString();
// 		let buttonMarkup;

// 		if (props.matches !== null && props.matches[matchNum] !== undefined) {
// 			let result = props.results[matchNum];
// 			let markup = { winner: { flec: "", skirge: "" } };

// 			if ((result.flec_round_wins + result.skirge_round_wins) === gameConfig.roundsPerMatch) {
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
// 								<span className={markup.winner.flec}>{gameConfig.flecTeamNames[result.flec_team]} {result.flec_round_wins}</span>
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
// 								{gameConfig.flecTeamNames[gameConfig.conflictTeams[props.phaseSlug]]} v Skirge
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
// 	const gameConfig = useContext(GameConfigContext);
// 	let content = [];

// 	for (let i = 0; i < gameConfig.phaseSlugs.length; i++) {
// 		let phaseSlug = gameConfig.phaseSlugs[i];

// 		if (props.episodeData.outcomes[phaseSlug] !== undefined) {
// 			content[i] = (
// 				<React.Fragment key={gameConfig.phaseSlugs[i]}>
// 					<h3>{gameConfig.gameDefs.conflicts[i.toString()].name}</h3>
// 					<Phase matches={props.episodeData.outcomes[phaseSlug]} results={props.episodeData.results.match[phaseSlug]} phaseSlug={phaseSlug} />
// 				</React.Fragment>
// 			);
// 		}
// 		else {
// 			content[i] = (
// 				<React.Fragment key={gameConfig.phaseSlugs[i]}>
// 					<h3>{gameConfig.gameDefs.conflicts[i.toString()].name}</h3>
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

//TODO: Move code out of this function as it's called for every render!
function App() {
	const classes = useStyles();
	const [episodeData, setEpisodeData] = useState(null)
	const [gameConfig, setGameConfig] = useState(null)

	async function loadExampleData() {
		// Forces a UX refresh which resets any expansions
		setEpisodeData(null);

		await new Promise(resolve => setTimeout(resolve, 1));
		setEpisodeData(gameConfig.exampleEpisodes[0].data);

		return true;
	}

	async function loadLiveData() {
		// Forces a UX refresh which resets any expansions
		setEpisodeData(null);

		await fetch('https://metaboss.blockade.games/api/get-stats?episode=s01e02')
			.then(res => res.json())
			.then((loadedData) => {
				setEpisodeData(loadedData.data);
			})
			.catch((error) => {
				console.error(error);
			})
		return true;
	}

	// This will only be called once
	useEffect(() => {
		setGameConfig(new GameConfig(gameDefs));
		loadLiveData();
	}, []);


	// let exampleEpisodes;
	// if (episodeData && episodeData._exampleEpisode) {
	// 	exampleMode = (
	// 		<>
	// 			<Badge variant="danger">Example Mode!</Badge>
	// 		</>
	// 	);
	// }

	return (
		<Container maxWidth="lg">
			{/*			<p></p>
			<LoadingButton variant="primary" onLoad={loadLiveData} label="Live Data" />&nbsp;
			<LoadingButton variant="primary" onLoad={loadExampleData} label="Example Data" />
			&nbsp;{exampleMode}&nbsp;
			<p></p>
			<GameConfigContext.Provider value={gameConfig}>
				<Game episodeData={episodeData} />
			</GameConfigContext.Provider>
			*/}
			<Typography className={classes.winStyle} variant="h1" color="primary">
				Test
			</Typography>
		</Container>
	);
}

export default App;
