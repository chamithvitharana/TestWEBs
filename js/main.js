console.log("chamii");
var name = "chamith";
var suname =  "Vitharana";
console.log(name+" "+suname);

//funtion - method
function print(){
    // alert(1);
    //console.log("print button action");
}

function getdata(){
    var email = document.getElementById("emails").value;
    //console.log(email);
    document.getElementById("result").innerHTML=email;

}


function getsubjectData(){
    var sub1 = document.getElementById("sub1").value;
    var sub2 = document.getElementById("sub2").value;
    var sub3 = document.getElementById("sub3").value;
    var sub4 = document.getElementById("sub4").value;
    var sub5 = document.getElementById("sub5").value;

    var subTotal = Number(sub1) + Number(sub2) + Number(sub3) + Number(sub4) + Number(sub5) ;
    var avgMarks = subTotal/5;
    if(subTotal > 50){
        document.getElementById("passFail").innerHTML= "Pass";
    }else{
        document.getElementById("passFail").innerHTML= "Fail";
    }


    document.getElementById("subTot").innerHTML= subTotal;
    document.getElementById("avgMarks").innerHTML= avgMarks;

}

var sub1  = 44;
var sub2  = 20;
var sub3  = 34;

var avg = (sub1 + sub2 + sub3)/3 ;

// if(avg >= 75){
//     alert("A");
// }else if(avg >= 65){
//     alert("B");
// }else if(avg >= 55){
//     alert("C");
// }else if(avg >= 35){
//     alert("S");
// }else{
//     alert("W");
// }



// console.log(avg);

// loops
for(var i =0; i<10; i++){
    console.log("Hello Chamith");
}


console.log(num);

function clearInputs(){
    document.getElementById("num").innerHTML="";
}

function getNumValue(){
    const num = document.getElementById("num");
    console.log(num);
}

var isMarried =true;
var count = 3;
while(isMarried){
    console.log("Hii");
    count--;
    if(count==0){
        isMarried= false;
    }

}