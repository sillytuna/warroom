export const GAMEDATA =
{
	"basePoints"         : 25,
	"flecMultiple"       : 3,
	"flecSplitFirst"     : 0.8,
	"flecSplitSecond"    : 0.2,
	"skirgeSplitFirst"   : 0.88,
	"skirgeSplitSecond"  : 0.12,
	"strategyMultiplier" : 1.2,
	"roundsPerMatch"     : 8,
	"matchesPerShowdown" : 3,
	"episodesPerSeason"  : 12,
	"maxNftCountPerType" : 75,
	"autoEnrollPlayers"  : false,
	"fragOptions" : [
		{
			"cost" : 299,
			"amount" : 30,
			"available" : true
		},
		{
			"cost" : 699,
			"amount" : 80,
			"available" : true
		},
		{
			"cost" : 1599,
			"amount" : 200,
			"available" : true
		},
		{
			"cost" : 7499,
			"amount" : 1000,
			"available" : true
		}
	],
	"conflicts" : [
		{
			"name" : "Infiltration",
			"slug" : "infiltration",
			"skill" : "subterfuge"
		},
		{
			"name" : "Analysis",
			"slug" : "analysis",
			"skill" : "intellect"
		},
		{
			"name" : "Assault",
			"slug" : "assault",
			"skill" : "combat"
		}
	],
	"flec" : [
		{
			"name" : "Rogue Division",
			"slug" : "rogue",
			"conflict" : "infiltration"
		},
		{
			"name" : "Sage Corps",
			"slug" : "sage",
			"conflict" : "analysis"
		},
		{
			"name" : "ARM&R",
			"slug" : "armr",
			"conflict" : "assault"
		}
	],
	"nfts" : [
		"Axie Infinity",
		"CryptoKitties",
		"Neon District",
		"Battle Racers",
		"Light Trail Rush",
		"Gods Unchained",
		"Crypto Space Commander",
		"MyCryptoHeroes",
		"Ethereum Name Service",
		"Decentraland",
		"Chainbreakers",
		"The Sandbox",
		"F1&reg; Delta Time",
		"SuperRare",
		"Urbit ID",
		"Cats In Mechs",
		"Age of Rust",
		"Cryptovoxels",
		"Ledger of Szabo",
		"Plasma Bears",
		"Avastars",
		"Josie's Art Pieces",
		"Reality Clash"
	],
	"contracts" : {
		"Axie Infinity" : [
			"0xf5b0a3efb8e8e4c201e2a935f110eaaf3ffecb8d"
		],
		"CryptoKitties" : [
			"0x06012c8cf97bead5deae237070f9587f8e7a266d"
		],
		"Neon District" : [
			"0x25741f5f2dbdde9cfd38f73be7052ec03b0e9d85",
			"0x1276dce965ada590e42d62b3953ddc1ddceb0392",
			"0x238f2d6787dacb6045d72b0ec6626de0ff7c3107",
			"0xf7ddc72b2b2cc275c1b40e289fa158b24a282d90",
			"0xc328520a8b1cead2489d59c16b7752cb60ebb53d"
		],
		"Battle Racers" : [
			"0x0f3b491841680eb40bd2be42bce7104f2511dbd9",
			"0x238f2d6787dacb6045d72b0ec6626de0ff7c3107"
		],
		"Light Trail Rush" : [
			"0x5ee0900fa78dc40279cc7372884f1a2ee515f876",
			"0x5b133e0fd79ace5449bf925a2521b3c100133527",
			"0x3eb63d51264ce35b7e3320ae2e70813e264c610e",
			"0x238f2d6787dacb6045d72b0ec6626de0ff7c3107"
		],
		"Gods Unchained" : [
			"0x0e3a2a1f2146d86a604adc220b4967a898d7fe07"
		],
		"Crypto Space Commander" : [
			"0x4d3814d4da8083b41861dec2f45b4840e8b72d68"
		],
		"MyCryptoHeroes" : [
			"0x273f7f8e6489682df756151f5525576e322d51a3",
			"0xdceaf1652a131f32a821468dc03a92df0edd86ea",
			"0x617913dd43dbdf4236b85ec7bdf9adfd7e35b340"
		],
		"Ethereum Name Service" : [
			"0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85"
		],
		"Decentraland" : [
			"0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d",
			"0x959e104e1a4db6317fa58f8295f586e1a978c297",
			"0x2a187453064356c898cae034eaed119e1663acb8",
			"0x201c3af8c471e5842428b74d1e7c0249adda2a92",
			"0x3163d2cfee3183f9874e2869942cc62649eeb004",
			"0xc04528c14c8ffd84c7c1fb6719b4a89853035cdd",
			"0x07ccfd0fbada4ac3c22ecd38037ca5e5c0ad8cfa",
			"0xd35147be6401dcb20811f2104c33de8e97ed6818",
			"0x32b7495895264ac9d0b12d32afd435453458b1c6",
			"0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2",
			"0xf64dc33a192e056bb5f0e5049356a0498b502d50",
			"0xc3af02c0fd486c8e9da5788b915d6fff3f049866"
		],
		"Chainbreakers" : [
			"0x0111ac7e9425c891f935c4ce54cf16db7c14b7db",
			"0x38e908b70c8e0dcfe452c0fb2ebf432f9c5a6f20",
			"0x23766996636058b41a041d441ce1217c694f5aa9",
			"0xfdda51b074d2213b5976396d8db36d48071646bd"
		],
		"The Sandbox" : [
			"0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a",
			"0x067a1eb5e383ed24b66d72aaf80d8d7db3d299a8"
		],
		"F1&reg; Delta Time" : [
			"0x2af75676692817d85121353f0d6e8e9ae6ad5576"
		],
		"SuperRare" : [
			"0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0",
			"0x41a322b28d0ff354040e2cbc676f0320d8c8850d"
		],
		"Urbit ID" : [
			"0x6ac07b7c4601b5ce11de8dfe6335b871c7c4dd4d"
		],
		"Cats In Mechs" : [
			"0xfaafdc07907ff5120a76b34b731b278c38d6043c"
		],
		"Age of Rust" : [
			"0xfaafdc07907ff5120a76b34b731b278c38d6043c"
		],
		"Cryptovoxels" : [
			"0x79986af15539de2db9a5086382daeda917a9cf0c",
			"0xa58b5224e2fd94020cb2837231b2b0e4247301a6",
			"0x4243a8413a77eb559c6f8eaffa63f46019056d08"
		],
		"Ledger of Szabo" : [
			"0x28cfaf829d7d0a684b33c3afca06905ef5e071bd"
		],
		"Plasma Bears" : [
			"0x909899c5dbb5002610dd8543b6f638be56e3b17e"
		],
		"Avastars" : [
			"0xf3e778f839934fc819cfa1040aabacecba01e049"
		],
		"Josie's Art Pieces" : [
			"0xecf7ef42b57ee37a959bf507183c5dd6bf182081"
		],
		"Reality Clash" : [
			"0x20bd491fee75b6af6c2100c83b83312d620f2958"
		]
	},
	"modifiers" : {
		"Ethereum Name Service" : {
			"subterfuge" : 0.40,
			"intellect"  : 0.80,
			"combat"     : 0.10
		},
		"Urbit ID" : {
			"subterfuge" : 0.05,
			"intellect"  : 1.50,
			"combat"     : 0.05
		},
		"Age of Rust" : {
			"subterfuge" : 0.25,
			"intellect"  : 0.70,
			"combat"     : 0.35
		},
		"Cryptovoxels" : {
			"subterfuge" : 0.25,
			"intellect"  : 0.50,
			"combat"     : 0.25
		},
		"Ledger of Szabo" : {
			"subterfuge" : 0.50,
			"intellect"  : 0.50,
			"combat"     : 0.50
		},
		"The Sandbox" : {
			"subterfuge" : 0.35,
			"intellect"  : 0.45,
			"combat"     : 0.20
		},
		"Light Trail Rush" : {
			"subterfuge" : 0.40,
			"intellect"  : 0.45,
			"combat"     : 0.15
		},
		"Cats In Mechs" : {
			"subterfuge" : 0.30,
			"intellect"  : 0.40,
			"combat"     : 0.60
		},
		"Battle Racers" : {
			"subterfuge" : 0.60,
			"intellect"  : 0.40,
			"combat"     : 0.50
		},
		"Plasma Bears" : {
			"subterfuge" : 0.40,
			"intellect"  : 0.40,
			"combat"     : 0.40
		},
		"Decentraland" : {
			"subterfuge" : 0.20,
			"intellect"  : 0.35,
			"combat"     : 0.20
		},
		"Avastars" : {
			"subterfuge" : 0.50,
			"intellect"  : 0.35,
			"combat"     : 0.15
		},
		"Axie Infinity" : {
			"subterfuge" : 0.25,
			"intellect"  : 0.25,
			"combat"     : 0.25
		},
		"Neon District" : {
			"subterfuge" : 0.35,
			"intellect"  : 0.25,
			"combat"     : 0.30
		},
		"CryptoKitties" : {
			"subterfuge" : 0.20,
			"intellect"  : 0.20,
			"combat"     : 0.20
		},
		"Crypto Space Commander" : {
			"subterfuge" : 0.20,
			"intellect"  : 0.20,
			"combat"     : 0.30
		},
		"MyCryptoHeroes" : {
			"subterfuge" : 0.20,
			"intellect"  : 0.20,
			"combat"     : 0.60
		},
		"Gods Unchained" : {
			"subterfuge" : 0.15,
			"intellect"  : 0.15,
			"combat"     : 0.15
		},
		"Josie's Art Pieces" : {
			"subterfuge" : 2.00,
			"intellect"  : 0.15,
			"combat"     : 0.15
		},
		"Reality Clash" : {
			"subterfuge" : 0.10,
			"intellect"  : 0.10,
			"combat"     : 0.80
		},
		"F1&reg; Delta Time" : {
			"subterfuge" : 0.80,
			"intellect"  : 0.10,
			"combat"     : 0.10
		},
		"Chainbreakers" : {
			"subterfuge" : 0.05,
			"intellect"  : 0.05,
			"combat"     : 1.20
		},
		"SuperRare" : {
			"subterfuge" : 1.00,
			"intellect"  : 0.05,
			"combat"     : 0.05
		}
	},
	"enjin" : [
		"0xfaafdc07907ff5120a76b34b731b278c38d6043c"
	],
	"enjinOpenseaSlugs" : {
		"cats-in-mechs" : "Cats In Mechs",
		"age-of-rust"   : "Age of Rust"
	},
	"strategies" : [
		{
			"conflict" : "infiltration",
			"flec" : {
				"title" : "Rogue Division Infiltration Strategies",
				"slug" : "rogue",
				"options" : [
					{
						"id" : 0,
						"name" : "Special Reconnaissance",
						"desc" : "Rogue Division should send in a special reconnaissance team to physically infiltrate the Skirge lab. Strong against Random Patroling, but weak against Increased Surveillance.",
						"victory" : ""
					},
					{
						"id" : 1,
						"name" : "MASINT",
						"desc" : "Rogue Division should use mass surveillance techniques to detect and identify an exploitable Skirge security practice. Strong against Rigorous Procedure, but weak against Random Patroling.",
						"victory" : ""
					},
					{
						"id" : 2,
						"name" : "Social Engineering",
						"desc" : "Rogue Division should employ heterogeneous attacks on various individuals to ascertain entry into the Skirge lab. Strong against Increased Surveillance, but weak against Rigorous Procedure.",
						"victory" : ""
					}
				]
			},
			"skirge" : {
				"title" : "Skirge Corporation Subterfuge Strategies",
				"options" : [
					{
						"id" : 0,
						"name" : "Increased Surveillance",
						"desc" : "Skirge should focus on actively finding and stopping FLEC from physically infiltrating our lab location. Strong against Special Reconnaissance, but weak against Social Engineering.",
						"victory" : ""
					},
					{
						"id" : 1,
						"name" : "Random Patrolling",
						"desc" : "Skirge should start randomizing our patrolling patterns, making FLEC infiltrations more difficult. Strong against MASINT, but weak against Special Reconnaissance.",
						"victory" : ""
					},
					{
						"id" : 2,
						"name" : "Rigorous Procedure",
						"desc" : "Skirge should be more aware of FLEC's attempts at compromising the human elements of our security. Strong against Social Engineering, but weak against MASINT.",
						"victory" : ""
					}
				]
			}
		},
		{
			"conflict" : "analysis",
			"flec" : {
				"title" : "Sage Corps Analysis Strategies",
				"slug" : "sage",
				"options" : [
					{
						"id" : 0,
						"name" : "Hypothesis Testing",
						"desc" : "Sage Corps should try testing various decryption techniques looking for anomolies in Skirge's data. Strong against Data Obfuscation, but weak against Multivariate Noise.",
						"victory" : ""
					},
					{
						"id" : 1,
						"name" : "Probability Modeling",
						"desc" : "Sage Corps should build models based on common patterns and practices in order to uncover a complete data picture. Strong against Smokescreen Data, but weak against Data Obfuscation.",
						"victory" : ""
					},
					{
						"id" : 2,
						"name" : "Narrative Analysis",
						"desc" : "Sage Corps should thread together several highly qualitative narratives in order to rule out any misinformation from Skirge. Strong against Multivariate Noise, but weak against Smokescreen Data.",
						"victory" : ""
					}
				]
			},
			"skirge" : {
				"title" : "Skirge Corporation Subterfuge Strategies",
				"options" : [
					{
						"id" : 0,
						"name" : "Multivariate Noise",
						"desc" : "Skirge should introduce multivariate Gaussian noise into our information artifacts in order to hide the nature of our data. Strong against Hypothesis Testing, but weak against Narrative Analysis.",
						"victory" : ""
					},
					{
						"id" : 1,
						"name" : "Data Obfuscation",
						"desc" : "Skirge should hide our data behind layers of obfuscation making our information more difficult for FLEC to find. Strong against Probability Modeling, but weak against Hypothesis Testing.",
						"victory" : ""
					},
					{
						"id" : 2,
						"name" : "Smokescreen Data",
						"desc" : "Skirge should produce large amounts of misinformation in order to mislead the FLEC analysts into making bad assumptions. Strong against Narrative Analysis, but weak against Probability Modeling.",
						"victory" : ""
					}
				]
			}
		},
		{
			"conflict" : "assault",
			"flec" : {
				"title" : "ARMR Assault Strategies",
				"slug" : "armr",
				"options" : [
					{
						"id" : 0,
						"name" : "Hammer and Anvil",
						"desc" : "ARM&R should perform a split attack on the Skirge lab from two sides, limiting the effectiveness of their maneuverability. Strong against Combat Maneuvering, but weak against Increased Fortification.",
						"victory" : ""
					},
					{
						"id" : 1,
						"name" : "Force Concentration",
						"desc" : "ARM&R should bring a simple, concentrated attack to the middle and overwhelm any distributed defense in place. Strong against Communications Scrambling, but weak against Combat Maneuvering.",
						"victory" : ""
					},
					{
						"id" : 2,
						"name" : "Precision Strikes",
						"desc" : "ARM&R should isolate and destroy several strategic targets in order to cripple Skirge's overall battle readiness. Strong against Increased Fortification, but weak against Communications Scrambling.",
						"victory" : ""
					}
				]
			},
			"skirge" : {
				"title" : "Skirge Corporation Security Strategies",
				"options" : [
					{
						"id" : 0,
						"name" : "Increased Fortification",
						"desc" : "Skirge should focus the bulk of our defense in the areas FLEC is most likely to attack. Strong against Hammer and Anvil, but weak against Precision Strikes.",
						"victory" : ""
					},
					{
						"id" : 1,
						"name" : "Combat Maneuvering",
						"desc" : "Skirge should remain agile, enabling our shock troops to effectively outflank any FLEC direct assault. Strong against Force Concentration, but weak against Hammer and Anvil.",
						"victory" : ""
					},
					{
						"id" : 2,
						"name" : "Communications Scrambling",
						"desc" : "Skirge should concentrate on disrupting FLEC's communications to prevent a strongly coordinated mission. Strong against Precision Strikes, but weak against Force Concentration.",
						"victory" : ""
					}
				]
			}
		}
	],
	"actions" : {
		"skirge" : [
			{
				"id"     : 0,
				"name"   : "Patrol",
				"desc"   : "You and your team step up your patrolling, covering every nook and cranny, in search for FLEC klutzes."
			},
			{
				"id"     : 1,
				"name"   : "Survey",
				"desc"   : "You and your team survey the incoming FLEC peasants and expose their many weaknesses."
			},
			{
				"id"     : 2,
				"name"   : "Coordinate",
				"desc"   : "You and your team coordinate the valiant Skirge response to the advances from the fools of FLEC."
			},
			{
				"id"     : 3,
				"name"   : "Charge",
				"desc"   : "You and your team charge straight into the soft and supple teeth of those interloping whiners in FLEC."
			}
		],
		"rogue" : [
			{
				"id"     : 0,
				"name"   : "Hunt",
				"desc"   : "Skirge is inherently sloppy and can't stop you and your elite squad from discovering the location of their new hideout."
			},
			{
				"id"     : 1,
				"name"   : "Procure",
				"desc"   : "When Rogue Division wants all the best toys, they call upon you and your team of high tech specialists to deliver the goods."
			},
			{
				"id"     : 2,
				"name"   : "Phish",
				"desc"   : "Phishing those buffoons at Skirge couldn't be easier.  You and your team might even make a podcast from all the hilarious recordings."
			},
			{
				"id"     : 3,
				"name"   : "Infiltrate",
				"desc"   : "Skirge's strongest defense is nothing compared to you and your team of skydiving, ziplining, basejumping super-ninjas."
			}
		],
		"sage" : [
			{
				"id"     : 0,
				"name"   : "Decrypt",
				"desc"   : "Their terrible data encryption algorithms aren't even salted.  You and your team will brute force your way into their network."
			},
			{
				"id"     : 1,
				"name"   : "Cluster",
				"desc"   : "Their simple patterns are child's play.  You and your team will easily gather, cluster, and divine all of their secrets."
			},
			{
				"id"     : 2,
				"name"   : "Report",
				"desc"   : "Their embarrassing attempts at hiding their top secrets are weak.  You and your team can easily parse and generate reports proving it."
			},
			{
				"id"     : 3,
				"name"   : "Code",
				"desc"   : "Their bytecode is a snap to traverse.  You and your team will have these data decryption algorithms coded up in minutes, not months."
			}
		],
		"armr" : [
			{
				"id"     : 0,
				"name"   : "Bomb",
				"desc"   : "Badasses drop bombs.  You and your team are going to show those sissies at Skirge what it's like to experience and ordinance hailstorm."
			},
			{
				"id"     : 1,
				"name"   : "Supply",
				"desc"   : "Warriors work the supply lines.  You and your team are going to pound your way through those weak Skirge lines and deliver destruction on time."
			},
			{
				"id"     : 2,
				"name"   : "Radio",
				"desc"   : "Saviors are making it rain.  You and your team are about to call down the thunder making Skirge flee in terror from your pinpoint air strikes."
			},
			{
				"id"     : 3,
				"name"   : "Firefight",
				"desc"   : "Oorah.  The time for trigger discipline is done.  You and your team are bringing all the wetwork to Skirge's yard."
			}
		]
	}
};

export const metaboss_testdata =
{
  "data": {
    "params": {
      "episode": "s01e01",
      "showdown": null,
      "match": null,
      "round": null
    },
    "episode": {
      "counts": {
        "wallets": 80,
        "nfts": 8302
      },
      "nftcounts": {
        "Age of Rust": 4051,
        "Avastars": 247,
        "Axie Infinity": 340,
        "Battle Racers": 16,
        "Cats In Mechs": 115,
        "Chainbreakers": 26,
        "Crypto Space Commander": 82,
        "CryptoKitties": 826,
        "Cryptovoxels": 184,
        "Decentraland": 209,
        "Ethereum Name Service": 162,
        "F1&reg; Delta Time": 117,
        "Gods Unchained": 602,
        "Josie's Art Pieces": 5,
        "Ledger of Szabo": 27,
        "Light Trail Rush": 5,
        "Neon District": 974,
        "Plasma Bears": 27,
        "SuperRare": 120,
        "The Sandbox": 113,
        "Urbit ID": 30,
        "Reality Clash": 1,
        "MyCryptoHeroes": 23
      },
      "faction": {
        "skirge": {
          "wallets": 38,
          "nfts": 4891,
          "nftcounts": {
            "Age of Rust": 2175,
            "Avastars": 246,
            "Axie Infinity": 257,
            "Battle Racers": 3,
            "Cats In Mechs": 36,
            "Chainbreakers": 11,
            "Crypto Space Commander": 82,
            "CryptoKitties": 573,
            "Cryptovoxels": 168,
            "Decentraland": 134,
            "Ethereum Name Service": 109,
            "F1&reg; Delta Time": 39,
            "Gods Unchained": 379,
            "Josie's Art Pieces": 4,
            "Ledger of Szabo": 15,
            "Light Trail Rush": 1,
            "Neon District": 463,
            "Plasma Bears": 4,
            "SuperRare": 109,
            "The Sandbox": 53,
            "Urbit ID": 30
          }
        },
        "flec": {
          "wallets": 42,
          "nfts": 3411,
          "nftcounts": {
            "Age of Rust": 1876,
            "Axie Infinity": 83,
            "Battle Racers": 13,
            "Chainbreakers": 15,
            "CryptoKitties": 253,
            "Decentraland": 75,
            "Ethereum Name Service": 53,
            "F1&reg; Delta Time": 78,
            "Gods Unchained": 223,
            "Josie's Art Pieces": 1,
            "Ledger of Szabo": 12,
            "Light Trail Rush": 4,
            "Neon District": 511,
            "Plasma Bears": 23,
            "SuperRare": 11,
            "The Sandbox": 60,
            "Cats In Mechs": 79,
            "Cryptovoxels": 16,
            "Reality Clash": 1,
            "Avastars": 1,
            "MyCryptoHeroes": 23
          }
        },
        "rogue": {
          "wallets": 15,
          "nfts": 1207,
          "nftcounts": {
            "Age of Rust": 600,
            "Axie Infinity": 13,
            "Battle Racers": 8,
            "Chainbreakers": 10,
            "CryptoKitties": 171,
            "Decentraland": 15,
            "Ethereum Name Service": 2,
            "F1&reg; Delta Time": 75,
            "Gods Unchained": 105,
            "Josie's Art Pieces": 1,
            "Ledger of Szabo": 5,
            "Light Trail Rush": 1,
            "Neon District": 185,
            "Plasma Bears": 12,
            "SuperRare": 3,
            "The Sandbox": 1
          }
        },
        "sage": {
          "wallets": 15,
          "nfts": 813,
          "nftcounts": {
            "Age of Rust": 525,
            "Axie Infinity": 5,
            "Cats In Mechs": 3,
            "CryptoKitties": 22,
            "Cryptovoxels": 2,
            "Decentraland": 19,
            "Ethereum Name Service": 7,
            "Gods Unchained": 30,
            "Ledger of Szabo": 1,
            "Light Trail Rush": 2,
            "Neon District": 152,
            "Plasma Bears": 1,
            "Reality Clash": 1,
            "SuperRare": 7,
            "The Sandbox": 36
          }
        },
        "armr": {
          "wallets": 12,
          "nfts": 1391,
          "nftcounts": {
            "Age of Rust": 751,
            "Avastars": 1,
            "Axie Infinity": 65,
            "Battle Racers": 5,
            "Cats In Mechs": 76,
            "Chainbreakers": 5,
            "CryptoKitties": 60,
            "Cryptovoxels": 14,
            "Decentraland": 41,
            "Ethereum Name Service": 44,
            "F1&reg; Delta Time": 3,
            "Gods Unchained": 88,
            "Ledger of Szabo": 6,
            "Light Trail Rush": 1,
            "MyCryptoHeroes": 23,
            "Neon District": 174,
            "Plasma Bears": 10,
            "SuperRare": 1,
            "The Sandbox": 23
          }
        }
      }
    },
    "results": {
      "match": {
        "infiltration": {
          "1": {
            "winner": "flec",
            "loser": "skirge",
            "flec_team": "rogue",
            "flec_score": 2639.37764762,
            "skirge_score": 1403.00865047,
            "flec_round_wins": 5,
            "skirge_round_wins": 3
          },
          "2": {
            "winner": "skirge",
            "loser": "flec",
            "flec_team": "rogue",
            "flec_score": 1033.94743543,
            "skirge_score": 951.74778402,
            "flec_round_wins": 3,
            "skirge_round_wins": 5
          },
          "3": {
            "winner": "skirge",
            "loser": "flec",
            "flec_team": "rogue",
            "flec_score": 2217.79665065,
            "skirge_score": 5414.91277265,
            "flec_round_wins": 4,
            "skirge_round_wins": 4
          }
        },
        "analysis": {
          "1": {
            "winner": "flec",
            "loser": "skirge",
            "flec_team": "sage",
            "flec_score": 1221.55368641,
            "skirge_score": 924.51268366,
            "flec_round_wins": 6,
            "skirge_round_wins": 2
          },
          "2": {
            "winner": "flec",
            "loser": "skirge",
            "flec_team": "sage",
            "flec_score": 1106.69565306,
            "skirge_score": 619.94594418,
            "flec_round_wins": 6,
            "skirge_round_wins": 1
          }
        },
        "assault": {

        }
      }
    },
    "outcomes": {
      "infiltration": {
        "1": {
          "1": {
            "winner": "flec",
            "flec_faction": "rogue",
            "flec_score": 416.61018398,
            "skirge_score": 110.12667211,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 50.44025045,
            "skirge_roll": 51.38872581,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": 0,
            "skirge_strategy_vote": 2,
            "flec_action": 1,
            "skirge_action": 1,
            "counts": {
              "all": {
                "players": 12,
                "strategy": 9,
                "actions": 12,
                "powerups": 32
              },
              "skirge": {
                "players": 3,
                "strategy": 3,
                "actions": 3,
                "powerups": 4
              },
              "flec": {
                "players": 9,
                "strategy": 6,
                "actions": 9,
                "powerups": 28
              },
              "rogue": {
                "players": 6,
                "strategy": 6,
                "actions": 6,
                "powerups": 18
              },
              "sage": {
                "players": 2,
                "strategy": 0,
                "actions": 2,
                "powerups": 6
              },
              "armr": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 4
              }
            }
          },
          "2": {
            "winner": "flec",
            "flec_faction": "rogue",
            "flec_score": 1252.33525151,
            "skirge_score": 225.69101719,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 53.52219317,
            "skirge_roll": 53.03418099,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": 0,
            "skirge_strategy_vote": 0,
            "flec_action": 0,
            "skirge_action": 2,
            "counts": {
              "all": {
                "players": 21,
                "strategy": 13,
                "actions": 20,
                "powerups": 76
              },
              "skirge": {
                "players": 3,
                "strategy": 2,
                "actions": 2,
                "powerups": 6
              },
              "flec": {
                "players": 18,
                "strategy": 11,
                "actions": 18,
                "powerups": 70
              },
              "rogue": {
                "players": 11,
                "strategy": 11,
                "actions": 11,
                "powerups": 42
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 7,
                "strategy": 0,
                "actions": 7,
                "powerups": 28
              }
            }
          },
          "3": {
            "winner": "skirge",
            "flec_faction": "rogue",
            "flec_score": 172.04933077,
            "skirge_score": 456.75718725,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 59.87083823,
            "skirge_roll": 59.93576888,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": 0,
            "skirge_strategy_vote": 0,
            "flec_action": 0,
            "skirge_action": 1,
            "counts": {
              "all": {
                "players": 30,
                "strategy": 28,
                "actions": 30,
                "powerups": 40
              },
              "skirge": {
                "players": 20,
                "strategy": 19,
                "actions": 20,
                "powerups": 0
              },
              "flec": {
                "players": 10,
                "strategy": 9,
                "actions": 10,
                "powerups": 40
              },
              "rogue": {
                "players": 10,
                "strategy": 9,
                "actions": 10,
                "powerups": 40
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "4": {
            "winner": "flec",
            "flec_faction": "rogue",
            "flec_score": 371.36279666,
            "skirge_score": 269.97079963,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 64.95303682,
            "skirge_roll": 55.74219975,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": 1,
            "skirge_strategy_vote": 1,
            "flec_action": 1,
            "skirge_action": 2,
            "counts": {
              "all": {
                "players": 4,
                "strategy": 3,
                "actions": 4,
                "powerups": 14
              },
              "skirge": {
                "players": 2,
                "strategy": 2,
                "actions": 2,
                "powerups": 4
              },
              "flec": {
                "players": 2,
                "strategy": 1,
                "actions": 2,
                "powerups": 10
              },
              "rogue": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 5
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 5
              }
            }
          },
          "5": {
            "winner": "skirge",
            "flec_faction": "rogue",
            "flec_score": 65.89770837,
            "skirge_score": 84.09713424,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 65.89770837,
            "skirge_roll": 56.06475616,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": 2,
            "flec_action": null,
            "skirge_action": 3,
            "counts": {
              "all": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 1
              },
              "skirge": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 1
              },
              "flec": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "rogue": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "6": {
            "winner": "flec",
            "flec_faction": "rogue",
            "flec_score": 243.79366898,
            "skirge_score": 139.10370722,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 64.60087482,
            "skirge_roll": 58.07870722,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": 0,
            "skirge_strategy_vote": null,
            "flec_action": 3,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 5
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 5
              },
              "rogue": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 5
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "7": {
            "winner": "flec",
            "flec_faction": "rogue",
            "flec_score": 61.6043049,
            "skirge_score": 56.63875241,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 61.6043049,
            "skirge_roll": 56.63875241,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": null,
            "flec_action": null,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "rogue": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "8": {
            "winner": "skirge",
            "flec_faction": "rogue",
            "flec_score": 55.72440247,
            "skirge_score": 60.62338041,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 55.72440247,
            "skirge_roll": 60.62338041,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": null,
            "flec_action": null,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "rogue": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          }
        },
        "2": {
          "1": {
            "winner": "skirge",
            "flec_faction": "rogue",
            "flec_score": 60.53645138,
            "skirge_score": 64.5172039,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 60.53645138,
            "skirge_roll": 64.5172039,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": null,
            "flec_action": null,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "rogue": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "2": {
            "winner": "flec",
            "flec_faction": "rogue",
            "flec_score": 51.17463043,
            "skirge_score": 51.03178778,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 51.17463043,
            "skirge_roll": 51.03178778,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": null,
            "flec_action": null,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "rogue": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "3": {
            "winner": "skirge",
            "flec_faction": "rogue",
            "flec_score": 61.65789208,
            "skirge_score": 84.16251155,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 61.65789208,
            "skirge_roll": 58.04311142,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": 0,
            "flec_action": null,
            "skirge_action": 3,
            "counts": {
              "all": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 0
              },
              "skirge": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 0
              },
              "flec": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "rogue": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "4": {
            "winner": "skirge",
            "flec_faction": "rogue",
            "flec_score": 54.32202325,
            "skirge_score": 62.22194589,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 54.32202325,
            "skirge_roll": 62.22194589,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": null,
            "flec_action": null,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "rogue": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "5": {
            "winner": "skirge",
            "flec_faction": "rogue",
            "flec_score": 49.81122667,
            "skirge_score": 112.02864406,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 49.81122667,
            "skirge_roll": 53.16432973,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": 0,
            "flec_action": null,
            "skirge_action": 2,
            "counts": {
              "all": {
                "players": 3,
                "strategy": 3,
                "actions": 3,
                "powerups": 3
              },
              "skirge": {
                "players": 3,
                "strategy": 3,
                "actions": 3,
                "powerups": 3
              },
              "flec": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "rogue": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "6": {
            "winner": "skirge",
            "flec_faction": "rogue",
            "flec_score": 58.60138836,
            "skirge_score": 77.97296067,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 58.60138836,
            "skirge_roll": 53.77445563,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": 1,
            "flec_action": null,
            "skirge_action": 0,
            "counts": {
              "all": {
                "players": 2,
                "strategy": 2,
                "actions": 2,
                "powerups": 0
              },
              "skirge": {
                "players": 2,
                "strategy": 2,
                "actions": 2,
                "powerups": 0
              },
              "flec": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "rogue": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "7": {
            "winner": "flec",
            "flec_faction": "rogue",
            "flec_score": 324.94001026,
            "skirge_score": 200.32288538,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 65.50716806,
            "skirge_roll": 56.88047028,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": 1,
            "skirge_strategy_vote": 2,
            "flec_action": 0,
            "skirge_action": 2,
            "counts": {
              "all": {
                "players": 13,
                "strategy": 11,
                "actions": 13,
                "powerups": 17
              },
              "skirge": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 0
              },
              "flec": {
                "players": 12,
                "strategy": 10,
                "actions": 12,
                "powerups": 17
              },
              "rogue": {
                "players": 10,
                "strategy": 10,
                "actions": 10,
                "powerups": 9
              },
              "sage": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 8
              },
              "armr": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 0
              }
            }
          },
          "8": {
            "winner": "flec",
            "flec_faction": "rogue",
            "flec_score": 372.90381299,
            "skirge_score": 299.48984479,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 62.62565323,
            "skirge_roll": 57.30635148,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": 1,
            "skirge_strategy_vote": 1,
            "flec_action": 1,
            "skirge_action": 3,
            "counts": {
              "all": {
                "players": 13,
                "strategy": 12,
                "actions": 13,
                "powerups": 16
              },
              "skirge": {
                "players": 2,
                "strategy": 2,
                "actions": 2,
                "powerups": 7
              },
              "flec": {
                "players": 11,
                "strategy": 10,
                "actions": 11,
                "powerups": 9
              },
              "rogue": {
                "players": 10,
                "strategy": 10,
                "actions": 10,
                "powerups": 9
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 0
              }
            }
          }
        },
        "3": {
          "1": {
            "winner": "flec",
            "flec_faction": "rogue",
            "flec_score": 432.49079728,
            "skirge_score": 220.65228212,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 64.34364578,
            "skirge_roll": 58.60228212,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": 2,
            "skirge_strategy_vote": null,
            "flec_action": 0,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 4,
                "strategy": 2,
                "actions": 4,
                "powerups": 14
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 4,
                "strategy": 2,
                "actions": 4,
                "powerups": 14
              },
              "rogue": {
                "players": 2,
                "strategy": 2,
                "actions": 2,
                "powerups": 10
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 2,
                "strategy": 0,
                "actions": 2,
                "powerups": 4
              }
            }
          },
          "2": {
            "winner": "flec",
            "flec_faction": "rogue",
            "flec_score": 333.52908376,
            "skirge_score": 138.9511449,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 63.56010021,
            "skirge_roll": 57.9261449,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": 2,
            "skirge_strategy_vote": null,
            "flec_action": 0,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 4,
                "strategy": 2,
                "actions": 4,
                "powerups": 13
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 4,
                "strategy": 2,
                "actions": 4,
                "powerups": 13
              },
              "rogue": {
                "players": 2,
                "strategy": 2,
                "actions": 2,
                "powerups": 9
              },
              "sage": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 4
              },
              "armr": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 0
              }
            }
          },
          "3": {
            "winner": "flec",
            "flec_faction": "rogue",
            "flec_score": 310.72318604,
            "skirge_score": 158.52107991,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 57.59734999,
            "skirge_roll": 53.44557235,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": 2,
            "skirge_strategy_vote": 1,
            "flec_action": 1,
            "skirge_action": 3,
            "counts": {
              "all": {
                "players": 4,
                "strategy": 3,
                "actions": 4,
                "powerups": 13
              },
              "skirge": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 0
              },
              "flec": {
                "players": 3,
                "strategy": 2,
                "actions": 3,
                "powerups": 13
              },
              "rogue": {
                "players": 2,
                "strategy": 2,
                "actions": 2,
                "powerups": 9
              },
              "sage": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 4
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "4": {
            "winner": "flec",
            "flec_faction": "rogue",
            "flec_score": 331.01492507,
            "skirge_score": 161.66390834,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 62.50915747,
            "skirge_roll": 64.51112667,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": 2,
            "skirge_strategy_vote": 2,
            "flec_action": 0,
            "skirge_action": 3,
            "counts": {
              "all": {
                "players": 25,
                "strategy": 23,
                "actions": 25,
                "powerups": 13
              },
              "skirge": {
                "players": 20,
                "strategy": 20,
                "actions": 20,
                "powerups": 0
              },
              "flec": {
                "players": 5,
                "strategy": 3,
                "actions": 5,
                "powerups": 13
              },
              "rogue": {
                "players": 3,
                "strategy": 3,
                "actions": 3,
                "powerups": 9
              },
              "sage": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 4
              },
              "armr": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 0
              }
            }
          },
          "5": {
            "winner": "skirge",
            "flec_faction": "rogue",
            "flec_score": 214.13910117,
            "skirge_score": 1298.41336833,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 52.92966389,
            "skirge_roll": 56.03359144,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": 2,
            "skirge_strategy_vote": 0,
            "flec_action": 0,
            "skirge_action": 2,
            "counts": {
              "all": {
                "players": 22,
                "strategy": 22,
                "actions": 22,
                "powerups": 85
              },
              "skirge": {
                "players": 20,
                "strategy": 20,
                "actions": 20,
                "powerups": 80
              },
              "flec": {
                "players": 2,
                "strategy": 2,
                "actions": 2,
                "powerups": 5
              },
              "rogue": {
                "players": 2,
                "strategy": 2,
                "actions": 2,
                "powerups": 5
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "6": {
            "winner": "skirge",
            "flec_faction": "rogue",
            "flec_score": 219.17076768,
            "skirge_score": 1257.10380291,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 61.34155207,
            "skirge_roll": 58.19565011,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": 1,
            "skirge_strategy_vote": 2,
            "flec_action": 1,
            "skirge_action": 1,
            "counts": {
              "all": {
                "players": 25,
                "strategy": 24,
                "actions": 25,
                "powerups": 92
              },
              "skirge": {
                "players": 21,
                "strategy": 21,
                "actions": 21,
                "powerups": 80
              },
              "flec": {
                "players": 4,
                "strategy": 3,
                "actions": 4,
                "powerups": 12
              },
              "rogue": {
                "players": 3,
                "strategy": 3,
                "actions": 3,
                "powerups": 8
              },
              "sage": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 4
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "7": {
            "winner": "skirge",
            "flec_faction": "rogue",
            "flec_score": 227.4862307,
            "skirge_score": 1510.97204119,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 58.3815894,
            "skirge_roll": 65.88508689,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": 0,
            "skirge_strategy_vote": 2,
            "flec_action": 2,
            "skirge_action": 0,
            "counts": {
              "all": {
                "players": 30,
                "strategy": 28,
                "actions": 23,
                "powerups": 123
              },
              "skirge": {
                "players": 18,
                "strategy": 18,
                "actions": 18,
                "powerups": 72
              },
              "flec": {
                "players": 12,
                "strategy": 10,
                "actions": 5,
                "powerups": 51
              },
              "rogue": {
                "players": 10,
                "strategy": 10,
                "actions": 3,
                "powerups": 43
              },
              "sage": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 4
              },
              "armr": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 4
              }
            }
          },
          "8": {
            "winner": "skirge",
            "flec_faction": "rogue",
            "flec_score": 149.24255894,
            "skirge_score": 668.63514494,
            "flec_nft_weight": 43.7625,
            "skirge_nft_weight": 57.675,
            "flec_roll": 52.05000125,
            "skirge_roll": 61.89575451,
            "flec_handicap": 13.9125,
            "skirge_handicap": 0,
            "flec_strategy_vote": 1,
            "skirge_strategy_vote": 1,
            "flec_action": 2,
            "skirge_action": 3,
            "counts": {
              "all": {
                "players": 14,
                "strategy": 13,
                "actions": 14,
                "powerups": 56
              },
              "skirge": {
                "players": 11,
                "strategy": 11,
                "actions": 11,
                "powerups": 44
              },
              "flec": {
                "players": 3,
                "strategy": 2,
                "actions": 3,
                "powerups": 12
              },
              "rogue": {
                "players": 2,
                "strategy": 2,
                "actions": 2,
                "powerups": 8
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 4
              }
            }
          }
        }
      },
      "analysis": {
        "1": {
          "1": {
            "winner": "flec",
            "flec_faction": "sage",
            "flec_score": 390.05243894,
            "skirge_score": 165.04447526,
            "flec_nft_weight": 56.06875,
            "skirge_nft_weight": 95.79375,
            "flec_roll": 97.41819563,
            "skirge_roll": 100.46392875,
            "flec_handicap": 39.725,
            "skirge_handicap": 0,
            "flec_strategy_vote": 0,
            "skirge_strategy_vote": 1,
            "flec_action": 3,
            "skirge_action": 1,
            "counts": {
              "all": {
                "players": 7,
                "strategy": 6,
                "actions": 7,
                "powerups": 24
              },
              "skirge": {
                "players": 2,
                "strategy": 2,
                "actions": 2,
                "powerups": 4
              },
              "flec": {
                "players": 5,
                "strategy": 4,
                "actions": 5,
                "powerups": 20
              },
              "rogue": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 4
              },
              "sage": {
                "players": 4,
                "strategy": 4,
                "actions": 4,
                "powerups": 16
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "2": {
            "winner": "skirge",
            "flec_faction": "sage",
            "flec_score": 92.5822679,
            "skirge_score": 171.49272548,
            "flec_nft_weight": 56.06875,
            "skirge_nft_weight": 95.79375,
            "flec_roll": 92.5822679,
            "skirge_roll": 92.29354819,
            "flec_handicap": 39.725,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": 0,
            "flec_action": null,
            "skirge_action": 0,
            "counts": {
              "all": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 4
              },
              "skirge": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 4
              },
              "flec": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "rogue": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "3": {
            "winner": "flec",
            "flec_faction": "sage",
            "flec_score": 105.63290917,
            "skirge_score": 92.71209087,
            "flec_nft_weight": 56.06875,
            "skirge_nft_weight": 95.79375,
            "flec_roll": 105.63290917,
            "skirge_roll": 92.71209087,
            "flec_handicap": 39.725,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": null,
            "flec_action": null,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "rogue": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "4": {
            "winner": "flec",
            "flec_faction": "sage",
            "flec_score": 159.91387775,
            "skirge_score": 109.95882619,
            "flec_nft_weight": 56.06875,
            "skirge_nft_weight": 95.79375,
            "flec_roll": 90.22210672,
            "skirge_roll": 109.95882619,
            "flec_handicap": 39.725,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": null,
            "flec_action": 1,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 4
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 4
              },
              "rogue": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 4
              }
            }
          },
          "5": {
            "winner": "flec",
            "flec_faction": "sage",
            "flec_score": 146.93320491,
            "skirge_score": 98.52285622,
            "flec_nft_weight": 56.06875,
            "skirge_nft_weight": 95.79375,
            "flec_roll": 91.18630213,
            "skirge_roll": 98.52285622,
            "flec_handicap": 39.725,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": null,
            "flec_action": 0,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 2,
                "strategy": 0,
                "actions": 2,
                "powerups": 4
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 2,
                "strategy": 0,
                "actions": 2,
                "powerups": 4
              },
              "rogue": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 4
              }
            }
          },
          "6": {
            "winner": "flec",
            "flec_faction": "sage",
            "flec_score": 117.69715492,
            "skirge_score": 91.04742252,
            "flec_nft_weight": 56.06875,
            "skirge_nft_weight": 95.79375,
            "flec_roll": 94.15772393,
            "skirge_roll": 91.04742252,
            "flec_handicap": 39.725,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": null,
            "flec_action": 1,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 0
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 0
              },
              "rogue": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "7": {
            "winner": "flec",
            "flec_faction": "sage",
            "flec_score": 120.8593848,
            "skirge_score": 100.970179,
            "flec_nft_weight": 56.06875,
            "skirge_nft_weight": 95.79375,
            "flec_roll": 96.68750784,
            "skirge_roll": 100.970179,
            "flec_handicap": 39.725,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": null,
            "flec_action": 0,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 0
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 0
              },
              "rogue": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "8": {
            "winner": "skirge",
            "flec_faction": "sage",
            "flec_score": 87.88244801,
            "skirge_score": 94.76410813,
            "flec_nft_weight": 56.06875,
            "skirge_nft_weight": 95.79375,
            "flec_roll": 87.88244801,
            "skirge_roll": 94.76410813,
            "flec_handicap": 39.725,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": null,
            "flec_action": null,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "rogue": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          }
        },
        "2": {
          "1": {
            "winner": "skirge",
            "flec_faction": "sage",
            "flec_score": 81.93892629,
            "skirge_score": 83.60812677,
            "flec_nft_weight": 56.06875,
            "skirge_nft_weight": 95.79375,
            "flec_roll": 81.93892629,
            "skirge_roll": 83.60812677,
            "flec_handicap": 39.725,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": null,
            "flec_action": null,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "rogue": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "2": {
            "winner": "flec",
            "flec_faction": "sage",
            "flec_score": 110.15479267,
            "skirge_score": 83.46317207,
            "flec_nft_weight": 56.06875,
            "skirge_nft_weight": 95.79375,
            "flec_roll": 110.15479267,
            "skirge_roll": 83.46317207,
            "flec_handicap": 39.725,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": null,
            "flec_action": null,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "rogue": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "3": {
            "winner": "flec",
            "flec_faction": "sage",
            "flec_score": 248.16856627,
            "skirge_score": 84.91128876,
            "flec_nft_weight": 56.06875,
            "skirge_nft_weight": 95.79375,
            "flec_roll": 109.34962374,
            "skirge_roll": 84.91128876,
            "flec_handicap": 39.725,
            "skirge_handicap": 0,
            "flec_strategy_vote": 1,
            "skirge_strategy_vote": null,
            "flec_action": 0,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 2,
                "strategy": 1,
                "actions": 2,
                "powerups": 8
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 2,
                "strategy": 1,
                "actions": 2,
                "powerups": 8
              },
              "rogue": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 4
              },
              "sage": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 4
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "4": {
            "winner": "flec",
            "flec_faction": "sage",
            "flec_score": 95.9252603,
            "skirge_score": 90.1838635,
            "flec_nft_weight": 56.06875,
            "skirge_nft_weight": 95.79375,
            "flec_roll": 95.9252603,
            "skirge_roll": 90.1838635,
            "flec_handicap": 39.725,
            "skirge_handicap": 0,
            "flec_strategy_vote": null,
            "skirge_strategy_vote": null,
            "flec_action": null,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "rogue": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "sage": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "5": {
            "winner": "flec",
            "flec_faction": "sage",
            "flec_score": 198.96418762,
            "skirge_score": 103.44321508,
            "flec_nft_weight": 56.06875,
            "skirge_nft_weight": 95.79375,
            "flec_roll": 84.20349884,
            "skirge_roll": 103.44321508,
            "flec_handicap": 39.725,
            "skirge_handicap": 0,
            "flec_strategy_vote": 2,
            "skirge_strategy_vote": null,
            "flec_action": 0,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 2,
                "strategy": 1,
                "actions": 2,
                "powerups": 8
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 2,
                "strategy": 1,
                "actions": 2,
                "powerups": 8
              },
              "rogue": {
                "players": 1,
                "strategy": 0,
                "actions": 1,
                "powerups": 4
              },
              "sage": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 4
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "6": {
            "winner": "flec",
            "flec_faction": "sage",
            "flec_score": 203.00526439,
            "skirge_score": 92.77185299,
            "flec_nft_weight": 56.06875,
            "skirge_nft_weight": 95.79375,
            "flec_roll": 104.27043365,
            "skirge_roll": 92.77185299,
            "flec_handicap": 39.725,
            "skirge_handicap": 0,
            "flec_strategy_vote": 0,
            "skirge_strategy_vote": null,
            "flec_action": 3,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 4
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 4
              },
              "rogue": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "sage": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 4
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          },
          "7": {
            "winner": "flec",
            "flec_faction": "sage",
            "flec_score": 168.53865552,
            "skirge_score": 81.564425,
            "flec_nft_weight": 56.06875,
            "skirge_nft_weight": 95.79375,
            "flec_roll": 84.93882265,
            "skirge_roll": 81.564425,
            "flec_handicap": 39.725,
            "skirge_handicap": 0,
            "flec_strategy_vote": 0,
            "skirge_strategy_vote": null,
            "flec_action": 3,
            "skirge_action": null,
            "counts": {
              "all": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 4
              },
              "skirge": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "flec": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 4
              },
              "rogue": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              },
              "sage": {
                "players": 1,
                "strategy": 1,
                "actions": 1,
                "powerups": 4
              },
              "armr": {
                "players": 0,
                "strategy": 0,
                "actions": 0,
                "powerups": 0
              }
            }
          }
        }
      }
    }
  },
  "response": {

  },
  "status": 200,
  "success": true
};


