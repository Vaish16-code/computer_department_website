// components.js

const navbarHTML = `
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <div class="nav-brand">
                <img src="images/college-logo.png" alt="CSE Logo" class="nav-logo">
                <span class="nav-title">Comps DBIT</span>
            </div>
            
            <button class="mobile-menu-btn" id="mobile-menu-btn">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
            
            <ul class="nav-menu" id="nav-menu">
                <li><a href="index.html" class="nav-link">Home</a></li>
                <li><a href="about.html" class="nav-link">About</a></li>
                <li class="dropdown">
                    <a href="academics.html" class="nav-link">Academics</a>
                    <ul class="dropdown-menu">
                        <li><a href="academics.html#se">Second Year (SE)</a></li>
                        <li><a href="academics.html#te">Third Year (TE)</a></li>
                        <li><a href="academics.html#be">Final Year (BE)</a></li>
                    </ul>
                </li>
                <li><a href="faculty.html" class="nav-link">Faculty</a></li>
                <li><a href="students.html" class="nav-link">Students</a></li>
                <li><a href="research.html" class="nav-link">Research</a></li>
                <li><a href="events.html" class="nav-link">Events</a></li>
                <li><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>
`;

const footerHTML = `
    <footer class="site-footer" id="contact">
        <div class="footer-top-line"></div>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col brand-col">
                    <div class="brand-wrapper">
                        <a href="index.html" class="footer-logo-link">
                            <img src="images/college-logo.png" alt="DBIT Logo" class="footer-logo-img">
                            <div class="logo-text-group">
                                <span class="logo-main">DBIT | COMPS</span>
                                <span class="logo-sub">Excellence in Tech</span>
                            </div>
                        </a>
                        <p class="footer-desc">
                            Don Bosco Institute of Technology offers high-quality education in engineering. Empowering young minds with innovation, ethics, and technical expertise.
                        </p>
                        <div class="accreditation-badges">
                            <a href="http://naac.gov.in/index.php/en/" target="_blank" class="badge">
                                <i class="fas fa-certificate"></i> NAAC 'A'
                            </a>
                            <a href="https://www.aicte.gov.in/" target="_blank" class="badge">
                                <i class="fas fa-star"></i> AICTE
                            </a>
                        </div>
                    </div>
                </div>

                <div class="footer-col links-col">
                    <h3 class="footer-heading">Department</h3>
                    <ul class="footer-links">
                        <li><a href="about.html"><i class="fas fa-arrow-right"></i> About Us</a></li>
                        <li><a href="academics.html"><i class="fas fa-arrow-right"></i> Academics</a></li>
                        <li><a href="faculty.html"><i class="fas fa-arrow-right"></i> Faculty</a></li>
                        <li><a href="research.html"><i class="fas fa-arrow-right"></i> Research</a></li>
                        <li><a href="students.html"><i class="fas fa-arrow-right"></i> Student Council</a></li>
                    </ul>
                </div>

                <div class="footer-col links-col">
                    <h3 class="footer-heading">Quick Access</h3>
                    <ul class="footer-links">
                        <li><a href="admissions.html"><i class="fas fa-arrow-right"></i> Admissions</a></li>
                        <li><a href="documents/academic-calendars/even-semester-calendar.pdf" target="_blank"><i class="fas fa-calendar-alt"></i> Academic Calendar</a></li>
                        <li><a href="https://maps.google.com/?q=Don+Bosco+Institute+of+Technology+Kurla" target="_blank"><i class="fas fa-map-marked-alt"></i> Campus Map</a></li>
                        <li><a href="https://comps.dbit.in/" target="_blank"><i class="fas fa-external-link-alt"></i> Old Website</a></li>
                    </ul>
                </div>

                <div class="footer-col contact-col">
                    <h3 class="footer-heading">Contact Us</h3>
                    <div class="contact-card">
                        <div class="contact-row">
                            <div class="icon-box"><i class="fas fa-map-marker-alt"></i></div>
                            <span>Premier Automobiles Road,<br>Kurla (W), Mumbai – 400070</span>
                        </div>
                        <div class="contact-row">
                            <div class="icon-box"><i class="fas fa-phone-alt"></i></div>
                            <span>+91 22 2504 2000</span>
                        </div>
                        <div class="contact-row">
                            <div class="icon-box"><i class="fas fa-envelope"></i></div>
                            <span>info@dbit.in</span>
                        </div>
                    </div>
                    <div class="social-icons">
                        <a href="https://www.linkedin.com/school/don-bosco-institute-of-technology-mumbai/" class="social-btn" aria-label="LinkedIn" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/dbitcompdept/" class="social-btn" aria-label="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.youtube.com/@DBITCOMP" class="social-btn" aria-label="YouTube" target="_blank"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bar">
            <div class="container footer-bar-content">
                <p>© 2025 Don Bosco Institute of Technology. All Rights Reserved.</p>
                <div class="legal-links">
                    <a href="#">Privacy</a><span class="separator">|</span><a href="#">Terms</a><span class="separator">|</span><a href="#">Accessibility</a>
                </div>
            </div>
        </div>
    </footer>
`;

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject Components
    const navPlaceholder = document.getElementById('navbar-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (navPlaceholder) navPlaceholder.innerHTML = navbarHTML;
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

    // 2. Set Active Link Underline
    let currentPath = window.location.pathname.split("/").pop();
    if (currentPath === "" || currentPath === "index.html") {
        currentPath = "index.html";
    }

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // 3. Mobile Menu Toggle Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});