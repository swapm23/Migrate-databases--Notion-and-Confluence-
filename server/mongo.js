const axios = require('axios');
const dotenv = require('dotenv').config()
var test = null

var data = JSON.stringify({
    "collection": "id and tokens",
    "database": "notion_confluence",
    "dataSource": "Cluster0",
    "projection": {
        "notionSecretToken": 1,
        "notionDatabaseID": 1
    }
});
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-qukuy/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'dnWtA6F9NYecTZSxYixHBMpqUmwnNh7EZbX8TlIOqsGFyd4ChvFkzRzA8GELYgwG' ,
    },
    data: data
};
function getLeagues () {
  return axios(config)
  .then(response => {
    return response.data.document
  })
  .catch(error => {
    console.log(error);
    return Promise.reject(error);
  });
}

module.exports = getLeagues().then(response => {
  return(response);
});