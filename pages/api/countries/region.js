import { getCountriesByRegion } from "helpers";

export const handler = async (req, res) => {
  if (req.method === "GET") {
    console.log("Hello");
    try {
      // get the selected region from the query string
      const region = req.query.region.toLowerCase();
      console.log(region);

      const countries = await getCountriesByRegion(region);
      res.status(200).json(countries);
    } catch (e) {
      res.status(500).json(e);
    }
  }
};

export default handler;
