function changeBg(){
    let randomValue =Math.round(Math.random()*10000000).toString(16);
    document.body.style.backgroundColor="#"+randomValue;
}
