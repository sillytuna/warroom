import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import LoadingButton from './LoadingButton';
import ResultsPage from './ResultsPage';
import GameConfig from './GameConfig';
import gameDefs from './gameDefs.js';

const gameConfig = new GameConfig(gameDefs)
const GameConfigContext = React.createContext();

function App() {
	const [episodeData, setEpisodeData] = useState(null)

	async function loadExampleData() {
		// Forces a UX refresh which resets any expansions
		setEpisodeData(null);

		await new Promise(resolve => setTimeout(resolve, 1));
		setEpisodeData(gameConfig.exampleEpisodes[0].data);

		return true;
	}

	async function loadLiveData() {
		// Forces a UX refresh which resets any expansions
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
		loadLiveData();
	}, []);

	return (
		<Box bgcolor="#FAFAFA">
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item>
						<Badge color="secondary" variant="dot" invisible={episodeData && episodeData._exampleEpisode}>
							<LoadingButton onLoad={loadLiveData} label="Live Data" />{' '}
						</Badge>
					</Grid>
					<Grid item>
						<Badge color="secondary" variant="dot" invisible={!(episodeData && episodeData._exampleEpisode)}>
							<LoadingButton onLoad={loadExampleData} label="Example Data" />
						</Badge>
					</Grid>
				</Grid>
				<GameConfigContext.Provider value={gameConfig}>
					<ResultsPage episodeData={episodeData} />
				</GameConfigContext.Provider>
			</Container >
		</Box>
	);
}

export default App;
export { GameConfigContext };
