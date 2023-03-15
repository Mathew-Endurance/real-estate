const dotenv = require("dotenv");
dotenv.config();

const Airtable = require("airtable-node");
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_KEY)
  .table(process.env.AIRTABLE_TABLE);

exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      let listing = await airtable.retrieve(id);
      if (listing.error) {
        return {
          statusCode: 404,
          body: `no listing with id: ${id}`,
        };
      }
      listing = { id: listing.id, ...listing.fields };
      console.log(listing);
      return {
        statusCode: 200,
        body: JSON.stringify(listing),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "server error",
      };
    }
  }
  return {
    statusCode: 200,
    body: "please provide listing id",
  };
};
