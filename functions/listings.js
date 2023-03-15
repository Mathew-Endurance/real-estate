const dotenv = require("dotenv");
dotenv.config();

const Airtable = require("airtable-node");
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_KEY)
  .table(process.env.AIRTABLE_TABLE);
exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    const listings = response.records.map((listing) => {
      const { id, fields } = listing;
      const {
        name,
        images,
        featured,
        price,
        features,
        city,
        category,
        agent,
        contact,
        email,
        agentname,
        description,
      } = fields;
      const { url } = images[0];
      return {
        id,
        featured,
        name,
        price,
        city,
        category,
        features,
        description,
        image: url,
        agent,
        contact,
        email,
        agentname,
        description,
      };
    });

    console.log(listings);

    return {
      statusCode: 200,
      body: JSON.stringify(listings),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: "there was an error",
    };
  }
};

// AIRTABLE_API_KEY = keySTIz9fndezc6RJ
// AIRTABLE_BASE_KEY = apppe9mQDYim0DWx0
// AIRTABLE_TABLE = products
