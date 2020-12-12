
// var votes;
// chrome.runtime.onMessage.addListener(insertVotes);
// function insertVotes(message){
//     votes = message.votes;
// }

// function clickButton() {
//     if(votes > 0){
//         var button = document.elementFromPoint(163.5,616.109375).click();
//         button.addListener("load",function(){button.click()});
//         checker();
//     }
//     else{

//         return;
//     }
// }

// function checker(){
//     if(button.innerText === ` Thanks for your vote!
//         Share :         `)
//         {
//             console.log(votes);
//             votes--;
//             chrome.tabs.sendMessage(tabs[0].id,{
//                 votes: votes
//             });
//             window.location.reload;
//         }
//         else{
//             setTimeout( checker(), 1000);
//         }
// }

// clickButton();
document.elementFromPoint(163.5,616.109375).addListener("load",function(){button.click(); window.location.reload()});