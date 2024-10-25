let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; // Get the current vertical scroll position
        let offset = sec.offsetTop - 150; // Section's position minus 150 for slight offset
        let height = sec.offsetHeight; // Height of the current section
        let id = sec.getAttribute('id'); // Get the section's ID

        // Check if the current scroll position is within the current section
        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the link corresponding to the current section
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });
};

// Toggle the 'bx-x' and 'active' classes when the menu icon is clicked
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
