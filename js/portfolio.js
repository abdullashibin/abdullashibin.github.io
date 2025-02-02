document.addEventListener('DOMContentLoaded', function() {
    // Get project ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    // Portfolio projects data
    const projects = {
        1: {
            title: "Space Theme",
            category: "WordPress",
            date: "January 2025",
            image: "images/image_1.jpg",
            description: "A custom WordPress theme created from a portfolio HTML template.",
            client: "Personal Project"
        }
        // Add more projects as needed
    };

    // If we're on a single portfolio page, load the project data
    if (document.querySelector('.portfolio-single')) {
        const project = projects[projectId];
        if (project) {
            // Update content with project data
            document.querySelector('.portfolio-single img').src = project.image;
            document.querySelector('.portfolio-single .category').textContent = project.category;
            document.querySelector('.portfolio-single h2').textContent = project.title;
            document.querySelector('.project-details .date').textContent = project.date;
            document.querySelector('.project-details .category').textContent = project.category;
            document.querySelector('.portfolio-single p').textContent = project.description;
        }
    }
});