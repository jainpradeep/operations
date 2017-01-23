  node_xj = require("xls-to-json");
  node_xj({
    input: "OPERATIONS DASH BOARD-Rev01.xlsm",  // input xls 
    output: "output.json", // output json 
    sheet: "PUMPING"  // specific sheetname 
  }, function(err, result) {
    if(err) {
      console.error(err);
    }
  });