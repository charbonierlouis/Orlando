export enum Rate {
  A_FAIRE_ABSOLUMENT = "A faire absolument",
  A_FAIRE = "A faire",
  SI_POSSIBLE = "Si possible",
  PAS_BESOIN = "Pas besoin",
  A_EVITER = "A éviter",
}

export enum Lane {
  Multi_PASS_1 = "Multi PASS 1",
  Multi_PASS_2 = "Multi PASS 2",
  Single_PASS = "Single PASS",
  Virtual_Lane = "Virtual Lane",
}

export interface Attraction {
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
  name: string;
  lands: Land[];
}

export interface Data {
  parcs: Parc[];
}

export const data: Data = {
  parcs: [
    {
      name: "Magic Kingdom",
      lands: [
        {
          name: "Main Street",
        },
        {
          name: "Adventureland",
          attractions: [
            {
              name: "Jungle Cruise",
              isMagicTime: false,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Multi_PASS_1]
            },
            {
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
              name: "Big Thunder Mountain",
              isMagicTime: false,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_1]
            },
            {
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
              name: "Peter Pan's Flight",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_1]
            },
            {
              name: "Seven Dwarfs Mine Train",
              isMagicTime: true,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Single_PASS]
            },
            {
              name: "it's a small world",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_2]
            },
            {
              name: "Under the Sea - Journey of the Little Mermaid",
              isMagicTime: true,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Multi_PASS_2]
            },
            {
              name: "The Barnstormer",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_2]
            },
            {
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
              name: "Space Mountain",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_1]
            },
            {
              name: "Walt Disney's Carousel of Progress",
              isMagicTime: false,
              rate: Rate.SI_POSSIBLE,
            },
            {
              name: "Buzz Lightyear's Space Ranger Spin",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_2]
            },
            {
              name: "Tron Lightcycle Power Run",
              isMagicTime: false,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Single_PASS, Lane.Virtual_Lane]
            },
          ],
        },
      ],
    },
    {
      name: "Epcot",
      lands: [
        {
          name: "World Celebration",
          attractions: [
            {
              name: "Spaceship Earth",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_2]
            },
            {
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
              name: "Mission: SPACE",
              isMagicTime: true,
              rate: Rate.A_FAIRE,
              lane: [Lane.Multi_PASS_2]
            },
            {
              name: "Test Track",
              isMagicTime: true,
              rate: Rate.SI_POSSIBLE,
            },
            {
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
              name: "The Seas with Nemo & Friends",
              isMagicTime: true,
              rate: Rate.A_FAIRE,
              lane: [Lane.Multi_PASS_2]
            },
            {
              name: "Soarin",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_1]
            },
            {
              name: "Living with the Land",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_2]
            },
            {
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
              name: "Frozen Ever After",
              isMagicTime: true,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Multi_PASS_1]
            },
            {
              name: "Gran Fiesta Tour Starring The Three Caballeros",
              isMagicTime: false,
              rate: Rate.PAS_BESOIN,
            },
            {
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
      name: "Hollywood Studios",
      lands: [
        {
          name: "Hollywood Boulevard",
          attractions: [
            {
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
              name: "Star Tours",
              isMagicTime: true,
              rate: Rate.PAS_BESOIN,
              lane: [Lane.Multi_PASS_2]
            },
          ],
        },
        {
          name: "Grand Avenue",
        },
        {
          name: "Animation Courtyard",
        },
        {
          name: "Sunset Boulevard",
          attractions: [
            {
              name: "Twilight Zone Tower of Terror",
              isMagicTime: true,
              rate: Rate.SI_POSSIBLE,
              lane: [Lane.Multi_PASS_2]
            },
            {
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
              name: "Millennium Falcon: Smugglers Run",
              isMagicTime: true,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Multi_PASS_1]
            },
            {
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
              name: "Slinky Dog Dash",
              isMagicTime: true,
              rate: Rate.A_EVITER,
              lane: [Lane.Multi_PASS_1]
            },
            {
              name: "Toy Story Mania",
              isMagicTime: true,
              rate: Rate.SI_POSSIBLE,
              lane: [Lane.Multi_PASS_2]
            },
            {
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
      name: "Animal Kingdom",
      lands: [
        {
          name: "Oasis",
        },
        {
          name: "Discovery Island",
        },
        {
          name: "Pandora - The World of Avatar",
          attractions: [
            {
              name: "Avatar Flight of Passage",
              isMagicTime: true,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Multi_PASS_1]
            },
            {
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
              name: "Expedition Everest",
              isMagicTime: true,
              rate: Rate.A_FAIRE_ABSOLUMENT,
              lane: [Lane.Multi_PASS_1]
            },
            {
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
