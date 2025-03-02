const value=document.querySelector(".value");
const btns=document.querySelectorAll(".btn");

let count=0;
btns.forEach(function(btn){
btn.addEventListener("click",function(e){
const wana=e.currentTarget.classList;
if(wana.contains("incrase"))
{
    count++;
}
else if(wana.contains("decrease"))
{
    count--;
}
else 
    {
        count=0;
    }

value.textContent=count;
if(count>0)
{
    value.style.color="green";
}
else if(count<0)
{
value.style.color="red";
}

});
});