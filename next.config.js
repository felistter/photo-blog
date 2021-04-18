module.exports = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  env: {
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    NEXT_CONTENTFUL_SPACE_ID: process.env.NEXT_CONTENTFUL_SPACE_ID,
    NEXT_CONTENTFUL_ACCESS_TOKEN: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
  },
};
