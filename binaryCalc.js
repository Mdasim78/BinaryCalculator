let numInput="";
function btn0Click(){
    numInput+=0;
    document.getElementById("res").innerHTML=numInput;
}
function btn1Click(){
    numInput+=1;
    document.getElementById("res").innerHTML=numInput;
}
function ClrInput(){
    document.getElementById("res").innerHTML="";
    numInput="";
}
    
function doubleSignCheck(){
    let resValueEndChar=numInput.charAt(numInput.length-1);
    if(resValueEndChar!="+" && resValueEndChar!="-" && resValueEndChar!="/" && resValueEndChar!="*"){
     return true;}
    else{
    return false;}
}
function addSumSign(){
    if(numInput!="" && doubleSignCheck()){
         numInput=numInput+"+";
         document.getElementById("res").innerHTML=numInput;
    } 
}
function addSubSign(){
    if(numInput!="" && doubleSignCheck()) numInput=numInput+"-";
    else numInput=numInput;
    document.getElementById("res").innerHTML=numInput;
}
function addMulSign(){
    if(numInput!="" && doubleSignCheck()) numInput=numInput+"*";
    else numInput=numInput;
    document.getElementById("res").innerHTML=numInput;
}
function addDivSign(){
    if(numInput!="" && doubleSignCheck()) numInput=numInput+"/";
    else numInput=numInput;
    document.getElementById("res").innerHTML=numInput;
}

function doCalculation(){
    let resArr=numInput.split("");
    let lastChar=numInput.charAt(numInput.length-1);
    if(lastChar=="+"||lastChar=="-"||lastChar=="*"||lastChar=="/") numInput=numInput;
    else{
        if(resArr.includes("+")) doSum();
        else if (resArr.includes("-")) doSubtraction();
        else if (resArr.includes("*")) doMultiplication();
        else if (resArr.includes("/")) doDivision();
    }
    
    function doSum(){
        let inputArr=numInput.split("+");
        document.getElementById("res").innerHTML=(Number.parseInt(inputArr[0],2)+Number.parseInt(inputArr[1],2)).toString(2);
        Number.parseInt
    }
    function doSubtraction(){
        let inputArr=numInput.split("-");
        document.getElementById("res").innerHTML=(Number.parseInt(inputArr[0],2)-Number.parseInt(inputArr[1],2)).toString(2);
    }
    function doMultiplication(){
        let inputArr=numInput.split("*");
        document.getElementById("res").innerHTML=(Number.parseInt(inputArr[0],2)*Number.parseInt(inputArr[1],2)).toString(2);
    }
    function doDivision(){
        let inputArr=numInput.split("/");
        document.getElementById("res").innerHTML=(Math.trunc(Number.parseInt(inputArr[0],2)/Number.parseInt(inputArr[1],2))).toString(2);
    }
   numInput=document.getElementById("res").innerHTML;
}


