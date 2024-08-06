let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-contants");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Menu bar: open and close
let sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// // // Contact form submission
// const form = document.getElementById("contact-form");
// const submitbtn = document.getElementById("sendbtn");
// const alertmsg = document.getElementById("msg");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     alertmsg.alert = "Your message has been sent successfully!";

//     setTimeout(function(){
//         alertmsg.innerHTML = "";
//     }, 3000);
//     form.reset();
// }   );