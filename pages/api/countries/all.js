import { getCountries } from "helpers";

export const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const countries = await getCountries();
      res.status(200).json(countries);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default handler;
