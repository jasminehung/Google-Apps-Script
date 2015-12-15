//need to "Publish"→"部屬為網路應用程式"

function doGet(e) {
  var params = e.parameter;
  var name = params.name;
  var phone = params.phone;
  var result = params.result;
  
  var SpreadSheet = SpreadsheetApp.openById("1mC_6UAqEbLXKbbGa70_s5JVsNsEEsGzid9YUzECvYCE");
  var Sheet = SpreadSheet.getSheetByName("工作表1");  //Sheet name :"工作表1" 
  var LastRow = Sheet.getLastRow();
  
  //write into db
  Sheet.getRange(LastRow+1, 1).setValue(name); 
  Sheet.getRange(LastRow+1, 2).setValue(phone); 
  Sheet.getRange(LastRow+1, 3).setValue(result); 
  
  return ContentService.createTextOutput(true);
}
