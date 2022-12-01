
var r = document.querySelector(':root');
var displayOne = {
    segments: Array.from(document.querySelectorAll("#displayOne .segment"))
}
var displayTwo = {
    segments: Array.from(document.querySelectorAll("#displayTwo .segment"))
}
var displayThree = {
    segments: Array.from(document.querySelectorAll("#displayThree .segment"))
}
var displayFour = {
    segments: Array.from(document.querySelectorAll("#displayFour .segment"))
}
function updateDisplay(display, value){
    switch(value){
        case 0: aA="white",bB="white",cC="white",dD="white",eE="white",fF="white",gG="transparent"; break;
        case 1: aA="transparent",bB="white",cC="white",dD="transparent",eE="transparent",fF="transparent",gG="transparent"; break;
        case 2: aA="white",bB="white",cC="transparent",dD="white",eE="white",fF="transparent",gG="white"; break;
        case 3: aA="white",bB="white",cC="white",dD="white",eE="transparent",fF="transparent",gG="white"; break;
        case 4: aA="transparent",bB="white",cC="white",dD="transparent",eE="transparent",fF="white",gG="white"; break;
        case 5: aA="white",bB="transparent",cC="white",dD="white",eE="transparent",fF="white",gG="white"; break;
        case 6: aA="white",bB="transparent",cC="white",dD="white",eE="white",fF="white",gG="white"; break;
        case 7: aA="white",bB="white",cC="white",dD="transparent",eE="transparent",fF="transparent",gG="transparent"; break;
        case 8: aA="white",bB="white",cC="white",dD="white",eE="white",fF="white",gG="white"; break;
        case 9: aA="white",bB="white",cC="white",dD="white",eE="transparent",fF="white",gG="white"; break;
        default: aA="white",bB="white",cC="white",dD="white",eE="white",fF="white",gG="transparent"; break;
    }
    display.segments[0].style.backgroundColor=aA;
    display.segments[1].style.backgroundColor=fF;
    display.segments[2].style.backgroundColor=bB;
    display.segments[3].style.backgroundColor=gG;
    display.segments[4].style.backgroundColor=eE;
    display.segments[5].style.backgroundColor=cC;
    display.segments[6].style.backgroundColor=dD;
}
var unit=0,decim=0;
setInterval(()=>{
    
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    updateDisplay(displayOne, (hours.toString().length > 1)?parseInt(hours.toString()[0]):0);
    updateDisplay(displayTwo, (hours.toString().length == 1)?parseInt(hours.toString()[0]):parseInt(hours.toString()[1]));
    updateDisplay(displayThree, (minutes.toString().length > 1)?parseInt(minutes.toString()[0]):0);
    updateDisplay(displayFour, (minutes.toString().length == 1)?parseInt(minutes.toString()[0]):parseInt(minutes.toString()[1]));

},1000)
function selectSize(element){
    var options = document.querySelectorAll(".options .option");
    options.forEach(x =>{
        x.classList.remove("active");
    })
    element.classList.add("active");
    if(element.innerHTML=="Small")r.style.setProperty('--displayHeight', '100px');
    if(element.innerHTML=="Medium")r.style.setProperty('--displayHeight', '260px');
    if(element.innerHTML=="Large")r.style.setProperty('--displayHeight', '500px');
    
}