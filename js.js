const arr=[
   "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];
function getindex()
{
    const index=Math.floor(arr.length*Math.random());
    return index;
}
const button=document.querySelector("#bn");
const body=document.querySelector("body");
const hx=document.querySelector("#hx-code");
button.onclick=change;
function change()
{
const color=arr[getindex()];
body.style.backgroundColor = color;

hx.innerText=color;
}
