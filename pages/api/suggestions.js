import { getSuggestions } from "../../helpers/gameSearchHelpers";

const handler = async (req, res) => {
  const results = await getSuggestions(req.query.q);

  res.status(200).json({ results: results.text });
};

export default handler;
