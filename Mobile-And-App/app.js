// var a = new Date();
// console.log(a)

//For Loop
// for(var a = 0 ; a  < 10; a++){
//     console.log(a)

// }
// var b = 0;
// while (b < 10){
//     console.log(b);
//     b++;
// }
// var c = 0;
// do{
//     console.log(c)
//     c++;
// }
// while(c<10);









// function foo(greet){

//     alert(greet)
// }


// function clickBtn(){
//     alert('clickmeeeeee')
// }











// function getName(){

//     var name = document.getElementById("name");
//     alert(name.value)
// }











// function setName()
// {
//     var name =document.getElementById('name');
//     name.value= 'kinza';

//     var para = document.getElementById("para");
//     para.innerHTML = "Helo this is example"
// }
// setName()











// function setName(){
//     var name = document.getElementById('xyz');
//     name.value="ghous";
//     var para =  document.getElementById('para');
//     para.innerHTML  = "heyy am paracticing javascript";
     
// }
// setName()




///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Calculator
function getNumber(num){

    // console.log(num)
    var result =  document.getElementById("result")
    result.value += num;
}


function clearResult(){
    var result =  document.getElementById("result")
    result.value += "";

}




function getResult(){
    var result =  document.getElementById("result")
    result.value = eval(result.value)

}





































