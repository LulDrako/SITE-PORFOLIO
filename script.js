document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const tabs = document.querySelectorAll('.project-tabs li');
const projects = document.querySelectorAll('.project-detail');
const tabsContainer = document.querySelector('.project-tabs');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const isActive = this.classList.contains('active');
        
        tabs.forEach(item => item.classList.remove('active'));
        projects.forEach(project => project.classList.remove('active'));
        
        if (!isActive) {
            this.classList.add('active');
            const projectToShow = document.getElementById(this.dataset.project);
            projectToShow.classList.add('active');
            
            tabsContainer.classList.add('centered');
            tabs.forEach(item => {
                if (!item.classList.contains('active')) {
                    item.style.display = 'none';
                }
            });
        } else {
            tabsContainer.classList.remove('centered');
            tabs.forEach(item => {
                item.style.display = 'block';
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');

    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('skills-appear');
            } else {
                entry.target.classList.remove('skills-appear');
            }
        });
    }, observerOptions);

    skills.forEach(skill => {
        observer.observe(skill);
    });
});
