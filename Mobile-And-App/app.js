var a = new Date();
console.log(a)

For Loop
for(var a = 0 ; a  < 10; a++){
    console.log(a)

}
var b = 0;
while (b < 10){
    console.log(b);
    b++;
}
var c = 0;
do{
    console.log(c)
    c++;
}
while(c<10);









function foo(greet){

    alert(greet)
}


function clickBtn(){
    alert('clickmeeeeee')
}











function getName(){

    var name = document.getElementById("name");
    alert(name.value)
}











function setName()
{
    var name =document.getElementById('name');
    name.value= 'kinza';

    var para = document.getElementById("para");
    para.innerHTML = "Helo this is example"
}
setName()











function setName(){
    var name = document.getElementById('xyz');
    name.value="ghous";
    var para =  document.getElementById('para');
    para.innerHTML  = "heyy am paracticing javascript";
     
}
setName()




/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Calculator
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




















    // console.log(num)
    var result =  document.getElementById("result")
    result.value += num;
}
















function ReadMore(){
    var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tenetur?"
var paragraph =  document.getElementById('pera') 
paragraph.innerHTML = text
}



function big(){
    var img = document.getElementById("car")

    img.className += 'hidden'
}




function changeImage(){
    var carImage = document.getElementById('img')
    carImage.src = 'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg'
}






function changeImage(){
    var pera = document.getElementsByTagName('p')
    pera[1].style.color = 'red'
}


function swapPic(){
    document.getElementById("before").src="after-pic.jpg"
}

function swapPic(eId,newPic){
    document.getElementById(eId).src = newPic;
}













function swapPic(){
    document.getElementById("before").src = "after-pic.jpg";

}
another methd

function swapPic(){
    var pic = document.getElementById("before");
    pic.src = "after-pic.jpg";
}





function getAddress(){
    var link = document.getElementById('link1');
    var address = link.href;
}






function enLargeForm(){
    var frm =  document.getElementById("link1")
    frm.className = "jumbo";

}



function changeImage(){
    var image = document.getElementById('pera')
    image.style.fontSize = '2em'
}

var parent = document.getElementById('parent')
var pera = parent.getElementsByTagName('p');
pera[3].style.color = 'red'
for(var i = 0; i < pera.length; i++){
    pera[i].style.color = 'blue'
}












































































































































