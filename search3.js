const find=document.getElementById("find");
find.addEventListener("keyup",football);
function football()
{
    const li=document.getElementsByTagName("li");
    const values=find.value
    for(let i=0;i<li.length;i++)
    {
if(li[i].innerHTML.toLowerCase().includes(values))
{
li[i].style.display="block";
}else{
li[i].style.display="none";
}
    }
}
