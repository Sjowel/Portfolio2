// Select all project elements
const projects = document.querySelectorAll('.project');
const loader = document.querySelector('.circle-loader'); // Select the circle
let currentProject = 0;
const displayTime = 5000; // 5000ms = 5 seconds

// Function to show the project at a given index
function showProject(index) {
    // Hide the current project
    projects[currentProject].style.display = 'none';
    // Update the current project index
    currentProject = index;
    // Show the new project
    projects[currentProject].style.display = 'block';
    // Reset the circle loader animation
    loader.style.animation = 'none'; // Stops the current animation
    void loader.offsetWidth; // Trigger reflow to start the animation again
    loader.style.animation = 'fade-out 3.5s linear forwards'; // Start the animation again
}

// Function to show the next project
function showNextProject() {
    showProject((currentProject + 1) % projects.length);
}

// Function to show the previous project
function showPreviousProject() {
    showProject((currentProject - 1 + projects.length) % projects.length);
}

// Initial display of the first project
projects[currentProject].style.display = 'block';

// Rotate projects every 3.5 seconds
let rotationInterval = setInterval(showNextProject, displayTime);

// Event listeners for the arrows
document.querySelector('.left-arrow').addEventListener('click', () => {
    clearInterval(rotationInterval); // Reset rotation
    showPreviousProject(); // Show previous project
    rotationInterval = setInterval(showNextProject, displayTime); // Restart automatic rotation
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    clearInterval(rotationInterval); // Reset rotation
    showNextProject(); // Show next project
    rotationInterval = setInterval(showNextProject, displayTime); // Restart automatic rotation
});
