import React, { useState } from 'react';
import './App.css';
import _ from 'lodash';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { metaboss_testdata } from './data.js';

function listResults(results) {
		// Get keys into an array
		let resultArray = [];

		_.forIn(results['1'], function(value, key) {
				resultArray[parseInt(key)] = value;
		});

		return resultArray.map((round, index) =>
			<tr>
					<td>{index}</td>
					<td>{round.winner}</td>
					<td>{round.flec_score}</td>
					<td>{round.skirge_score}</td>
					<td>{round.flec_strategy_vote}</td>
					<td>{round.skirge_strategy_vote}</td>
					<td>{round.flec_action}</td>
					<td>{round.skirge_action}</td>
			</tr>
		);
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
	return (
		<Container>
			<Episode outcomes={metaboss_testdata.data.outcomes} />
		</Container>
	);
}

export default App;
