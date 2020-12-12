// function injectTheScript() {
//     var votes = document.getElementById('votes').value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         // query the active tab, which will be only one tab
//         //and inject the script in it
//             chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"}
//             ,
//             function(){
//                 chrome.tabs.sendMessage(tabs[0].id,{
//                     votes: votes
//                 });
//             }
//             );

//     });

// }
// chrome.runtime.onMessage.addListener(updateVotes);
// function updateVotes(message){
//     document.getElementById("left").innerText = message.votes;
// }

// document.getElementById('clickactivity').addEventListener('click', injectTheScript);
var i = 10;
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    while (i >0){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"});
        //chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
    });
    }
 }); 