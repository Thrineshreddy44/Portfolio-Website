//------------------------------Home pg Animation-----------------------------------
let type1 = new Typed(".text", {
    strings: ["a Web Developer Intern at CodeSpaze."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// ---------------------------------Menu Bar----------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    let sidemenu = document.getElementById("menu-bar");

    function openmenu() {
        sidemenu.style.right = "0";
    }

    function closemenu() {
        sidemenu.style.right = "-200px";
    }
    document.querySelector(".fa-bars").onclick = openmenu;
    document.querySelector(".fa-xmark").onclick = closemenu;
});

// -------------------------------------Google Sheet-----------------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbyBMbYQPY9paEVRwEQHsjPZiFIt7NItH-F1a4JlIPArbcFDldxNnHjE35vEnoGX02w7MQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function()
        {
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message));
});

