function createAndRenameSheets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var masterSheet = spreadsheet.getSheetByName("Master"); // Ubah sesuai dengan nama sheet master Anda
  
  // Array nama sheet dan nilai filter
  var sheetsData = [
    { name: "Room A Pagi", filterValue: "Room A Pagi" },
    { name: "Room B Pagi", filterValue: "Room B Pagi" },
    { name: "Room C Pagi", filterValue: "Room C Pagi" },
    { name: "Room D Pagi", filterValue: "Room D Pagi" },
    { name: "Room E Pagi", filterValue: "Room E Pagi" },
    { name: "Room A Siang", filterValue: "Room A Siang" },
    { name: "Room B Siang", filterValue: "Room B Siang" },
    { name: "Room A Malam", filterValue: "Room A Malam" },
    { name: "Coaching Clinic", filterValue: "Coaching Clinic" }
  ];

  // Loop untuk membuat dan menamai sheet baru
  for (var i = 0; i < sheetsData.length; i++) {
    var sheetName = sheetsData[i].name;
    var filterValue = sheetsData[i].filterValue;
    
    var newSheet = spreadsheet.insertSheet(sheetName); // Membuat sheet baru
    var range = newSheet.getRange("A2"); // Mendapatkan range cell A1 di sheet baru
    range.setFormula('=FILTER(Master!A:F, Master!C:C="' + filterValue + '")'); // Set rumus pada cell A1
    
    // Menyalin dan menempelkan data dari sel A1:F1 di sheet master ke setiap sheet baru
    var sourceRange = masterSheet.getRange("A1:F1");
    sourceRange.copyTo(newSheet.getRange("A1"), SpreadsheetApp.CopyPasteType.PASTE_VALUES);
  }
}
