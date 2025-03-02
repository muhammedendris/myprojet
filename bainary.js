const decimal=document.getElementById("Diput");
const binary=document.getElementById("Biput");
const error=document.getElementById("Diput");
decimal.addEventListener("input",()=>{
    if(decimal.value!="")
    {
        const decimalValue=parseInt(decimal.value);
        binary.value=decimalValue.toString(2);
    }
    else{
        binary.value="";
    }
    
});

binary.addEventListener("input",()=>
{
    Validit(binary.value);

});
function Validit(num)
{
    
            
        const ans=parseInt(binary.value,2);
        decimal.value=ans;
    for(let i=0;i<num.length;i++)
    {
        if(num[i]>2)
        {

        }
    }
}
