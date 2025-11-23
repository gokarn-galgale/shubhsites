document.addEventListener('DOMContentLoaded', () => {

    // Get all the elements we need to control
    const splashScreen = document.getElementById('splash-screen');
    const mainWebsite = document.getElementById('main-website');
    const heartBurst = document.querySelector('.heart-burst');
    const muteToggle = document.getElementById('mute-toggle');
    const bgMusic = document.getElementById('bg-music');

    // --- 1. Handshake Animation Logic ---
    // (This logic remains exactly the same as before)

    const timer1 = setTimeout(() => {
        splashScreen.classList.add('animate');
    }, 500); 

    const timer2 = setTimeout(() => {
        heartBurst.classList.add('animate');
    }, 2500); 

    const timer3 = setTimeout(() => {
        splashScreen.style.opacity = 0;
    }, 3300); 

    const timer4 = setTimeout(() => {
        splashScreen.style.display = 'none';
        
        mainWebsite.classList.remove('hidden');
        mainWebsite.classList.add('visible');
    }, 4100);


    // --- 2. Background Music Logic ---
    // (This logic remains exactly the same as before)
    
    let isMuted = true;
    bgMusic.volume = 0.3; 

    muteToggle.addEventListener('click', () => {
        if (isMuted) {
            bgMusic.play().catch(e => console.log("Autoplay failed:", e));
            muteToggle.textContent = '🔊';
            isMuted = false;
        } else {
            bgMusic.pause();
            muteToggle.textContent = '🔇';
            isMuted = true;
        }
    });

    // --- 3. RSVP Form Handling (Example) ---
    // (This logic remains exactly the same as before)
    
    const rsvpForm = document.querySelector('.rsvp-form');
    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const name = document.getElementById('name').value;
        alert(`धन्यवाद, ${name}! तुमची नोंदणी झाली आहे.`);
        rsvpForm.reset();
    });


    // --- 4. ADDED: Hamburger Menu Logic ---
    
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // Toggle the 'active' class when the hamburger is clicked
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Optional: Close the menu when a link is clicked
    // This is good for user experience on mobile
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

});