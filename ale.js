const btn1=document.getElementById("q1");
const btn2=document.getElementById("q2");
const btn3=document.getElementById("q3");
const btn4=document.getElementById("q4");
const content=document.getElementById("content");
const content2=document.getElementById("content2");
const content3=document.getElementById("content3");
const content4=document.getElementById("content4");

const stringHtml=[`<p>Writing clean, maintainable HTML, CSS, and JavaScript.
    Structuring web pages using HTML5.
    Styling layouts with CSS3 (Flexbox, Grid, animations).
    Ensuring responsiveness using media queries and frameworks like Bootstrap or Tailwind CSS</p>`,`<p>Using JavaScript for dynamic content updates.
    Implementing event handling (clicks, form submissions, etc.).
    Fetching and displaying data from APIs using Fetch API or Axios.
    Manipulating the DOM using vanilla JS or jQuery.</p>`,`<p>Building reusable components using React.js, Vue.js, or Angular.
    Managing application state using Redux, Context API, or Vuex.
    Optimizing performance with React.memo, useMemo, useCallback, etc</p>`,`<p>Using CSS media queries to adjust layouts for different screen sizes.
    Testing and optimizing performance on mobile devices.
    Ensuring touch-friendly elements for mobile users.</p>`];
function add( arr)
{

content.innerHTML=stringHtml;
}
function add( arrr)
{

content2.innerHTML=stringHtml;
}
function add( arrs)
{

content3.innerHTML=stringHtml;
}
function add( arrt)
{

content4.innerHTML=stringHtml;
}
 function addone()
 {
    add(stringHtml[0]);
    content.style.backgroundColor="green";
    content.style.display="block";
    content.classList.remove("hide");
 }
btn1.addEventListener("click",addone);
function addtwo()
 {
    add(stringHtml[1]);
    content2.style.backgroundColor="green";
    content2.style.display="block";
    content2.classList.remove("hide");
 }
btn2.addEventListener("click",addtwo);
function addT()
 {
    add(stringHtml[2]);
    content3.style.backgroundColor="green";
    content3.style.display="block";
    content3.classList.remove("hide");
 }
btn3.addEventListener("click",addT);
function addTo()
 {
    add(stringHtml[3]);
    content4.style.backgroundColor="green";
    content4.style.display="block";
    content4.classList.remove("hide");
 }
btn4.addEventListener("click",addTo);
