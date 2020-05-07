const gameDefs =
{
  "basePoints": 25,
  "flecMultiple": 3,
  "flecSplitFirst": 0.8,
  "flecSplitSecond": 0.2,
  "skirgeSplitFirst": 0.88,
  "skirgeSplitSecond": 0.12,
  "strategyMultiplier": 1.2,
  "roundsPerMatch": 8,
  "matchesPerShowdown": 3,
  "episodesPerSeason": 12,
  "maxNftCountPerType": 75,
  "autoEnrollPlayers": false,
  "fragOptions": [
    {
      "cost": 299,
      "amount": 30,
      "available": true
    },
    {
      "cost": 699,
      "amount": 80,
      "available": true
    },
    {
      "cost": 1599,
      "amount": 200,
      "available": true
    },
    {
      "cost": 7499,
      "amount": 1000,
      "available": true
    }
  ],
  "conflicts": [
    {
      "name": "Infiltration",
      "slug": "infiltration",
      "skill": "subterfuge"
    },
    {
      "name": "Analysis",
      "slug": "analysis",
      "skill": "intellect"
    },
    {
      "name": "Assault",
      "slug": "assault",
      "skill": "combat"
    }
  ],
  "flec": [
    {
      "name": "Rogue Division",
      "slug": "rogue",
      "conflict": "infiltration"
    },
    {
      "name": "Sage Corps",
      "slug": "sage",
      "conflict": "analysis"
    },
    {
      "name": "ARM&R",
      "slug": "armr",
      "conflict": "assault"
    }
  ],
  "nfts": [
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
  "contracts": {
    "Axie Infinity": [
      "0xf5b0a3efb8e8e4c201e2a935f110eaaf3ffecb8d"
    ],
    "CryptoKitties": [
      "0x06012c8cf97bead5deae237070f9587f8e7a266d"
    ],
    "Neon District": [
      "0x25741f5f2dbdde9cfd38f73be7052ec03b0e9d85",
      "0x1276dce965ada590e42d62b3953ddc1ddceb0392",
      "0x238f2d6787dacb6045d72b0ec6626de0ff7c3107",
      "0xf7ddc72b2b2cc275c1b40e289fa158b24a282d90",
      "0xc328520a8b1cead2489d59c16b7752cb60ebb53d"
    ],
    "Battle Racers": [
      "0x0f3b491841680eb40bd2be42bce7104f2511dbd9",
      "0x238f2d6787dacb6045d72b0ec6626de0ff7c3107"
    ],
    "Light Trail Rush": [
      "0x5ee0900fa78dc40279cc7372884f1a2ee515f876",
      "0x5b133e0fd79ace5449bf925a2521b3c100133527",
      "0x3eb63d51264ce35b7e3320ae2e70813e264c610e",
      "0x238f2d6787dacb6045d72b0ec6626de0ff7c3107"
    ],
    "Gods Unchained": [
      "0x0e3a2a1f2146d86a604adc220b4967a898d7fe07"
    ],
    "Crypto Space Commander": [
      "0x4d3814d4da8083b41861dec2f45b4840e8b72d68"
    ],
    "MyCryptoHeroes": [
      "0x273f7f8e6489682df756151f5525576e322d51a3",
      "0xdceaf1652a131f32a821468dc03a92df0edd86ea",
      "0x617913dd43dbdf4236b85ec7bdf9adfd7e35b340"
    ],
    "Ethereum Name Service": [
      "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85"
    ],
    "Decentraland": [
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
    "Chainbreakers": [
      "0x0111ac7e9425c891f935c4ce54cf16db7c14b7db",
      "0x38e908b70c8e0dcfe452c0fb2ebf432f9c5a6f20",
      "0x23766996636058b41a041d441ce1217c694f5aa9",
      "0xfdda51b074d2213b5976396d8db36d48071646bd"
    ],
    "The Sandbox": [
      "0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a",
      "0x067a1eb5e383ed24b66d72aaf80d8d7db3d299a8"
    ],
    "F1&reg; Delta Time": [
      "0x2af75676692817d85121353f0d6e8e9ae6ad5576"
    ],
    "SuperRare": [
      "0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0",
      "0x41a322b28d0ff354040e2cbc676f0320d8c8850d"
    ],
    "Urbit ID": [
      "0x6ac07b7c4601b5ce11de8dfe6335b871c7c4dd4d"
    ],
    "Cats In Mechs": [
      "0xfaafdc07907ff5120a76b34b731b278c38d6043c"
    ],
    "Age of Rust": [
      "0xfaafdc07907ff5120a76b34b731b278c38d6043c"
    ],
    "Cryptovoxels": [
      "0x79986af15539de2db9a5086382daeda917a9cf0c",
      "0xa58b5224e2fd94020cb2837231b2b0e4247301a6",
      "0x4243a8413a77eb559c6f8eaffa63f46019056d08"
    ],
    "Ledger of Szabo": [
      "0x28cfaf829d7d0a684b33c3afca06905ef5e071bd"
    ],
    "Plasma Bears": [
      "0x909899c5dbb5002610dd8543b6f638be56e3b17e"
    ],
    "Avastars": [
      "0xf3e778f839934fc819cfa1040aabacecba01e049"
    ],
    "Josie's Art Pieces": [
      "0xecf7ef42b57ee37a959bf507183c5dd6bf182081"
    ],
    "Reality Clash": [
      "0x20bd491fee75b6af6c2100c83b83312d620f2958"
    ]
  },
  "modifiers": {
    "Ethereum Name Service": {
      "subterfuge": 0.40,
      "intellect": 0.80,
      "combat": 0.10
    },
    "Urbit ID": {
      "subterfuge": 0.05,
      "intellect": 1.50,
      "combat": 0.05
    },
    "Age of Rust": {
      "subterfuge": 0.25,
      "intellect": 0.70,
      "combat": 0.35
    },
    "Cryptovoxels": {
      "subterfuge": 0.25,
      "intellect": 0.50,
      "combat": 0.25
    },
    "Ledger of Szabo": {
      "subterfuge": 0.50,
      "intellect": 0.50,
      "combat": 0.50
    },
    "The Sandbox": {
      "subterfuge": 0.35,
      "intellect": 0.45,
      "combat": 0.20
    },
    "Light Trail Rush": {
      "subterfuge": 0.40,
      "intellect": 0.45,
      "combat": 0.15
    },
    "Cats In Mechs": {
      "subterfuge": 0.30,
      "intellect": 0.40,
      "combat": 0.60
    },
    "Battle Racers": {
      "subterfuge": 0.60,
      "intellect": 0.40,
      "combat": 0.50
    },
    "Plasma Bears": {
      "subterfuge": 0.40,
      "intellect": 0.40,
      "combat": 0.40
    },
    "Decentraland": {
      "subterfuge": 0.20,
      "intellect": 0.35,
      "combat": 0.20
    },
    "Avastars": {
      "subterfuge": 0.50,
      "intellect": 0.35,
      "combat": 0.15
    },
    "Axie Infinity": {
      "subterfuge": 0.25,
      "intellect": 0.25,
      "combat": 0.25
    },
    "Neon District": {
      "subterfuge": 0.35,
      "intellect": 0.25,
      "combat": 0.30
    },
    "CryptoKitties": {
      "subterfuge": 0.20,
      "intellect": 0.20,
      "combat": 0.20
    },
    "Crypto Space Commander": {
      "subterfuge": 0.20,
      "intellect": 0.20,
      "combat": 0.30
    },
    "MyCryptoHeroes": {
      "subterfuge": 0.20,
      "intellect": 0.20,
      "combat": 0.60
    },
    "Gods Unchained": {
      "subterfuge": 0.15,
      "intellect": 0.15,
      "combat": 0.15
    },
    "Josie's Art Pieces": {
      "subterfuge": 2.00,
      "intellect": 0.15,
      "combat": 0.15
    },
    "Reality Clash": {
      "subterfuge": 0.10,
      "intellect": 0.10,
      "combat": 0.80
    },
    "F1&reg; Delta Time": {
      "subterfuge": 0.80,
      "intellect": 0.10,
      "combat": 0.10
    },
    "Chainbreakers": {
      "subterfuge": 0.05,
      "intellect": 0.05,
      "combat": 1.20
    },
    "SuperRare": {
      "subterfuge": 1.00,
      "intellect": 0.05,
      "combat": 0.05
    }
  },
  "enjin": [
    "0xfaafdc07907ff5120a76b34b731b278c38d6043c"
  ],
  "enjinOpenseaSlugs": {
    "cats-in-mechs": "Cats In Mechs",
    "age-of-rust": "Age of Rust"
  },
  "strategies": [
    {
      "conflict": "infiltration",
      "flec": {
        "title": "Rogue Division Infiltration Strategies",
        "slug": "rogue",
        "options": [
          {
            "id": 0,
            "name": "Special Reconnaissance",
            "desc": "Rogue Division should send in a special reconnaissance team to physically infiltrate the Skirge lab. Strong against Random Patroling, but weak against Increased Surveillance.",
            "victory": ""
          },
          {
            "id": 1,
            "name": "MASINT",
            "desc": "Rogue Division should use mass surveillance techniques to detect and identify an exploitable Skirge security practice. Strong against Rigorous Procedure, but weak against Random Patroling.",
            "victory": ""
          },
          {
            "id": 2,
            "name": "Social Engineering",
            "desc": "Rogue Division should employ heterogeneous attacks on various individuals to ascertain entry into the Skirge lab. Strong against Increased Surveillance, but weak against Rigorous Procedure.",
            "victory": ""
          }
        ]
      },
      "skirge": {
        "title": "Skirge Corporation Subterfuge Strategies",
        "options": [
          {
            "id": 0,
            "name": "Increased Surveillance",
            "desc": "Skirge should focus on actively finding and stopping FLEC from physically infiltrating our lab location. Strong against Special Reconnaissance, but weak against Social Engineering.",
            "victory": ""
          },
          {
            "id": 1,
            "name": "Random Patrolling",
            "desc": "Skirge should start randomizing our patrolling patterns, making FLEC infiltrations more difficult. Strong against MASINT, but weak against Special Reconnaissance.",
            "victory": ""
          },
          {
            "id": 2,
            "name": "Rigorous Procedure",
            "desc": "Skirge should be more aware of FLEC's attempts at compromising the human elements of our security. Strong against Social Engineering, but weak against MASINT.",
            "victory": ""
          }
        ]
      }
    },
    {
      "conflict": "analysis",
      "flec": {
        "title": "Sage Corps Analysis Strategies",
        "slug": "sage",
        "options": [
          {
            "id": 0,
            "name": "Hypothesis Testing",
            "desc": "Sage Corps should try testing various decryption techniques looking for anomolies in Skirge's data. Strong against Data Obfuscation, but weak against Multivariate Noise.",
            "victory": ""
          },
          {
            "id": 1,
            "name": "Probability Modeling",
            "desc": "Sage Corps should build models based on common patterns and practices in order to uncover a complete data picture. Strong against Smokescreen Data, but weak against Data Obfuscation.",
            "victory": ""
          },
          {
            "id": 2,
            "name": "Narrative Analysis",
            "desc": "Sage Corps should thread together several highly qualitative narratives in order to rule out any misinformation from Skirge. Strong against Multivariate Noise, but weak against Smokescreen Data.",
            "victory": ""
          }
        ]
      },
      "skirge": {
        "title": "Skirge Corporation Subterfuge Strategies",
        "options": [
          {
            "id": 0,
            "name": "Multivariate Noise",
            "desc": "Skirge should introduce multivariate Gaussian noise into our information artifacts in order to hide the nature of our data. Strong against Hypothesis Testing, but weak against Narrative Analysis.",
            "victory": ""
          },
          {
            "id": 1,
            "name": "Data Obfuscation",
            "desc": "Skirge should hide our data behind layers of obfuscation making our information more difficult for FLEC to find. Strong against Probability Modeling, but weak against Hypothesis Testing.",
            "victory": ""
          },
          {
            "id": 2,
            "name": "Smokescreen Data",
            "desc": "Skirge should produce large amounts of misinformation in order to mislead the FLEC analysts into making bad assumptions. Strong against Narrative Analysis, but weak against Probability Modeling.",
            "victory": ""
          }
        ]
      }
    },
    {
      "conflict": "assault",
      "flec": {
        "title": "ARMR Assault Strategies",
        "slug": "armr",
        "options": [
          {
            "id": 0,
            "name": "Hammer and Anvil",
            "desc": "ARM&R should perform a split attack on the Skirge lab from two sides, limiting the effectiveness of their maneuverability. Strong against Combat Maneuvering, but weak against Increased Fortification.",
            "victory": ""
          },
          {
            "id": 1,
            "name": "Force Concentration",
            "desc": "ARM&R should bring a simple, concentrated attack to the middle and overwhelm any distributed defense in place. Strong against Communications Scrambling, but weak against Combat Maneuvering.",
            "victory": ""
          },
          {
            "id": 2,
            "name": "Precision Strikes",
            "desc": "ARM&R should isolate and destroy several strategic targets in order to cripple Skirge's overall battle readiness. Strong against Increased Fortification, but weak against Communications Scrambling.",
            "victory": ""
          }
        ]
      },
      "skirge": {
        "title": "Skirge Corporation Security Strategies",
        "options": [
          {
            "id": 0,
            "name": "Increased Fortification",
            "desc": "Skirge should focus the bulk of our defense in the areas FLEC is most likely to attack. Strong against Hammer and Anvil, but weak against Precision Strikes.",
            "victory": ""
          },
          {
            "id": 1,
            "name": "Combat Maneuvering",
            "desc": "Skirge should remain agile, enabling our shock troops to effectively outflank any FLEC direct assault. Strong against Force Concentration, but weak against Hammer and Anvil.",
            "victory": ""
          },
          {
            "id": 2,
            "name": "Communications Scrambling",
            "desc": "Skirge should concentrate on disrupting FLEC's communications to prevent a strongly coordinated mission. Strong against Precision Strikes, but weak against Force Concentration.",
            "victory": ""
          }
        ]
      }
    }
  ],
  "actions": {
    "skirge": [
      {
        "id": 0,
        "name": "Patrol",
        "desc": "You and your team step up your patrolling, covering every nook and cranny, in search for FLEC klutzes."
      },
      {
        "id": 1,
        "name": "Survey",
        "desc": "You and your team survey the incoming FLEC peasants and expose their many weaknesses."
      },
      {
        "id": 2,
        "name": "Coordinate",
        "desc": "You and your team coordinate the valiant Skirge response to the advances from the fools of FLEC."
      },
      {
        "id": 3,
        "name": "Charge",
        "desc": "You and your team charge straight into the soft and supple teeth of those interloping whiners in FLEC."
      }
    ],
    "rogue": [
      {
        "id": 0,
        "name": "Hunt",
        "desc": "Skirge is inherently sloppy and can't stop you and your elite squad from discovering the location of their new hideout."
      },
      {
        "id": 1,
        "name": "Procure",
        "desc": "When Rogue Division wants all the best toys, they call upon you and your team of high tech specialists to deliver the goods."
      },
      {
        "id": 2,
        "name": "Phish",
        "desc": "Phishing those buffoons at Skirge couldn't be easier.  You and your team might even make a podcast from all the hilarious recordings."
      },
      {
        "id": 3,
        "name": "Infiltrate",
        "desc": "Skirge's strongest defense is nothing compared to you and your team of skydiving, ziplining, basejumping super-ninjas."
      }
    ],
    "sage": [
      {
        "id": 0,
        "name": "Decrypt",
        "desc": "Their terrible data encryption algorithms aren't even salted.  You and your team will brute force your way into their network."
      },
      {
        "id": 1,
        "name": "Cluster",
        "desc": "Their simple patterns are child's play.  You and your team will easily gather, cluster, and divine all of their secrets."
      },
      {
        "id": 2,
        "name": "Report",
        "desc": "Their embarrassing attempts at hiding their top secrets are weak.  You and your team can easily parse and generate reports proving it."
      },
      {
        "id": 3,
        "name": "Code",
        "desc": "Their bytecode is a snap to traverse.  You and your team will have these data decryption algorithms coded up in minutes, not months."
      }
    ],
    "armr": [
      {
        "id": 0,
        "name": "Bomb",
        "desc": "Badasses drop bombs.  You and your team are going to show those sissies at Skirge what it's like to experience and ordinance hailstorm."
      },
      {
        "id": 1,
        "name": "Supply",
        "desc": "Warriors work the supply lines.  You and your team are going to pound your way through those weak Skirge lines and deliver destruction on time."
      },
      {
        "id": 2,
        "name": "Radio",
        "desc": "Saviors are making it rain.  You and your team are about to call down the thunder making Skirge flee in terror from your pinpoint air strikes."
      },
      {
        "id": 3,
        "name": "Firefight",
        "desc": "Oorah.  The time for trigger discipline is done.  You and your team are bringing all the wetwork to Skirge's yard."
      }
    ]
  }
};

export default gameDefs;