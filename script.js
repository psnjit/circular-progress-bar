const number= document.getElementById("number");
let counter= 0;
setInterval(()=>{
    if(counter== 65){
        clearInterval();
    }else{
        counter+=1;
        number.textContent=counter+"%";
    }
}, 30.769)