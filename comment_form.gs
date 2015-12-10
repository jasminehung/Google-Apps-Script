
var submissioSSKey = '1Qmk5uERi4oW6swAT-P_ysOTTkyDtYaBVEdJiNXUREzU';//Change this key to your spreadsheet key

function doGet() {
  return HtmlService.createHtmlOutputFromFile('form')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
/*
function doGet(){
  var app = UiApp.createApplication().setTitle('myApp');
  var panel = app.createVerticalPanel();
  var grid = app.createGrid(8, 4).setId('myGrid');
  
  var listBox = app.createListBox().setName('myList').setWidth('80px');
  listBox.addItem('建議回饋');
  listBox.addItem('問題諮詢');
  listBox.addItem('錯誤回報');
  listBox.addItem('其他');
  
//  var handler = app.createServerChangeHandler('showSelectedinfo');
//  handler.addCallbackElement(listBox);
//  listBox.addChangeHandler(handler);
  var infoLabel = app.createLabel('請選擇留言類別').setId('info');
  panel.add(listBox);
  panel.add(infoLabel);
  app.add(panel);
 // return app;
  
  
//  var Q1= app.createRadioButton('Q',' 建議回饋');
//  var Q2= app.createRadioButton('Q',' 問題諮詢'); 
//  var Q3= app.createRadioButton('Q',' 錯誤回報'); 
//  var Q4= app.createRadioButton('Q',' 其他'); 
  
  var nameLabel = app.createLabel('姓名');
  var nameTextBox = app.createTextBox().setWidth('150px').setName('name');
 
  var depLabel = app.createLabel('處室');
  var depTextBox = app.createTextBox().setWidth('150px').setName('dep');
  
  var telLabel = app.createLabel('分機');
  var telTextBox = app.createTextBox().setWidth('150px').setName('tel');
  
  
  var messageLabel = app.createLabel('留言內容');
  var messageTextArea = app.createTextArea().setWidth('250px').setHeight('200px').setName('message');
  var submitButton = app.createButton('送出');
  var infoLabel = app.createLabel('成功送出.')
      .setVisible(false).setId('info');


  grid//.setWidget(0, 0, Q1)
       //.setWidget(0, 1, Q2)
       //.setWidget(1, 0, Q3)
      // .setWidget(1, 1, Q4)
       .setWidget(2, 0, nameLabel)
       .setWidget(2, 1, nameTextBox)
       .setWidget(3,0,depLabel)
       .setWidget(3,1, depTextBox)
       .setWidget(4,0,telLabel)
       .setWidget(4,1, telTextBox)
    .setWidget(5, 0, messageLabel)
    .setWidget(5, 1, messageTextArea)
    .setWidget(6, 1, submitButton)
    .setWidget(7, 1, infoLabel) ; 
  
  
  var handler = app.createServerClickHandler('insertInSS');
  handler.addCallbackElement(panel);
  submitButton.addClickHandler(handler);  
  panel.add(grid);
  app.add(panel);
  return app;
} */
/**********************************************/
function getValuesFromForm(comment_form){
  var name = form.name,
      Q= form.Q,
      tel = form.tel,
      message = form.message,
      dep = form.dep;
      sheet = SpreadsheetApp.openById(submissioSSKey).getActiveSheet();
  sheet.appendRow([Q,name,dep,tel,message]);

  
   MailApp.sendEmail({
     to: "jasmine@email.esunbank.com.tw.test-google-a.com  ",
     subject: "You receive a comment",
     htmlBody: "You receive a comment from your website, <br> Name: "+name+" <br>Message: "+message +"<br>To watch the results :https://docs.google.com/spreadsheets/d/1Qmk5uERi4oW6swAT-P_ysOTTkyDtYaBVEdJiNXUREzU/edit#gid=0 "
   });
}

/*******************************************
function insertInSS(e){
  var app = UiApp.getActiveApplication();
 // var Q = e.parameter.Q;
  var Q= e.parameter.myList;
  var name = e.parameter.name;
  var dep = e.parameter.dep;
  var tel = e.parameter.tel;
  var message = e.parameter.message;
  
  app.getElementById('info').setVisible(true).setStyleAttribute('color','red');
  var sheet = SpreadsheetApp.openById(submissioSSKey).getActiveSheet();
  var lastRow = sheet.getLastRow();
  var targetRange = sheet.getRange(lastRow+1, 1, 1, 5).setValues([[Q,name,dep,tel,message]]);
  return app;
}
**/

