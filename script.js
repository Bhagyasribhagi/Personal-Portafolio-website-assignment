document.querySelector('.cross').style.display="none";
document.querySelector(".hambar").addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display="inline"
        document.querySelector('.cross').style.display="none"

    }
    else{
        document.querySelector('.ham').style.display="none"
        setTimeout(()=>{
            document.querySelector('.cross').style.display="inline"
        },400)
        
    }

});


var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}