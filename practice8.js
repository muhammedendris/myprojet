const listdisplay=document.getElementById("list-display");
const btn=document.getElementById("btn");
const box=document.getElementById("input-box");
function addTask()
{
    if(box.value==="")
    {
        alert("please enter the Task ");
  

    }
    else
    {
        const li=document.createElement("li");
        listdisplay.appendChild(li);
        li.innerHTML=box.value;  
    }
box.value="";
}

