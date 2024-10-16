// Select all project elements
const projects = document.querySelectorAll('.project');
let currentProject = 0;
const displayTime = 3500; // 5000ms = 5 seconds

// Function to rotate projects
function showNextProject() {
    // Hide the current project
    projects[currentProject].style.display = 'none';

    // Update the current project index
    currentProject = (currentProject + 1) % projects.length;

    // Show the next project
    projects[currentProject].style.display = 'block';
}

// Initial display of the first project
projects[currentProject].style.display = 'block';

// Rotate projects every 5 seconds
setInterval(showNextProject, displayTime);  
