export enum Rate {
  A_FAIRE_ABSOLUMENT = 5,
  A_FAIRE = 4,
  SI_POSSIBLE = 3,
  PAS_BESOIN = 2,
  A_EVITER = 1,
}

export enum Lane {
  Multi_PASS_1 = "Multi PASS 1",
  Multi_PASS_2 = "Multi PASS 2",
  Single_PASS = "Single PASS",
  Virtual_Lane = "Virtual Lane",
}

export interface Attraction {
  id: number;
  name: string;
  isMagicTime: boolean;
  rate: Rate;
  lane?: Lane[];
}

export interface Land {
  name: string;
  attractions?: Attraction[];
}

export interface Parc {
  id: number;
  name: string;
  lands: Land[];
}

export interface Data {
  parcs: Parc[];
}

export const data: Data = {
  parcs: [
    {
      id: 6,
      name: "Magic Kingdom",
      lands: [
        {
          name: "Adventureland",
          attractions: [
            {
              id: 134,
              name: "Jungle Cruise",
              isMagicTime: false,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Multi_PASS_1]
            },
            {
              id: 137,
              name: "Pirates of the Caribbean",
              isMagicTime: false,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_2]
            },
          ],
        },
        {
          name: "Frontierland",
          attractions: [
            {
              id: 130,
              name: "Big Thunder Mountain",
              isMagicTime: false,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_1]
            },
            {
              id: 1360,
              name: "Tiana Bayou Adventure",
              isMagicTime: false,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Multi_PASS_1, Lane.Virtual_Lane]
            },
          ],
        },
        {
          name: "Liberty Square",
          attractions: [
            {
              id: 140,
              name: "Haunted Mansion",
              isMagicTime: false,
              rate: Rate.A_FAIRE,
              lane: [Lane.Multi_PASS_2]
            },
          ],
        },
        {
          name: "Fantasyland",
          attractions: [
            {
              id: 136,
              name: "Peter Pan's Flight",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_1]
            },
            {
              id: 129,
              name: "Seven Dwarfs Mine Train",
              isMagicTime: true,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Single_PASS]
            },
            {
              id: 133,
              name: "it's a small world",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_2]
            },
            {
              id: 127,
              name: "Under the Sea - Journey of the Little Mermaid",
              isMagicTime: true,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Multi_PASS_2]
            },
            {
              id: 126,
              name: "The Barnstormer",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_2]
            },
            {
              id: 142,
              name: "The Many Adventures of Winnie the Pooh",
              isMagicTime: true,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Multi_PASS_2]
            },
          ],
        },
        {
          name: "Tomorrowland",
          attractions: [
            {
              id: 138,
              name: "Space Mountain",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_1]
            },
            {
              id: 457,
              name: "Walt Disney's Carousel of Progress",
              isMagicTime: false,
              rate: Rate.SI_POSSIBLE,
            },
            {
              id: 131,
              name: "Buzz Lightyear's Space Ranger Spin",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_2]
            },
            {
              id: 11527,
              name: "Tron Lightcycle Power Run",
              isMagicTime: false,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Single_PASS, Lane.Virtual_Lane]
            },
            {
              id: 1190,
              name: "PeopleMover",
              isMagicTime: false,
              rate: Rate.PAS_BESOIN,
            }
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Epcot",
      lands: [
        {
          name: "World Celebration",
          attractions: [
            {
              id: 9,
              name: "Spaceship Earth",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_2]
            },
            {
              id: 155,
              name: "Journey into Imagination with Figment",
              isMagicTime: false,
              rate: Rate.A_FAIRE,
              lane: [Lane.Multi_PASS_2]
            },
          ],
        },
        {
          name: "World Discovery",
          attractions: [
            {
              id: 158,
              name: "Mission: SPACE",
              isMagicTime: true,
              rate: Rate.A_FAIRE,
              lane: [Lane.Multi_PASS_2]
            },
            {
              id: 160,
              name: "Test Track",
              isMagicTime: true,
              rate: Rate.SI_POSSIBLE,
            },
            {
              id: 10916,
              name: "Guardians of the Galaxy: Cosmic Rewind",
              isMagicTime: false,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Single_PASS, Lane.Virtual_Lane],
            },
          ],
        },
        {
          name: "World Nature",
          attractions: [
            {
              id: 153,
              name: "The Seas with Nemo & Friends",
              isMagicTime: true,
              rate: Rate.A_FAIRE,
              lane: [Lane.Multi_PASS_2]
            },
            {
              id: 151,
              name: "Soarin",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_1]
            },
            {
              id: 156,
              name: "Living with the Land",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_2]
            },
            {
              id: 12387,
              name: "Journey of Water",
              isMagicTime: false,
              rate: Rate.A_FAIRE_ABSOLUMENT,
            },
          ],
        },
        {
          name: "World Showcase",
          attractions: [
            {
              id: 2679,
              name: "Frozen Ever After",
              isMagicTime: true,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Multi_PASS_1]
            },
            {
              id: 466,
              name: "Gran Fiesta Tour Starring The Three Caballeros",
              isMagicTime: false,
              rate: Rate.PAS_BESOIN,
            },
            {
              id: 10914,
              name: "Ratatouille: The Adventure",
              isMagicTime: false,
              rate: Rate.A_EVITER,
              lane: [Lane.Multi_PASS_1]
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "Hollywood Studios",
      lands: [
        {
          name: "Hollywood Boulevard",
          attractions: [
            {
              id: 6361,
              name: "Mickey & Minnie's Runaway Railway",
              isMagicTime: false,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Multi_PASS_1]
            },
          ],
        },
        {
          name: "Echo Lake",
          attractions: [
            {
              id: 120,
              name: "Star Tours",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_2]
            },
          ],
        },
        {
          name: "Sunset Boulevard",
          attractions: [
            {
              id: 123,
              name: "Twilight Zone Tower of Terror",
              isMagicTime: true,
              rate: Rate.SI_POSSIBLE,
              lane: [Lane.Multi_PASS_2]
            },
            {
              id: 119,
              name: "Rock 'n' Roller Coaster",
              isMagicTime: true,
              rate: Rate.A_EVITER,
              lane: [Lane.Multi_PASS_1]
            },
          ],
        },
        {
          name: "Star Wars: Galaxy's Edge",
          attractions: [
            {
              id: 6368,
              name: "Millennium Falcon: Smugglers Run",
              isMagicTime: true,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Multi_PASS_1]
            },
            {
              id: 6369,
              name: "Star Wars: Rise of the Resistance",
              isMagicTime: true,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Single_PASS]
            },
          ],
        },
        {
          name: "Toy Story Land",
          attractions: [
            {
              id: 5476,
              name: "Slinky Dog Dash",
              isMagicTime: true,
              rate: Rate.A_EVITER,
              lane: [Lane.Multi_PASS_1]
            },
            {
              id: 117,
              name: "Toy Story Mania",
              isMagicTime: true,
              rate: Rate.SI_POSSIBLE,
              lane: [Lane.Multi_PASS_2]
            },
            {
              id: 5477,
              name: "Alien Swirling Saucers",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_2]
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: "Animal Kingdom",
      lands: [
        {
          name: "Pandora - The World of Avatar",
          attractions: [
            {
              id: 4439,
              name: "Avatar Flight of Passage",
              isMagicTime: true,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Multi_PASS_1]
            },
            {
              id: 4438,
              name: "Na'vi River Journey",
              isMagicTime: true,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Multi_PASS_1]
            },
          ],
        },
        {
          name: "Africa",
          attractions: [
            {
              id: 113,
              name: "Kilimanjaro Safaris",
              isMagicTime: true,
              rate: Rate.A_FAIRE,
              lane: [Lane.Multi_PASS_1]
            },
          ],
        },
        {
          name: "Asia",
          attractions: [
            {
              id: 110,
              name: "Expedition Everest",
              isMagicTime: true,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Multi_PASS_1]
            },
            {
              id: 112,
              name: "Kali River Rapids",
              isMagicTime: false,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_1]
            },
          ],
        },
        {
          name: "DinoLand U.S.A.",
          attractions: [
            {
              id: 111,
              name: "DINOSAUR",
              isMagicTime: true,
              rate: Rate.SI_POSSIBLE,
              lane: [Lane.Multi_PASS_1]
            },
          ],
        },
      ],
    },
  ],
};
