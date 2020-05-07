import React, { useState, useEffect, useContext } from 'react';
import Box from '@material-ui/core/Box';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';

import { GameConfigContext } from './App.js';
//import GameConfig from './GameConfig';
//import gameDefs from './gameDefs.js';

//import Table from 'react-bootstrap/Table';
// import Card from 'react-bootstrap/Card';
// import Accordion from 'react-bootstrap/Accordion';
// import Badge from 'react-bootstrap/Badge';

function displayRounds(gameConfig, rounds) {
	let resultArray = [];

	for (let i = 0; i < gameConfig.roundsPerMatch; i++) {
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
					<td className={markup.strategy_winner.flec}>{round._flec_strategy_vote}</td>
					<td className={markup.strategy_winner.skirge}>{round._skirge_strategy_vote}</td>
					<td>{round._flec_action}</td>
					<td>{round._skirge_action}</td>
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
	const gameConfig = useContext(GameConfigContext);

	return (
		<Table>
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
				{displayRounds(gameConfig, props.rounds)}
			</tbody>
		</Table>
	);
}

function Phase(props) {
	const gameConfig = useContext(GameConfigContext);
	let content = [];

	for (let i = 0; i < gameConfig.matchesPerShowdown; i++) {
		const HIGHLIGHT = "font-weight-bold";
		let matchNum = (i + 1).toString();
		let buttonMarkup;

		if (props.matches !== null && props.matches[matchNum] !== undefined) {
			let result = props.results[matchNum];
			let markup = { winner: { flec: "", skirge: "" } };

			if ((result.flec_round_wins + result.skirge_round_wins) === gameConfig.roundsPerMatch) {
				buttonMarkup = (result.winner === "flec") ? "success" : "danger";
				markup.winner[result.winner] = HIGHLIGHT;
			}
			else {
				buttonMarkup = "warning";
			}

			content[i] = (
				<React.Fragment key={i}>
					<ExpansionPanel>
						<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id={i.toString()}>
							<span className={markup.winner.flec}>{gameConfig.flecTeamNames[result.flec_team]} {result.flec_round_wins}</span>
							{" - "}
							<span className={markup.winner.skirge}>{result.skirge_round_wins} Skirge</span>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Match rounds={props.matches[matchNum]} />
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</React.Fragment>
			);
		}
		else {
			buttonMarkup = "secondary";

			content[i] = (
				<React.Fragment key={i}>
					<ExpansionPanel>
						<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id={i.toString()}>
							{gameConfig.flecTeamNames[gameConfig.conflictTeams[props.phaseSlug]]} v Skirge
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Match rounds={null} />
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</React.Fragment >
			);
		}
	}

	return (
		<>
			{content}
		</>
	);
}

function Episode(props) {
	const gameConfig = useContext(GameConfigContext);
	let content = [];

	for (let i = 0; i < gameConfig.phaseSlugs.length; i++) {
		let phaseSlug = gameConfig.phaseSlugs[i];

		if (props.episodeData.outcomes[phaseSlug] !== undefined) {
			content[i] = (
				<React.Fragment key={gameConfig.phaseSlugs[i]}>
					<h3>{gameConfig.gameDefs.conflicts[i.toString()].name}</h3>
					<Phase matches={props.episodeData.outcomes[phaseSlug]} results={props.episodeData.results.match[phaseSlug]} phaseSlug={phaseSlug} />
				</React.Fragment>
			);
		}
		else {
			content[i] = (
				<React.Fragment key={gameConfig.phaseSlugs[i]}>
					<h3>{gameConfig.gameDefs.conflicts[i.toString()].name}</h3>
					<Phase matches={null} results={props.episodeData.results.match[phaseSlug]} phaseSlug={phaseSlug} />
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

function ResultsPage(props) {
	const gameConfig = useContext(GameConfigContext);

	var content = "temp";

	if (props.episodeData !== null) {
		gameConfig.ProcessResults(props.episodeData);

		content = (<Episode episodeData={props.episodeData} />);
	}

	return (
		<Box m={2}>
			{content}
		</Box>
	);
}

export default ResultsPage;
