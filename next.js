const img=document.getElementById("image");
const title=document.getElementById("title");
const rate=document.getElementById("rate");
const description=document.getElementById("description");
const next=document.getElementById("next");
const prev=document.getElementById("prev");
const random=document.querySelector(".random");
const dis=[
{
    img:"man-593333_1280.jpg",
    name:"malaria",
    rate:"mortarity rate 80%",
    text:"Blanditiis hic sed numquam cum asperiores magnam id, accusantium consectetur vitae fuga perferendis velit, illum qui dicta ipsam voluptates aspernatur provident non porro laudantium sint impedit fugiat error aliquid. Simili", 
}
,
{
    img:"hamburger-mot-burger-dessus_391229-8777.jpg",
    name:"covid 19",
    rate:"mortarity rate 90%",
    text:"covid hic sed numquam cum asperiores magnam id, accusantium consectetur vitae fuga perferendis velit, illum qui dicta ipsam voluptates aspernatur provident non porro laudantium sint impedit fugiat error aliquid. Simili", 
}
,{
    img:"6518832_orig.jpg",
    name:"hiv ADIS",
    rate:"mortarity rate 70%",
    text:"ADIS hic sed numquam cum asperiores magnam id, accusantium consectetur vitae fuga perferendis velit, illum qui dicta ipsam voluptates aspernatur provident non porro laudantium sint impedit fugiat error aliquid. Simili", 
},
{
    img:"AA1rPfI7 (1).jpg",
    name:"chorona",
    rate:"mortarity rate 50%",
    text:"corona hic sed numquam cum asperiores magnam id, accusantium consectetur vitae fuga perferendis velit, illum qui dicta ipsam voluptates aspernatur provident non porro laudantium sint impedit fugiat error aliquid. Simili", 
},
{
    img:"AA1rPfI7.jpg",
    name:"cancer",
    rate:"mortarity rate 90%",
    text:"cancer hic sed numquam cum asperiores magnam id, accusantium consectetur vitae fuga perferendis velit, illum qui dicta ipsam voluptates aspernatur provident non porro laudantium sint impedit fugiat error aliquid. Simili", 
},
{
    img:"Screenshot 2025-01-24 091309.png",
    name:"blood pressure",
    rate:"mortarity rate 30%",
    text:"blood pressure hic sed numquam cum asperiores magnam id, accusantium consectetur vitae fuga perferendis velit, illum qui dicta ipsam voluptates aspernatur provident non porro laudantium sint impedit fugiat error aliquid. Simili", 
},{
    img:"Screenshot 2025-01-24 114043.png",
    name:"addictited cigarate",
    rate:"mortarity rate 10%",
    text:"cigarate hic sed numquam cum asperiores magnam id, accusantium consectetur vitae fuga perferendis velit, illum qui dicta ipsam voluptates aspernatur provident non porro laudantium sint impedit fugiat error aliquid. Simili", 
}

];
let ct=0;
window.addEventListener("DOMContentLoaded",function()
{
let item=dis[ct];
img.src=item.img;
title.textContent=item.name;
rate.textContent=item.rate;
description.textContent=item.text;
});
function show(ct)
{
    let item=dis[ct];
    img.src=item.img;
    title.textContent=item.name;
    rate.textContent=item.rate;
    description.textContent=item.text; 
}
next.addEventListener("click",function()
{
    ct++;
    if(ct<dis.length)
    show(ct);
});
prev.addEventListener("click",function()
{
    ct--;
    if(ct<dis.length)
    show(ct);
});

random.addEventListener("click",function()
{
    ct=Math.floor(Math.random()*dis.length); 
    show(ct);
})