# Google-Apps-Script <br>

GAS on E.sun Google Sites Homepage <br>
```
Drive-> add -> Google Apps Script. 
File on drive-> tool-> Script editor. 
```
### Notes
#####Things you can't do:
  * You can't alter existing features.
  * We don't provide a way to charge users for add-ons.
  * Using Apps Script libraries will cause your add-on to run more slowly if all the server-side code were contained in a single script project. Suggest copy the contents of library into your main script.
  * Apps Script only exposes server side events.


#####Apps script中使用jquery的限制: <br>
Third party libraries go through a Caja sanitization (https://developers.google.com/apps-script/guides/html/restrictions) <br>
Caja:Compiler for making third-party HTML, CSS and JavaScript safe for embedding(https://code.google.com/p/google-caja/)
Other restrictions: https://developers.google.com/apps-script/guides/html/restrictions

### Publish
- https://developers.google.com/apps-script/add-ons/domain-wide
- 發佈之前(設定API與驗證) <br>
指令碼編輯器>資源>進階Google服務>Google Developers控制台>搜尋到Google Apps Marketplace SDK>啟用API>設定>填寫應用程式資訊(簡介,上傳照片...), 底下外掛程式擴充功能要勾選>後面貼上專案金鑰( 金鑰在指令碼編輯器的頁面選檔案>專案屬性>專案金鑰) >Save
- 發佈 <br>
開啟你要發佈的指令碼編輯器>發佈>部屬為Google外掛程式>填寫表格>若要發佈在網域內,右下方"在 Google Apps Marketplace 發佈"要勾> 進入Developer dashboard畫面,填寫詳細資訊(簡介,上傳照片,語言...)>下方Visibility options要選對>發佈. 
若發佈為私人或使僅供網域內使用則不須經過google審核就會上架.



## Reference
- https://developers.google.com/apps-script/
- http://www.googleappsscript.org/
- Debug : https://developers.google.com/apps-script/troubleshooting
