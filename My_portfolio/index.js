const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const themeSwitch = document.querySelector('.theme-switch');
let currentPage = 'home';

// AI Bot functionality
let aiBots = [];
let aiBotTexts = [];

// AI Bot responses for different pages
const aiResponses = {
    home: [
        "Hello! I'm your AI assistant! 👋",
        "Check out Mukesh's amazing projects! 🚀",
        "Need help? I'm here to assist! 💡",
        "Welcome to the portfolio! ✨",
        "Ready to explore? Let's go! 🎯",
        "Feel free to ask me anything! 🤖",
        "Looking for a developer? Mukesh is your guy! 💻",
        "Amazing skills ahead! 🔥"
    ],
    about: [
        "Learn more about Mukesh! 📚",
        "3+ years of experience! 💼",
        "Passionate React.js developer! ⚛️",
        "Creative problem solver! 🎨",
        "Check out his background! 📖",
        "Experienced in web development! 🌐",
        "Graphic design expert! 🎯",
        "Strategic thinking approach! 🧠"
    ],
    skills: [
        "React.js: 90% mastery! ⚛️",
        "JavaScript: 85% expertise! 📜",
        "HTML & CSS: 95% proficiency! 🎨",
        "Node.js: 80% skills! 🟢",
        "REST APIs: 75% knowledge! 🔌",
        "Database Management: 70%! 🗄️",
        "Impressive skill set! 🚀",
        "Continuous learning! 📈"
    ],
    service: [
        "Web Development services! 💻",
        "Graphic Design expertise! 🎨",
        "Digital Marketing solutions! 📊",
        "Cloud Application Development! ☁️",
        "Data Analysis & Visualization! 📈",
        "UI/UX Design with Figma! 🎯",
        "Technical consulting! 💡",
        "Professional services! ⭐"
    ],
    projects: [
        "Amazing project showcase! 🚀",
        "Check out the Weather App! 🌤️",
        "3D Calculator is impressive! 🧮",
        "Facial Recognition system! 👁️",
        "Currency Converter app! 💱",
        "Password Generator tool! 🔐",
        "Age Calculator app! 📅",
        "Photography website! 📸"
    ],
    contact: [
        "Ready to get in touch! 📞",
        "Send me a message! 💬",
        "Let's work together! 🤝",
        "Available for projects! 💼",
        "Quick response guaranteed! ⚡",
        "Professional communication! 📧",
        "Let's discuss your needs! 💭",
        "Contact me anytime! 📱"
    ]
};

let currentResponseIndex = 0;

function toggleMenu() {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('open');
}

function toggleTheme() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeSwitch.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeSwitch.textContent = '🌞';
    }
}

function showPage(page) {
    if (currentPage !== page) {
        document.getElementById(currentPage).classList.remove('active');
        document.getElementById(page).classList.add('active');
        currentPage = page;
        
        // AI Bot reacts to page changes
        setTimeout(() => {
            updateAIBotForPage(page);
        }, 500);
    }
}

function updateAIBotForPage(page) {
    const currentAIBotText = document.querySelector('.page.active .ai-bot-text span');
    if (currentAIBotText) {
        const pageResponses = aiResponses[page] || aiResponses.home;
        const randomResponse = pageResponses[Math.floor(Math.random() * pageResponses.length)];
        currentAIBotText.textContent = randomResponse;
        
        setTimeout(() => {
            const defaultTexts = {
                home: "AI Assistant",
                about: "About Me Helper",
                skills: "Skills Guide",
                service: "Services Expert",
                projects: "Project Showcase",
                contact: "Contact Assistant"
            };
            currentAIBotText.textContent = defaultTexts[page] || "AI Assistant";
        }, 4000);
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

function showProjectModal() {
    alert('Project details will be displayed in a modal.');
}

// AI Bot click interaction
function initAIBot() {
    const aiBots = document.querySelectorAll('.ai-bot');
    const aiBotTexts = document.querySelectorAll('.ai-bot-text span');
    
    aiBots.forEach((aiBot, index) => {
        aiBot.addEventListener('click', () => {
            // Add click animation with sparkle effect
            aiBot.classList.add('clicked');
            setTimeout(() => {
                aiBot.classList.remove('clicked');
            }, 600);
            
            // Get current page
            const currentPage = document.querySelector('.page.active').id;
            const pageResponses = aiResponses[currentPage] || aiResponses.home;
            
            // Change response
            currentResponseIndex = (currentResponseIndex + 1) % pageResponses.length;
            aiBotTexts[index].textContent = pageResponses[currentResponseIndex];
            
            // Add typing effect
            aiBotTexts[index].style.opacity = '0';
            setTimeout(() => {
                aiBotTexts[index].style.opacity = '1';
            }, 100);
            
            // Reset to default after 4 seconds
            setTimeout(() => {
                const defaultTexts = {
                    home: "AI Assistant",
                    about: "About Me Helper",
                    skills: "Skills Guide",
                    service: "Services Expert",
                    projects: "Project Showcase",
                    contact: "Contact Assistant"
                };
                aiBotTexts[index].textContent = defaultTexts[currentPage] || "AI Assistant";
            }, 4000);
        });
        
        // Add hover sound effect (visual feedback)
        aiBot.addEventListener('mouseenter', () => {
            aiBot.style.filter = 'drop-shadow(0 0 25px var(--c2)) brightness(1.2)';
        });
        
        aiBot.addEventListener('mouseleave', () => {
            aiBot.style.filter = 'drop-shadow(0 0 15px var(--c2))';
        });
    });
}

// Initialize AI Bot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initAIBot();
    
    // Auto-change AI responses every 10 seconds
    setInterval(() => {
        const currentPage = document.querySelector('.page.active').id;
        const currentAIBotText = document.querySelector('.page.active .ai-bot-text span');
        
        if (currentAIBotText) {
            const pageResponses = aiResponses[currentPage] || aiResponses.home;
            const defaultTexts = {
                home: "AI Assistant",
                about: "About Me Helper",
                skills: "Skills Guide",
                service: "Services Expert",
                projects: "Project Showcase",
                contact: "Contact Assistant"
            };
            
            if (currentAIBotText.textContent === defaultTexts[currentPage] || currentAIBotText.textContent === "AI Assistant") {
                const randomResponse = pageResponses[Math.floor(Math.random() * pageResponses.length)];
                currentAIBotText.textContent = randomResponse;
                
                setTimeout(() => {
                    currentAIBotText.textContent = defaultTexts[currentPage] || "AI Assistant";
                }, 4000);
            }
        }
    }, 10000);
});






