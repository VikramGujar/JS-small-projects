var btnFontIncrease=document.getElementById('increasefont');
var btnFontDecrease = document.getElementById('decreasefont');
var mainHeading = document.getElementById('heading');


var initialFontSize = (window.getComputedStyle(mainHeading).fontSize);


initialFontSize = parseInt(initialFontSize.substr(0,(initialFontSize.length - 2)));
console.log(initialFontSize);

btnFontIncrease.onclick = function(){
   initialFontSize += 10
   mainHeading.style.fontSize = initialFontSize + "px";
   
}
btnFontDecrease.addEventListener('click',function(){
   initialFontSize -= 10
   mainHeading.style.fontSize = initialFontSize + "px"; 
   console.log("I am clicket");
});
