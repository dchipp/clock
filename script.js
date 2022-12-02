
var r = document.querySelector(':root');
var slider = document.getElementById("corner");
var color = document.getElementById("color");

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
        case 0: aA=color.value,bB=color.value,cC=color.value,dD=color.value,eE=color.value,fF=color.value,gG="transparent"; break;
        case 1: aA="transparent",bB=color.value,cC=color.value,dD="transparent",eE="transparent",fF="transparent",gG="transparent"; break;
        case 2: aA=color.value,bB=color.value,cC="transparent",dD=color.value,eE=color.value,fF="transparent",gG=color.value; break;
        case 3: aA=color.value,bB=color.value,cC=color.value,dD=color.value,eE="transparent",fF="transparent",gG=color.value; break;
        case 4: aA="transparent",bB=color.value,cC=color.value,dD="transparent",eE="transparent",fF=color.value,gG=color.value; break;
        case 5: aA=color.value,bB="transparent",cC=color.value,dD=color.value,eE="transparent",fF=color.value,gG=color.value; break;
        case 6: aA=color.value,bB="transparent",cC=color.value,dD=color.value,eE=color.value,fF=color.value,gG=color.value; break;
        case 7: aA=color.value,bB=color.value,cC=color.value,dD="transparent",eE="transparent",fF="transparent",gG="transparent"; break;
        case 8: aA=color.value,bB=color.value,cC=color.value,dD=color.value,eE=color.value,fF=color.value,gG=color.value; break;
        case 9: aA=color.value,bB=color.value,cC=color.value,dD=color.value,eE="transparent",fF=color.value,gG=color.value; break;
        default: aA=color.value,bB=color.value,cC=color.value,dD=color.value,eE=color.value,fF=color.value,gG="transparent"; break;
    }
    display.segments[0].style.backgroundColor=aA;
    display.segments[1].style.backgroundColor=fF;
    display.segments[2].style.backgroundColor=bB;
    display.segments[3].style.backgroundColor=gG;
    display.segments[4].style.backgroundColor=eE;
    display.segments[5].style.backgroundColor=cC
    display.segments[6].style.backgroundColor=dD;
}
if(window.innerWidth<600){
    r.style.setProperty('--displayHeight', '100px');
}


var unit=0,decim=0;

setInterval(()=>{
    
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    r.style.setProperty('--segmentColor', color.value);
    updateDisplay(displayOne, (hours.toString().length > 1) ? parseInt(hours.toString()[0]) : 0);
    updateDisplay(displayTwo, (hours.toString().length == 1) ? parseInt(hours.toString()[0]) : parseInt(hours.toString()[1]));
    updateDisplay(displayThree, (minutes.toString().length > 1) ? parseInt(minutes.toString()[0]) : 0);
    updateDisplay(displayFour, (minutes.toString().length == 1) ? parseInt(minutes.toString()[0]) : parseInt(minutes.toString()[1]));

})
function selectSize(element){
    var options = document.querySelectorAll(".options .option");
    options.forEach(x =>{
        x.classList.remove("active");
    })
    element.classList.add("active");
    if(window.innerWidth>600){
        if(element.innerHTML=="Small")r.style.setProperty('--displayHeight', '100px');
        if(element.innerHTML=="Medium")r.style.setProperty('--displayHeight', '260px');
        if(element.innerHTML=="Large")r.style.setProperty('--displayHeight', '500px');
    } else {
        if(element.innerHTML=="Small")r.style.setProperty('--displayHeight', '50px');
        if(element.innerHTML=="Medium")r.style.setProperty('--displayHeight', '100px');
        if(element.innerHTML=="Large")r.style.setProperty('--displayHeight', '140px');
    }
    
}
corner.oninput = function() {
    r.style.setProperty('--roundness', `${this.value/5}px`);
  }
