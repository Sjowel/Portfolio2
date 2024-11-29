// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all project elements and other elements
    const projects = document.querySelectorAll('.project');
    const loader = document.querySelector('.circle-loader');
    const dots = document.querySelectorAll(".dot"); // Select all dots
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentProject = 0;
    const displayTime = 3000; // 5000ms = 5 seconds
    let rotationInterval;

    // Function to show the project at a given index
    function showProject(index) {
        // Hide all projects
        projects.forEach(project => project.style.display = 'none');
        // Show the new project
        projects[index].style.display = 'block';
        // Update the current project index
        currentProject = index;
        // Reset the circle loader animation
        resetLoaderAnimation();
        // Update the active dot
        updateActiveDot(index);
    }

    // Function to reset loader animation
    function resetLoaderAnimation() {
        loader.style.animation = 'none'; // Stops the current animation
        void loader.offsetWidth; // Trigger reflow to restart the animation
        loader.style.animation = 'fade-out 3.5s linear forwards'; // Start the animation again
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

    // Function to reset and restart rotation interval
    function resetRotationInterval() {
        clearInterval(rotationInterval);
        rotationInterval = setInterval(showNextProject, displayTime);
    }

    // Initialize first project
    function initialize() {
        projects[currentProject].style.display = 'block';
        updateActiveDot(currentProject);
        rotationInterval = setInterval(showNextProject, displayTime);
    }

    // Event listeners for navigation arrows
    if (leftArrow && rightArrow) {
        leftArrow.addEventListener('click', () => {
            resetRotationInterval();
            showPreviousProject();
        });

        rightArrow.addEventListener('click', () => {
            resetRotationInterval();
            showNextProject();
        });
    }

    // Add click functionality to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            resetRotationInterval();
            showProject(index);
        });
    });

    // Start the project rotation
    initialize();
});

// Open modal en toon de aangeklikte afbeelding
function openModal(event) {
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");
    fullImage.src = event.target.src; // Zet de bron gelijk aan de aangeklikte afbeelding
    modal.style.display = "block"; // Toon de modal
}

// Sluit de modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Sluit de modal met de ESC-toets
function handleKeyDown(event) {
    if (event.key === "Escape") { // Controleer of de Escape-toets is ingedrukt
        closeModal();
    }
}

// Voeg klik-eventlisteners toe aan alle afbeeldingen met de class "modal-trigger"
const modalTriggers = document.querySelectorAll(".modal-trigger");
modalTriggers.forEach(img => {
    img.addEventListener("click", openModal);
});

// Voeg een eventlistener toe voor toetsenbord-gebeurtenissen
document.addEventListener("keydown", handleKeyDown);