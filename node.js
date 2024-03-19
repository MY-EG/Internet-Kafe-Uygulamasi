let tableList = Array(20).fill(null);
let yeniDiv = Array(20).fill(null);
for(var i = 0; i < 20; i++)
{
    yeniDiv[i] = document.createElement('div');
    yeniDiv[i].id = 'yenidiv';
    yeniDiv[i].style.color = "rgb(185, 62, 168)";
    yeniDiv[i].style.fontWeight = 650;
    yeniDiv[i].style.borderBottom = "5px solid purple";
}
function start(buttonID,divID)
{
    var second = 0;
    var minute = 0;
    var hour = 0;
    var index;
    if(buttonID.length == 7){index = buttonID.slice(-1) - 1}
    if(buttonID.length == 8){index = buttonID.slice(-2) - 1}

    tableList[index] = setInterval(() => {
        second++;

        yeniDiv[index].textContent = Math.floor(hour/10)+hour%10+' : '+Math.floor(minute/10)+minute%10+' : '+Math.floor(second/10)+second%10;
        document.getElementById(divID).appendChild(yeniDiv[index]);

        if(second == 60)
        {
            second = 0;
            minute++;
        }

        if(minute == 60)
        {
            minute = 0;
            hour++;
        }

        

    },1000);
}
function close(buttonID,divID) {
    var index;
    if(buttonID.length == 7){index = buttonID.slice(-1) - 1}
    if(buttonID.length == 8){index = buttonID.slice(-2) - 1}
    clearInterval(tableList[index]);
    document.getElementById(divID).removeChild(yeniDiv[index]);
}
function salary(buttonID) {
    var index;
    if(buttonID.length == 7){index = buttonID.slice(-1) - 1}
    if(buttonID.length == 8){index = buttonID.slice(-2) - 1}
    var salary = yeniDiv[index].textContent.slice(3,5) * 0.5;
    alert("Borcunuz : "+salary+" TL");
}
function timerstart(buttonID,divID)
{
    
    var button = document.getElementById(buttonID);
    if(button.innerHTML == 'Start') {
        button.innerHTML = 'Finish';
        start(buttonID,divID);
    }else {
        button.innerHTML = 'Start';
        close(buttonID,divID);
        setTimeout(() => {
            salary(buttonID);
        },300);
    }
    
}
