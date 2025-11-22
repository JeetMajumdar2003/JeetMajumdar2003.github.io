// Menu bar: open and close
let sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-250px";
}

// Theme Switcher
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    if(body.classList.contains("light-theme")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});

// Typing Animation
const textElement = document.getElementById("typing-text");
const textToType = "analyzing user_behavior_patterns...";
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        textElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        // Optional: Delete and retype or just blink cursor
        setTimeout(deleteText, 2000);
    }
}

function deleteText() {
    if (charIndex > 0) {
        textElement.textContent = textToType.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 50);
    } else {
        setTimeout(typeText, 1000);
    }
}

// Start typing animation when page loads
window.onload = () => {
    typeText();
};

// Contact Form (Google Sheets / Formspree)
const scriptURL = 'https://script.google.com/macros/s/AKfycbwbwQZhD2X9BgsWVqWdQ-2YXwpdV-m7ROGa45VzSzOTqTDxPibjkVEZ4zN0DocVohgxKw/exec'; // Replace with your Google Script URL or Formspree Endpoint
const form = document.getElementById("contact-form");
const msg = document.getElementById("msg");

if(form){
    form.addEventListener('submit', e => {
        e.preventDefault();
        msg.innerHTML = "Sending data packets...";
        msg.style.color = "var(--accent-cyan)";
        
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message transmitted successfully.";
                msg.style.color = "#00ff00";
                setTimeout(function(){
                    msg.innerHTML = "";
                    form.reset();
                }, 5000);
            })
            .catch(error => {
                msg.innerHTML = "Transmission failed. Check connection.";
                msg.style.color = "#ff0000";
                console.error('Error!', error.message);
            });
    });
}

// Portfolio Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        workItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
});

// About Tabs
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

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

