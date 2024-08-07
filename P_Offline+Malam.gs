function createAndRenameSheets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var masterSheet = spreadsheet.getSheetByName("Master"); // Change to your master sheet name
  
  // Array of sheet names and filter values
  var sheetsData = [
    { name: "Auditorium Pagi", filterValue: "Auditorium Pagi" },
    { name: "Room A Pagi", filterValue: "Room A Pagi" },
    { name: "Room B Pagi", filterValue: "Room B Pagi" },
    { name: "Room C Pagi", filterValue: "Room C Pagi" },
    { name: "Perpustakaan Pagi", filterValue: "Perpustakaan Pagi" },
    { name: "Room A Siang", filterValue: "Room A Siang" },
    { name: "Room B Siang", filterValue: "Room B Siang" },
    { name: "Room C Siang", filterValue: "Room C Siang" },
    { name: "Perpustakaan Siang", filterValue: "Perpustakaan Siang" },
    { name: "Room A Malam", filterValue: "Room A Malam" },
    { name: "Room B Malam", filterValue: "Room B Malam" }
  ];

  // Loop to create and rename new sheets
  for (var i = 0; i < sheetsData.length; i++) {
    var sheetName = sheetsData[i].name;
    var filterValue = sheetsData[i].filterValue;
    
    var newSheet = spreadsheet.insertSheet(sheetName); // Create a new sheet
    var range = newSheet.getRange("A2"); // Get range cell A2 in the new sheet
    range.setFormula('=FILTER(Master!A:L, Master!L:L="' + filterValue + '")'); // Set formula in cell A2
    
    // Copy and paste header data from cell A1:L1 in the master sheet to the new sheet
    var sourceRange = masterSheet.getRange("A1:L1");
    sourceRange.copyTo(newSheet.getRange("A1"), SpreadsheetApp.CopyPasteType.PASTE_VALUES);
  }
}
