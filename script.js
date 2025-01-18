document.querySelector('.menu-toggle').addEventListener('click', function () {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    navMenu.classList.toggle('open');
    
    if (navMenu.classList.contains('open')) {
        menuToggle.innerHTML = '✖';
    } else {
        menuToggle.innerHTML = '☰';
    }
});




const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const heading = entry.target;
            if (entry.isIntersecting) {
                heading.classList.add("animate"); 
            }
        });
    },
    {
        threshold: 0.5, 
    }
);


const heading1 = document.querySelector("#education-certifications h1");
if (heading1) {
    observer.observe(heading1); 
}
const heading2 = document.querySelector("#skills h1");
if (heading2) {
    observer.observe(heading2); 
}
const heading3 = document.querySelector("#projects h1");
if (heading3) {
    observer.observe(heading3); 
}
const heading4 = document.querySelector("#contact h1");
if (heading4) {
    observer.observe(heading4); 
}
const roles = ["Software Developer", "Machine Learning Engineer", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;
const roleElement = document.getElementById("role");

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        roleElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 150);  
    } else {
        setTimeout(deleteRole, 2000); 
    }
}

function deleteRole() {
    if (charIndex > 0) {
        roleElement.textContent = roleElement.textContent.slice(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteRole, 100); 
    } else {
        roleIndex = (roleIndex + 1) % roles.length; 
        setTimeout(typeRole, 500); 
    }
}


document.addEventListener("DOMContentLoaded", typeRole);



async function handleSubmit(event) {
    event.preventDefault(); 

    const form = event.target;
    const formData = new FormData(form);

    
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(form.action, {
            method: "POST",
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify(data), 
        });

        const result = await response.json();

        if (response.ok && result.status === "success") {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert(`Error: ${result.message || "Failed to send message."}`);
        }
    } catch (error) {
        alert(`An unexpected error occurred: ${error.message}`);
    }
}

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Saumyajyoti Banik_CSE_2025_Resume.pdf'; 
    link.download = 'Saumyajyoti Banik'; 
    link.click();
}
