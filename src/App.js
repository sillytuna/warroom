import React from 'react';
import './App.css';
import _ from 'lodash';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
//import Button from 'react-bootstrap/Button';

import { metaboss_testdata, GAMEDATA } from './exampleData.js';

function strategyResult(a, b) {
		const STRATEGY_CHECK = {
				"-": 			{"-": null, "Fire": false, "Snow": false, "Water": false},
				"Fire":		{"-": true, "Fire": null, "Snow": true, "Water": false},
				"Snow":		{"-": true, "Fire": false, "Snow": null, "Water": true},
				"Water":	{"-": true, "Fire": true, "Snow": false, "Water": null}
		};

		return STRATEGY_CHECK[a][b];
}

function listResults(results) {
		// Get keys into an array
		let resultArray = [];

		_.forIn(results['1'], function(value, key) {
				resultArray[key] = value;
		});

		return resultArray.map((round, index) => {
				const HIGHLIGHT = "font-weight-bold";
				let markup = { winner: { flec: "", skirge: ""}, strategy_winner: { flec: "", skirge: ""} };

				(round._winner === "flec") ? markup.winner.flec = HIGHLIGHT : markup.winner.skirge = HIGHLIGHT;
				(round._strategy_winner === "flec") ? markup.strategy_winner.flec = HIGHLIGHT : markup.strategy_winner.skirge = HIGHLIGHT;

				return (
					<tr>
							<td>{index}</td>
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

function ProcessResults(data) {
	let outcomes = data.outcomes;

	const STRATEGIES = ["Fire", "Snow", "Water"];
	let nameStrategy = (s) => (s != null) ? STRATEGIES[s]: "-";

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

	let nameAction = (team, s) => (s != null) ? TEAM_ACTIONS[team][s]: "-";

	_.forIn(outcomes, function(phase, key) {
			_.forIn(phase, function(match, key) {
				_.forIn(match, function(round, key) {
						// Make sense of the results
						round.flec_strategy_vote = nameStrategy(round.flec_strategy_vote);
						round.skirge_strategy_vote = nameStrategy(round.skirge_strategy_vote);

						round.flec_action = nameAction(round.flec_faction, round.flec_action);
						round.skirge_action = nameAction("skirge", round.skirge_action);

						// Add extra metadata
						(round.flec_score > round.skirge_score) ? round._winner = "flec" : round._winner = "skirge";

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

function Episode(props) {
	return (
		<div>
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
					{listResults(props.outcomes.infiltration)}
				</tbody>
			</Table>
		</div>
	);
}

function App() {
	ProcessResults(metaboss_testdata.data);

	return (
		<Container>
			<Episode outcomes={metaboss_testdata.data.outcomes} />
		</Container>
	);
}

export default App;
