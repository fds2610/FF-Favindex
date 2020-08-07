/*
Open a new tab, and load "my-page.html" into it.
*/
function openMyPage() {
  console.log("injecting");
   browser.tabs.create({
     "url": "popup/enter_index.html"
   });
}


/*
Add openMyPage() as a listener to clicks on the browser action.
*/
browser.browserAction.onClicked.addListener(openMyPage);
 