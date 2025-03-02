const inputTask=document.getElementById("input-task");
const Add=document.getElementById("add");
const display=document.getElementById("display");
const Task=[];
add.addEventListener("click",function(e)
{
    e.preventDefault();
   
    addTask();
})
const  addTask=()=>{
   const item=inputTask.value.trim();
   if(item)
   {
    Task.push({title:item,completed:false});
   }
   uppdateTask();
   inputTask.value="";
}
const uppdateTask=()=>{
    display.innerHTML="";
Task.forEach((task,index)=>{
    const itemList=document.createElement("li");
    itemList.innerHTML=`
    <div class="taskItem">
    <div class="task">
        <input type="checkbox">
        <p>${Task.title}</p>
    </div>
    <div class="icon">
        <img src="edit.png" alt="">
        <img src="del.png" alt="">
    </div>
</div>

    `;
    itemList.addEventListener("change",()=>addTogleComplete(index));
    display.appendChild(itemList);
});
};

console.log(Task);
    

