import { getCountriesByRegion } from "helpers";

export const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const region = req.query.region.toLowerCase();

      const countries = await getCountriesByRegion(region);
      res.status(200).json(countries);
    } catch (e) {
      res.status(500).json(e);
    }
  }
};

export default handler;
