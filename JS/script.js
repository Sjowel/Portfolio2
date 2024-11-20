// Select all project elements and other elements
const projects = document.querySelectorAll('.project');
const loader = document.querySelector('.circle-loader');
const dots = document.querySelectorAll(".dot"); // Select all dots
let currentProject = 0;
const displayTime = 5000; // 5000ms = 5 seconds

// Function to show the project at a given index
function showProject(index) {
    // Hide all projects
    projects.forEach(project => project.style.display = 'none');
    // Show the new project
    projects[index].style.display = 'block';
    // Update the current project index
    currentProject = index;
    // Reset the circle loader animation
    loader.style.animation = 'none'; // Stops the current animation
    void loader.offsetWidth; // Trigger reflow to start the animation again
    loader.style.animation = 'fade-out 3.5s linear forwards'; // Start the animation again
    // Update the active dot
    updateActiveDot(index);
}

// Function to update active dot
function updateActiveDot(index) {
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) {
        dots[index].classList.add("active");
    }
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
updateActiveDot(currentProject);

// Rotate projects every 5 seconds
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

// Add click functionality to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(rotationInterval); // Reset rotation
        showProject(index); // Show selected project
        rotationInterval = setInterval(showNextProject, displayTime); // Restart automatic rotation
    });
});

// Optional: Easter egg redirect
if (window.location.pathname.endsWith("/easteregg.html")) {
    setTimeout(() => {
        window.location.href = "/index.html";
    }, 5000);
}
