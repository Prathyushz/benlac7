// Scroll Animations for Headings
const scrollElements = document.querySelectorAll('.scroll-animation');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('show');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.2)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', handleScrollAnimation);


// Toggle Navigation Menu on Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle show class
});

function sendMail(){

    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    const serviceID = "service_wmja4eo";
    const templateID = "template_86p58id";

        emailjs.send(serviceID, templateID, params)
        .then(res=>{
            document.getElementById('name').value="";
            document.getElementById('email').value="";
            document.getElementById('subject').value="";
            document.getElementById('message').value="";
            alert("Your message was sent successfully");
        })
        .catch(err=>console.log(err));

  }

