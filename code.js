let plus=document.querySelector("#plus");
let minus=document.querySelector("#minus");
let count=document.querySelector("#count");
let c=0;
plus.addEventListener("click",()=>{
    c++;
    count.innerText=c;
});
minus.addEventListener("click",()=>{
    c--;
    if(c>=0)
    count.innerText=c;
    else
    c=0;
});
let addtocart=document.querySelector("#button2");
let notification=document.querySelector("#notification");
let cartbox=document.querySelector("#cartbox");
let cartbody=document.querySelector("#cartbody");
let cartbody2=document.querySelector("#cartbody2");
let cartnumbers=document.querySelector("#cartnumbers");
let open=false;
addtocart.addEventListener("click",()=>{
    cartbox.setAttribute("style","");
    open=true;
    if(c!=0)
    {
        notification.setAttribute("style","");
        cartbody2.setAttribute("style","");
        cartbody.setAttribute("style","display:none");
        

    }
    else
    {
        notification.setAttribute("style","visibility:hidden");
        cartbody.setAttribute("style","");
        cartbody2.setAttribute("style","display:none");
    }
    notification.innerText=c;
    cartnumbers.innerText=c;
    let amt=125*c;
    cartnumbers.nextElementSibling.children[0].innerText=amt;
});
let carticon=document.querySelector("#cart");
let deletebutton=document.querySelector("#deletebutton");
carticon.addEventListener("click",()=>{
    if(open==true)
    {
        cartbox.setAttribute("style","visibility:hidden");
        open=false;
    }
    else
    {
        cartbox.setAttribute("style","");
        open=true;
    }
});
deletebutton.addEventListener("click",()=>{
    c=0;
    notification.setAttribute("style","visibility:hidden");
    cartbody.setAttribute("style","");
    cartbody2.setAttribute("style","display:none");
    count.innerText=c;
});
let ordernow=document.querySelector("#button3");
let body=document.querySelector("#body");
ordernow.addEventListener("click",()=>{
    c=0;
    count.innerText=0;
    open=false;
    cartbox.setAttribute("style","visibility:hidden");
    notification.setAttribute("style","visibility:hidden");
    alert("Order placed...");
});
let piclist=document.querySelectorAll(".images");
let bigpic=document.querySelector("#bigpic");
for(let pic of piclist)
{
    pic.addEventListener("click",()=>{
        let link=pic.src;
        bigpic.src=link;
    })
}
let mainbody=document.querySelector("#body");
bigpic.addEventListener("click",()=>{
    mainbody.setAttribute("class","disable");

});