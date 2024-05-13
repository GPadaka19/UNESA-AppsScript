function createAndRenameSheets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var masterSheet = spreadsheet.getSheetByName("Master"); // Ubah sesuai dengan nama sheet master Anda
  
  // Array nama sheet dan nilai filter
  var sheetsData = [
    { name: "Auditorium Pagi", filterValue: "Auditorium Pagi" },
    { name: "Perpustakaan Pagi", filterValue: "Perpustakaan Pagi" },
    { name: "Auditorium Siang", filterValue: "Auditorium Siang" },
    { name: "Perpustakaan Siang", filterValue: "Perpustakaan Siang" },
    { name: "Room A Malam", filterValue: "Room A Malam" },
    { name: "Coaching Clinic", filterValue: "Coaching Clinic" }
  ];

  // Loop untuk membuat dan menamai sheet baru
  for (var i = 0; i < sheetsData.length; i++) {
    var sheetName = sheetsData[i].name;
    var filterValue = sheetsData[i].filterValue;
    
    var newSheet = spreadsheet.insertSheet(sheetName); // Membuat sheet baru
    var range = newSheet.getRange("A2"); // Mendapatkan range cell A1 di sheet baru
    range.setFormula('=FILTER(Master!A:L, Master!L:L="' + filterValue + '")'); // Set rumus pada cell A1
    
    // Menyalin dan menempelkan data dari sel A1:K1 di sheet master ke setiap sheet baru
    var sourceRange = masterSheet.getRange("A1:L1");
    sourceRange.copyTo(newSheet.getRange("A1"), SpreadsheetApp.CopyPasteType.PASTE_VALUES);
  }
}
