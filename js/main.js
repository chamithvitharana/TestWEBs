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

var cars = ["Toyota","BMW","Jeep","Benz"];
//console.log(cars);
//of , in
for(var val of cars){
}
console.log(val);



//    test 01
var rainData = [34,65.7,65.3,23.5,78.9,98.78];
var sum = 0;

for(var i = 0; i<rainData.length; i++){
    sum+=rainData[i];
}
var avgRainData = sum / rainData.length;
console.log(avgRainData);

function getNameValue(){
    var names =  document.getElementById("getName").value;
    var upperName = names.toUpperCase();

    for(var i =0; i < names.length; i++){
        var finalResult = upperName;
        console.log(finalResult.charAt(i));
        //console.log(upperName.charAt(j));    

        //console.log(upperName.charAt(i[0]));
    }
}

// JSON object  (frontend to backend for data transfer)
// {
//     "name" : "chamith",
//     "address" : "Matara",
//     "age" : "25"
// }

//variable types

//var,let,const
 // var is  global(can access any all places )


var val1 = 85;
val1 = 90;

//const vala re initialize krnna ba
const val2 = 25;
val2 = 45;

///////////////////////////////////////////////////////////
function savePost(){
    var id = document.getElementById("id").value;
    var fname = document.getElementById("fName").value;
    var lname = document.getElementById("lName").value;
    // console.log(fname);
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: fname,
        body: lname,
        userId: id,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})  
  .then((response) => response.json())
  .then((json) => console.log(json));
}
