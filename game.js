const bn1=document.querySelector("#bn1");
const bn2=document.querySelector("#bn2");
const bn3=document.querySelector("#bn3");
const text=document.querySelector("#text");
const main=document.querySelector("#main");
const gold=document.querySelector("#gold");
const go=100;
gold.innerText=go;


function alex()
{
    bn1.innerText="buy weapon";
    bn2.innerText="buy live";
    bn3.innerText="buy cloth";
    text.innerText="this is the supermarket ";


}
bn1.onclick=alex;
function buy()
{
    bn1.innerText="buy weapon";
    bn2.innerText="buy live";
    bn3.innerText="buy cloth";
    text.innerText="this is the supermarket ";
    if(go<10)
        {
    go=go-10;
      text.innerText="congratulation you buy sward";
      gold.innerText=go;
    
      }
      else{
        text.innerText="you can not buy weapon";
      }
}
bn2.onclick=buy