// Create Matrix code effect
        const matrixCode = document.getElementById('matrixCode');
        const characters = '01';
        
        for (let i = 0; i < 50; i++) {
            const code = document.createElement('span');
            code.textContent = generateCode(30);
            code.style.left = Math.random() * 100 + '%';
            code.style.animationDuration = (Math.random() * 10 + 5) + 's';
            code.style.animationDelay = Math.random() * 5 + 's';
            matrixCode.appendChild(code);
        }
        
        function generateCode(length) {
            let result = '';
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        }
        
        // Glitch effect for hero text
        const glitchText = document.querySelector('.glitch');
        setInterval(() => {
            glitchText.style.animation = 'none';
            void glitchText.offsetWidth; // Trigger reflow
            glitchText.style.animation = 'glitch-effect 3s infinite';
        }, 8000);
        
        // Add hover effect to project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
        
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Fade-in animation for sections
        const sections = document.querySelectorAll('section');
        const observerOptions = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });