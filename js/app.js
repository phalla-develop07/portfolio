import { personalData } from './data/personal.js';
import { experienceData } from './data/experience.js';
import { skillsData } from './data/skills.js';
import { referencesData } from './data/references.js';
import { educationData, workshopsData, hobbiesData } from './data/education.js';
import { observeElements, addParallaxEffect } from './utils/animations.js';
import { addScrollToTopButton, addNavHighlight, addCVButton } from './utils/helpers.js';

document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
    
    renderHero();
    renderAbout();
    renderExperience();
    renderSkills();
    renderToolsCarousel();
    renderEducation();
    renderReferences();
    renderContact();
    
    // Initialize animations and utilities
    setTimeout(() => {
        observeElements();
        addParallaxEffect();
        addScrollToTopButton();
        addNavHighlight();
        addCVButton();
        initCarousel();
    }, 100);
});

function renderHero() {
    const container = document.getElementById('hero-container');
    const logos = ['html.png', 'css.png', 'javascript.png', 'reactjs.png', 'nodejs.png', 'php.png', 'mysql.png', 'python.png'];
    const logoNames = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'PHP', 'MySQL', 'Python'];
    const angleSlice = 360 / logos.length;
    
    // Responsive radius based on screen size
    let radius = 150;
    if (window.innerWidth <= 768) {
        radius = 120;
    }
    if (window.innerWidth <= 480) {
        radius = 105;
    }
    
    let logoOrbit = '<div class="logo-orbit">';
    logos.forEach((logo, index) => {
        const angle = angleSlice * index;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        logoOrbit += `<div class="orbit-logo" style="left: calc(50% + ${x}px - 25px); top: calc(50% + ${y}px - 25px);" title="${logoNames[index]}">
            <img src="assets/logo/${logo}" alt="${logoNames[index]}">
        </div>`;
    });
    logoOrbit += '</div>';
    
    container.innerHTML = `
        <div class="profile-avatar">
            ${logoOrbit}
            <img src="assets/images/phalla-suong.png" alt="${personalData.name} - ${personalData.title}" class="profile-image">
        </div>
        <h1>${personalData.name}</h1>
        <div class="title-badge">${personalData.title}</div>
        <p>Passionate Web Developer crafting modern web solutions with Node.js, React.js, and full-stack expertise</p>
        <div class="cta-buttons">
            <a href="#experience" class="btn btn-primary">View My Projects</a>
            <a href="#contact" class="btn btn-secondary">Let's Work Together</a>
        </div>
    `;
}

function renderAbout() {
    const container = document.getElementById('about-container');
    const { aboutMe, contact, languages } = personalData;
    container.innerHTML = `
        <div class="card">
            <h3>👤 Personal Information</h3>
            <div style="background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <p><strong>Full Name:</strong> ${aboutMe.fullName}</p>
                <p><strong>Gender:</strong> ${aboutMe.sex}</p>
                <p><strong>Place of Birth:</strong> ${aboutMe.pob}</p>
                <p><strong>Date of Birth:</strong> ${aboutMe.dob}</p>
                <p><strong>Nationality:</strong> ${aboutMe.nationality}</p>
                <p><strong>Marital Status:</strong> ${aboutMe.maritalStatus}</p>
            </div>
            <h4>🌍 Languages</h4>
            <ul>
                ${languages.map(lang => `<li>${lang}</li>`).join('')}
            </ul>
        </div>
        <div class="card">
            <h3>📞 Contact Information</h3>
            <div style="background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%); padding: 15px; border-radius: 8px;">
                <p style="margin-bottom: 12px;"><strong>📱 Phone:</strong> <a href="tel:${contact.phone}">${contact.phone}</a></p>
                <p style="margin-bottom: 12px;"><strong>✉️ Email:</strong> <a href="mailto:${contact.email}">${contact.email}</a></p>
                <p><strong>📍 Location:</strong> ${contact.location}</p>
            </div>
        </div>
    `;
}

function renderExperience() {
    const container = document.getElementById('experience-container');
    container.innerHTML = `<div class="experience-timeline">
        ${experienceData.map((exp, index) => `
            <div class="experience-card card" style="animation-delay: ${index * 0.1}s">
                <div class="exp-header">
                    <h3>${exp.title}</h3>
                    <span class="date">${exp.date}</span>
                </div>
                <div class="project">${exp.project}</div>
                <div class="exp-role">${exp.role}</div>
                <ul>
                    ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        `).join('')}
    </div>`;
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = `
        <div class="card">
            <div class="skill-section">
                <h3>💪 Hard Skills</h3>
                <div class="tags">
                    ${skillsData.hardSkills.map((skill, i) => `<span class="tag" style="animation-delay: ${i * 0.05}s">${skill}</span>`).join('')}
                </div>
            </div>
        </div>
        <div class="card">
            <div class="skill-section">
                <h3>🎯 Soft Skills</h3>
                <div class="tags">
                    ${skillsData.softSkills.map((skill, i) => `<span class="tag" style="animation-delay: ${i * 0.05}s">${skill}</span>`).join('')}
                </div>
            </div>
        </div>
        <div class="card">
            <div class="skill-section">
                <h3>🛠️ Tools & Tech</h3>
                <div class="tags">
                    ${skillsData.tools.map((tool, i) => `<span class="tag" style="animation-delay: ${i * 0.05}s">${tool}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderToolsCarousel() {
    const container = document.getElementById('tools-carousel-track');
    const tools = [
        { name: 'AWS', file: 'aws.png' },
        { name: 'Docker', file: 'docker.png' },
        { name: 'Figma', file: 'figma.png' },
        { name: 'GitHub', file: 'github.png' },
        { name: 'Jira', file: 'jira.png' },
        { name: 'Microsoft', file: 'microsoft.png' },
        { name: 'MobaXterm', file: 'mobaxterm.png' },
        { name: 'Ubuntu', file: 'ubuntu.png' },
        { name: 'Vercel', file: 'vercel.png' },
        { name: 'VMware', file: 'vmware.png' },
        { name: 'WordPress', file: 'wordpress.png' }
    ];
    
    // Duplicate tools for seamless infinite animation
    const toolsToDisplay = [...tools, ...tools];
    
    container.innerHTML = toolsToDisplay.map(tool => `
        <div class="carousel-item" title="${tool.name}">
            <img src="assets/tools/${tool.file}" alt="${tool.name}">
        </div>
    `).join('');
}

function initCarousel() {
    // Auto-scroll carousel is handled by CSS animation
    // No manual button controls needed
}

function renderEducation() {
    const container = document.getElementById('education-container');
    container.innerHTML = `
        <div class="education-grid">
            <div>
                <h3>📚 Education</h3>
                ${educationData.map((edu, i) => `
                    <div class="education-card" style="animation-delay: ${i * 0.1}s">
                        <h4>${edu.title}</h4>
                        <div class="institution">${edu.institution}</div>
                        <div class="date">${edu.date}</div>
                        <p>${edu.description}</p>
                    </div>
                `).join('')}
            </div>
            <div>
                <h3>🎓 Workshops & Training</h3>
                ${workshopsData.map((workshop, i) => `
                    <div class="workshop-card" style="animation-delay: ${i * 0.1}s">
                        <h4>${workshop.title}</h4>
                        <div class="presenter">${workshop.date}</div>
                        <p>${workshop.details}</p>
                    </div>
                `).join('')}
            </div>
            <div>
                <h3>🎨 Hobbies & Interests</h3>
                <div class="hobbies-container">
                    ${hobbiesData.map((hobby, i) => `
                        <div class="hobby-item" style="animation-delay: ${i * 0.1}s">
                            ${hobby}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderReferences() {
    const container = document.getElementById('references-container');
    container.innerHTML = referencesData.map((ref, index) => `
        <div class="reference-card" style="animation-delay: ${index * 0.1}s">
            <div class="reference-image-wrapper">
                <img src="${ref.image}" alt="${ref.name}" class="reference-image">
            </div>
            <h4>👤 ${ref.name}</h4>
            <div class="role">${ref.position}</div>
            <p>📞 <a href="tel:${ref.phone}">${ref.phone}</a></p>
            <p>✉️ <a href="mailto:${ref.email}">${ref.email}</a></p>
        </div>
    `).join('');
}

function renderContact() {
    const container = document.getElementById('contact-container');
    container.innerHTML = `
        <h2>🚀 Let's Connect & Create Something Amazing!</h2>
        <p>I'm always excited to discuss new projects, collaborations, and opportunities. Feel free to reach out and let's talk about how I can help bring your ideas to life!</p>
        <div class="contact-links">
            <a href="${personalData.social.linkedin}" target="_blank" class="contact-link">
                💼 LinkedIn
            </a>
            <a href="${personalData.social.facebook}" target="_blank" class="contact-link">
                👥 Facebook
            </a>
            <a href="${personalData.social.telegram}" target="_blank" class="contact-link">
                📲 Telegram
            </a>
            <a href="${personalData.social.locationMap}" target="_blank" class="contact-link">
                📍 Location
            </a>
        </div>
    `;
}
