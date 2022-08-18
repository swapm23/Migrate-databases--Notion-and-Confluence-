const { Client } = require('@notionhq/client')
const val = require('./mongo.js')

async function getDatabase(database_id,notion) {
    const payload = {
        path : 'databases/'+database_id+'/query',
        method : 'POST'
    }

    const { results } = await notion.request(payload)
    const items = results.map((page)=>{
        return page.properties
    })
    return items
}

async function getValueFromNotion() {
    const mongoData = await val;
    var token = JSON.stringify(mongoData.notionSecretToken);
    var dbid = JSON.stringify(mongoData.notionDatabaseID);
    var database_id = dbid.slice(1,-1);
    var api_token = token.slice(1,-1)

    const notion = new Client({
        auth : api_token
    })

    return getDatabase(database_id,notion)
  };


  module.exports = getValueFromNotion().then(response => {
    return(response);
  });





