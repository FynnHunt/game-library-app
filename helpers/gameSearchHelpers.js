import request from "superagent";
import config from "../config.json";

export const getSuggestions = async (search) => {
  const results = await request
    .post("https://api.igdb.com/v4/games")
    .send(`fields name,slug; limit 20; search "${search}";`)
    .set("Client-ID", config.igdbClientId)
    .set("Authorization", `Bearer ${config.igdbAccessToken}`);
  return results;
};

export const getGameBySlug = async (slug) => {
  const results = await request
    .post("https://api.igdb.com/v4/games")
    .send(`fields *; limit 20; where slug = "${slug}";`)
    .set("Client-ID", config.igdbClientId)
    .set("Authorization", `Bearer ${config.igdbAccessToken}`);
  return results;
};

export const getCoverUrl = async (coverId) => {
  const results = await request
    .post("https://api.igdb.com/v4/covers")
    .send(`fields url; where id = ${coverId};`)
    .set("Client-ID", config.igdbClientId)
    .set("Authorization", `Bearer ${config.igdbAccessToken}`);
  return results;
};
