// upload to Google Drive without login

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form');
}

function uploadFiles(form) {
  
  try {  
    var dropbox = "Files uploaded";
    var folder, folders = DriveApp.getFoldersByName(dropbox);
    
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
    }
    
    var blob = form.myFile;    
    var file = folder.createFile(blob);    
    file.setDescription("Uploaded by: " + form.myName);
        
    return "File uploaded successfully! Your file link:  " + file.getUrl();
    
  } catch (error) {   
    return error.toString();
  }
  
}



/*  form.html

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
</head>

<style>
 #i {  margin: 20px;  width: 450px;}
 form { margin: 40px; font-size: 16px;}
 h1{ margin-top: 80px;}
</style>

<center>

<h1> Upload to (someone's) Google Drive</h1>
<br> <br>
<form id="myForm">
    <input id="i" type="text" name="myName" placeholder="[name]" class="form-control">
    <input id="i" type="file" name="myFile" class="form-control">
  
    <br>
    <input id="i" type="submit" value="upload" class="form-control"
           onclick="this.value='UPLOADING...';
                    google.script.run.withSuccessHandler(fileUploaded)
                    .uploadFiles(this.parentNode);
                    return false;">
</form>

<div id="output"></div>

<script>
    function fileUploaded(status) {
        document.getElementById('myForm').style.display = 'none';
        document.getElementById('output').innerHTML = status; 
        //  var res = str.split(/(\\|\/)/).pop();
    }
</script>
</center>
*/
