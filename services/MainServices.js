const mainQuery = require('../queries/mainQuery');

exports.mainDataService = async () => {
  try {
    const mainDataQuery = await mainQuery.mainDataQuery();
    
    return {
      statusCode : 20001,
      data : []
    }
  } catch (exception) {
    console.log("mainDataService Error : " + exception);
  }
}