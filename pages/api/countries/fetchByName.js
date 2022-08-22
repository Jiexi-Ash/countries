import { getCountryByName } from "helpers";

export const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const name = req.query.name;

      const country = await getCountryByName(name);

      res.status(200).json(country);
    } catch (e) {
      res.status(500).json(e);
    }
  }
};

export default handler;
