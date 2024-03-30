function createAndRenameSheets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var masterSheet = spreadsheet.getSheetByName("Master"); // Ubah sesuai dengan nama sheet master Anda
  
  // Array nama sheet dan nilai filter
  var sheetsData = [
    { name: "Room A", filterValue: "Room A" },
    { name: "Room B", filterValue: "Room B" },
    { name: "Room C", filterValue: "Room C" },
    { name: "Room D", filterValue: "Room D" },
    { name: "Room E", filterValue: "Room E" },
    { name: "Room F", filterValue: "Room F" },
    { name: "Room G", filterValue: "Room G" },
    { name: "Room H", filterValue: "Room H" },
    { name: "Room I", filterValue: "Room I" },
    { name: "Room J", filterValue: "Room J" },
    { name: "Room K", filterValue: "Room K" },
    { name: "Room L", filterValue: "Room L" },
    { name: "Room M", filterValue: "Room M" },
    { name: "Room N", filterValue: "Room N" },
    { name: "Room O", filterValue: "Room O" }
  ];

  // Loop untuk membuat dan menamai sheet baru
  for (var i = 0; i < sheetsData.length; i++) {
    var sheetName = sheetsData[i].name;
    var filterValue = sheetsData[i].filterValue;
    
    var newSheet = spreadsheet.insertSheet(sheetName); // Membuat sheet baru
    var range = newSheet.getRange("A2"); // Mendapatkan range cell A2 di sheet baru
    range.setFormula('=FILTER(Master!A:G, Master!G:G="' + filterValue + '")'); // Set rumus pada cell A2

    // Menyalin dan menempelkan data dari sel A1:G1 di sheet master ke setiap sheet baru
    var sourceRange = masterSheet.getRange("A1:G1");
    sourceRange.copyTo(newSheet.getRange("A1"), SpreadsheetApp.CopyPasteType.PASTE_VALUES);
  }
}
