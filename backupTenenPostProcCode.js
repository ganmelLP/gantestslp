/*
var product = botContext.getBotVariable('productName');

if (product != null && product != undefined ){
  
  switch(product) {
  case "red high heel shoe":
     botContext.printDebugMessage("RED HIGH HEEL DIALOG !");
     botContext.setTriggerNextMessage("red_high_heel_shoes");
    break;
  case "y":
    // code block
    break;
  default:
    // code block
}
  
  //if(product == "red high heel shoe"){
   // botContext.printDebugMessage("RED HIGH HEEL DIALOG !");
   // botContext.setTriggerNextMessage("red high heel shoe dialog");
     //}
}
*/

// Seb - don't use the above. Use URL instead of product name in case they change the product name which won't match the interaction name. Look at the below
botContext.printDebugMessage('About to create urlToDialogMap object');
try{
 // The environment variable URL is mapped to the dialog name. Eg. shoppingCartURL is the interaction triggered for the shoppingCartURL defined as env variables
 var urlToDialogNameMap = {};
 urlToDialogNameMap[botContext.getEnvVariable('shoppingCartURL')] = 'shoppingCartURL';
 urlToDialogNameMap[botContext.getEnvVariable('menBraceletSmallCustomBeadsURL1')] = 'menBraceletSmallCustomBeadsURL';
 urlToDialogNameMap[botContext.getEnvVariable('menBraceletSmallCustomBeadsURL2')] = 'menBraceletSmallCustomBeadsURL';
 urlToDialogNameMap[botContext.getEnvVariable('bangleBraceletSilverURL1')] = 'bangleBraceletSilverURL';
 urlToDialogNameMap[botContext.getEnvVariable('bangleBraceletSilverURL2')] = 'bangleBraceletSilverURL';
 urlToDialogNameMap[botContext.getEnvVariable('personalizedClassicNameNecklaceGoldPlatedURL1')] = 'personalizedClassicNameNecklaceGoldPlatedURL';
 urlToDialogNameMap[botContext.getEnvVariable('smallGoldPlatedSilverCarrieNameNecklaceURL')] = 'smallGoldPlatedSilverCarrieNameNecklaceURL';
 urlToDialogNameMap[botContext.getEnvVariable('smallClasicNameNecklaceGoldPlatedSilver')] = 'smallClasicNameNecklaceGoldPlatedSilver';
 urlToDialogNameMap[botContext.getEnvVariable('engraved3dBarNecklaceURL1')] = 'engraved3dBarNecklaceURL';
 urlToDialogNameMap[botContext.getEnvVariable('engraved3dBarNecklaceURL2')] = 'engraved3dBarNecklaceURL';
 urlToDialogNameMap[botContext.getEnvVariable('engraved3dBarNecklaceURL3')] = 'engraved3dBarNecklaceURL';
 urlToDialogNameMap[botContext.getEnvVariable('russianRingURL')] = 'russianRingURL';
 urlToDialogNameMap[botContext.getEnvVariable('goldCarrieNameNecklaceURL')] = 'goldCarrieNameNecklaceURL';
 botContext.printDebugMessage("The URL List: " + JSON.stringify(urlToDialogNameMap));
}
catch(e) {
 botContext.printDebugMessage('ERROR SETTING URL LIST: ' + e);
}





// Add all the URLs above into the urlToDialogNameMap object and reference each URL as an environment variable. Environments could easily be changed for DEV or PROD environments.
try{
var startURL = botContext.getBotVariable('startURL');

if(!startURL || !urlToDialogNameMap[startURL]){
 botContext.printDebugMessage('ERROR due to no startURL or not in the map, StartURL: ' +startURL+ ", urlToDialogNameMap[startURL]: ," + urlToDialogNameMap[startURL] );
 return botContext.setTriggerNextMessage('Default Questions');
}


 botContext.printDebugMessage('URL starting from is: ' + startURL);
 botContext.setTriggerNextMessage(urlToDialogNameMap[startURL]);
 botContext.setBotVariable('startDialog', urlToDialogNameMap[startURL], true, false);
} catch(e) {
 botContext.printDebugMessage('NOT FOUND URL, SETTING QUESTIONS TO DEFAULT');
 botContext.printDebugMessage('ERROR IS: ' + e);
 botContext.setTriggerNextMessage('Default Questions due to no dialog found');
}
