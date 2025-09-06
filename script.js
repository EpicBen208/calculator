let numbers=""
let equasion=""
let powOpen=false
let brac=false
console.log(equasion)
const eq=document.getElementById("eq")
//grid numubers
function one(){
    numbers+='1';
    equasion+='1';
    eq.innerHTML=equasion
}

function two(){
    numbers+='2';
    equasion+='2';
    eq.innerHTML=equasion
}

function three(){
    numbers+="3"
    equasion+='3';
    eq.innerHTML=equasion
}

function four(){
    numbers+='4'
    equasion+='4';
    eq.innerHTML=equasion
}

function five(){
    numbers+='5'
    equasion+='5';
    eq.innerHTML=equasion
}

function six(){
    numbers+=6
    equasion+='6';
    eq.innerHTML=equasion
}

function seven(){
    numbers+=7
    equasion+='7';
    eq.innerHTML=equasion
}

function eight(){
    numbers+="8"
    equasion+="8";
    eq.innerHTML=equasion
}

function nine(){
    numbers+='9'
    equasion+='9';
    eq.innerHTML=equasion
}

function zero(){
    numbers+='0'
    equasion+='0';
    eq.innerHTML=equasion
}

//math functions

function add(){
    if(powOpen){
        equasion+='</sup>'
        powOpen=false;
    }
    numbers+='+'
    equasion+='+';
    eq.innerHTML=equasion


}

function sub(){
    if(powOpen){
        equasion+='</sup>'
        powOpen=false;
    }
    numbers+='-'
    equasion+='-';
    eq.innerText=numbers
  
}

function mult(){
      if(powOpen){
        equasion+='</sup>'
        powOpen=false;
    }
    numbers+='*'
    equasion+='×';
    eq.innerHTML=equasion
  
}

function dev(){
    if(powOpen){
        equasion+='</sup>'
        powOpen=false;
    }
    numbers+='/'
    equasion+='÷';
    eq.innerHTML=equasion
    
}
function pow(){
    powOpen=true
    numbers+=' ** '
    equasion+='<sup>'
    
}
function bracet(){
    if(!brac){
        numbers+='('
        equasion+='('
        brac=true
    eq.innerHTML=equasion
    }
    else{
        numbers+=')'
        equasion+=')'
        brac=false
    eq.innerHTML=equasion
    }
}
function cl(){
    numbers=""
    equasion=""
    eq.innerHTML=equasion
}

function deci(){
    numbers+='.'
    equasion+='.';
    eq.innerHTML=equasion
}

function equal(){
    let temp=eval(numbers)
    numbers=temp
    equasion=temp
    console.log(temp)
    eq.innerHTML=equasion
}