import { getGameBySlug } from "../../helpers/gameSearchHelpers";

const handler = async (req, res) => {
  const results = await getGameBySlug(req.query.q);
  console.log(results);

  res.status(200).json({ results });
};

export default handler;
