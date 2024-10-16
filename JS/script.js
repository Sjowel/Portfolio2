// Select all project elements
const projects = document.querySelectorAll('.project');
const loader = document.querySelector('.circle-loader'); // Selecteer de cirkel
let currentProject = 0;
const displayTime = 3500; // 3500ms = 3.5 seconden

// Function to rotate projects
function showNextProject() {
    // Hide the current project
    projects[currentProject].style.display = 'none';

    // Reset the circle loader animation
    loader.style.animation = 'none'; // Stop de huidige animatie
    void loader.offsetWidth; // Trigger reflow om de animatie opnieuw te starten
    loader.style.animation = 'fade-out 3.5s linear forwards'; // Start de animatie opnieuw

    // Update the current project index
    currentProject = (currentProject + 1) % projects.length;

    // Show the next project
    projects[currentProject].style.display = 'block';
}

// Initial display of the first project
projects[currentProject].style.display = 'block';

// Rotate projects every 3.5 seconds
setInterval(showNextProject, displayTime);
