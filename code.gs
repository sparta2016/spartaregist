function doPost(response){
  var sheet = SpreadsheetApp.openById("1Q5uBIswNCbIavne3pyTgdCw-ZRtw2dIdSXTzzqHqMuI").getSheetByName("db");
  var responseText = Object.keys(response);
  
  var nextData = sheet.getLastRow() + 1;
  var header = sheet.getRange(1,1,1,sheet.getLastColumn()).getValues()[0]; //get header
  
  var row = [new Date()];
  
  for(var i = 1; i < header.length; i++){
    if(header[i].length > 0){
      row.push(response.parameter[header[i]]);
    }
  }
  
  sheet.getRange(nextData,1,1,row.length).setValues([row]);
}