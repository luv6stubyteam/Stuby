var  sh = document.querySelector("#showme");
var subs=document.querySelector("#sub");
var temp=sh;
let h= temp.innerHTML;
console.log(subs);
console.log(sh);
console.log(temp);
console.log(h)
 


function btn2()
{
   
    sh.innerHTML=subs.innerHTML;
   
}

function back(){
    
    sh.innerHTML=h
    
    
    console.log("inside back");
}
 


