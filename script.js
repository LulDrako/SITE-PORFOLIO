// Smooth scroll for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project tabs functionality
const tabs = document.querySelectorAll('.project-tabs li');
const projects = document.querySelectorAll('.project-detail');
const tabsContainer = document.querySelector('.project-tabs');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const isActive = this.classList.contains('active');
        
        // Reset all tabs and project details
        tabs.forEach(item => item.classList.remove('active'));
        projects.forEach(project => project.classList.remove('active'));
        
        if (!isActive) {
            this.classList.add('active');
            const projectToShow = document.getElementById(this.dataset.project);
            projectToShow.classList.add('active');
            
            // Center the selected tab
            tabsContainer.classList.add('centered');
            tabs.forEach(item => {
                if (!item.classList.contains('active')) {
                    item.style.display = 'none'; // Hide other tabs
                }
            });
        } else {
            // Show all tabs if deselected
            tabsContainer.classList.remove('centered');
            tabs.forEach(item => {
                item.style.display = 'block'; // Show all tabs
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');

    const observerOptions = {
        root: null,  // Uses the viewport as the root
        threshold: 0.1  // Triggers when at least 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('skills-appear');
            } else {
                entry.target.classList.remove('skills-appear'); // Remove the class when the element is out of view
            }
        });
    }, observerOptions);

    skills.forEach(skill => {
        observer.observe(skill);  // Observe each skill for visibility changes
    });
});



