import _ from 'lodash';

import exampleEpisodes from './exampleEpisodes.js';

const STRATEGIES = ["Fire", "Snow", "Water"];
const STRATEGY_COMPARE = {
	"-": { "-": null, "Fire": false, "Snow": false, "Water": false },
	"Fire": { "-": true, "Fire": null, "Snow": true, "Water": false },
	"Snow": { "-": true, "Fire": false, "Snow": null, "Water": true },
	"Water": { "-": true, "Fire": true, "Snow": false, "Water": null }
};

export default class GameConfig {
	constructor(gameDefs) {
		this.gameDefs = gameDefs;
		this.flecTeamNames = { rogue: "rogue", sage: "sage", armr: "armr" };
		this.conflictTeams = { infiltration: "", analysis: "", combat: "" };
		this.phaseSlugs = ["infiltration", "analysis", "assault"];
		this.exampleEpisodes = exampleEpisodes;

		this.teamActions = {
			skirge: {
				'0': gameDefs.actions.skirge['0'].name,
				'1': gameDefs.actions.skirge['1'].name,
				'2': gameDefs.actions.skirge['2'].name,
				'3': gameDefs.actions.skirge['3'].name,
			},
			rogue: {
				'0': gameDefs.actions.rogue['0'].name,
				'1': gameDefs.actions.rogue['1'].name,
				'2': gameDefs.actions.rogue['2'].name,
				'3': gameDefs.actions.rogue['3'].name,
			},
			sage: {
				'0': gameDefs.actions.sage['0'].name,
				'1': gameDefs.actions.sage['1'].name,
				'2': gameDefs.actions.sage['2'].name,
				'3': gameDefs.actions.sage['3'].name,
			},
			armr: {
				'0': gameDefs.actions.armr['0'].name,
				'1': gameDefs.actions.armr['1'].name,
				'2': gameDefs.actions.armr['2'].name,
				'3': gameDefs.actions.armr['3'].name,
			}
		};

		this.exampleEpisodes.map(episode => episode.data._exampleEpisode = true);

		_.forIn(gameDefs.flec, (value, key) => {
			this.flecTeamNames[value.slug] = value.name;
			this.conflictTeams[value.conflict] = value.slug;
		});

		this.matchesPerShowdown = gameDefs.matchesPerShowdown;
		this.roundsPerMatch = gameDefs.roundsPerMatch;
		//this.episodesPerSeason = gameDefs.episodesPerSeason;
	}

	// Prefaces marked up keys with _
	ProcessResults(episodeData) {
		// No need to process it twice
		if (!episodeData.processed) {
			const outcomes = episodeData.outcomes;
			const nameStrategy = (s) => (s != null) ? STRATEGIES[s] : "-";
			const nameAction = (team, s) => (s != null) ? this.teamActions[team][s] : "-";

			_.forIn(outcomes, function (phase, key) {
				_.forIn(phase, function (match, key) {
					_.forIn(match, function (round, key) {
						// Make sense of the results
						round._flec_strategy_vote = nameStrategy(round.flec_strategy_vote);
						round._skirge_strategy_vote = nameStrategy(round.skirge_strategy_vote);

						round._flec_action = nameAction(round.flec_faction, round.flec_action);
						round._skirge_action = nameAction("skirge", round.skirge_action);

						// Add extra metadata
						let result = STRATEGY_COMPARE[round._flec_strategy_vote][round._skirge_strategy_vote];
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
}