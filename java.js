function cardspace(){
    var carddigit = document.getElementById('cardno').Value;
    if(carddigit.length ==4 || carddigit.length ==9 || carddigit.length ==14){
        document.getElementById('cardno').Value = carddigit+"";
        document.getElementById('cardno').max =1;
    }
}
function addslashes(){
    var expiredate = document.getElementById('validtill').Value;
    if(expiredate.length ==2){
        document.getElementById('validtill').Value = expiredate+"";
        document.getElementById('validtill').max =1;
    }
}
