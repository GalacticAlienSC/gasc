export const config = {
  env: "prod",
  LOCAL_API_URL: "localhost:3000",
  API_URL: "odp-rarity.vercel.app",
  COLLECTION_NAME: "Galactic Alien Social Club",
  COLLECTION_TITLE: "Galactic Alien Social Club · Rarity Ranking",
  COLLECTION_DESCRIPTION: 'Galactic Alien Social Club · Rarity Ranking',
  COLLECTION_IMG_LINK: "https://raw.githubusercontent.com/GalacticAlienSC/gasc-rarity/main/Twitter%20Cover%20Art%20Lore%20Logo%20Rarity%20Ranking.png",
  STARTING_INDEX: 0,
  CONTRACT: {
    // if you're not sure, set CONTRACT: {}, will remove opensea link
    CHAIN: "ethereum", //possible values of ethereum, matic (polygin), klatyn, solana
    ADDRESS: "0x33fd4167e51a10d19c89c3a606389d0fddc3e676", //note: for solana these values change, so currently not supported
  },
  WEIGHTS: {},
};
