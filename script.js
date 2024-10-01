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

// Sélectionne les éléments de la modale
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var closeModal = document.getElementsByClassName("close")[0];

// Ouvre la modale lorsque l'image est cliquée
document.querySelectorAll('.project-screenshot').forEach(img => {
    img.onclick = function(){
        modal.style.display = "flex";
        modalImg.src = this.src;
        document.body.classList.add("modal-open"); // Ajoute la classe pour désactiver le défilement
    }
});

// Ferme la modale lorsque l'utilisateur clique sur le bouton 'X'
closeModal.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Retire la classe pour réactiver le défilement
}

// Ferme la modale lorsque l'utilisateur clique à l'extérieur de l'image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Retire la classe pour réactiver le défilement
    }
}

