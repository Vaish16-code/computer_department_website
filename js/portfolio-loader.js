// portfolio-loader.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the ID from the URL (?id=seema-nehete)
    const urlParams = new URLSearchParams(window.location.search);
    const facultyId = urlParams.get('id');

    // 2. Find the data
    const data = facultyDetails[facultyId];

    if (data) {
        // 3. Inject Basic Info
        document.getElementById('prof-name').textContent = data.name;
        document.getElementById('prof-designation').textContent = data.designation;
        document.getElementById('prof-email').textContent = data.email;
        document.getElementById('prof-about').textContent = data.about;


        // 1. Education Loader
        const eduContainer = document.getElementById('education-list');
        data.education.forEach(edu => {
            eduContainer.innerHTML += `
                <div class="timeline-item portfolio-item">
                    <div class="timeline-marker"><span class="year">${edu.year}</span></div>
                    <div class="timeline-card">
                        <h3>${edu.degree}</h3>
                        <p>${edu.institute}</p>
                    </div>
                </div>`;
        });

        // 2. Experience Loader
        const expContainer = document.getElementById('experience-list');
        data.experience.forEach(exp => {
            expContainer.innerHTML += `
                <div class="timeline-item portfolio-item">
                    <div class="timeline-marker"><span class="year">${exp.duration.split(' ')[0]}</span></div>
                    <div class="timeline-card">
                        <h3>${exp.role}</h3>
                        <p><strong>${exp.organization}</strong></p>
                        <p>${exp.duration}</p>
                    </div>
                </div>`;
        });
        

        // 3. Highlights Loader
        const highlightsContainer = document.getElementById('highlights-grid');
        data.professionalHighlights.forEach(section => {
            highlightsContainer.innerHTML += `
                <div class="info-card">
                    <h3>${section.category}</h3>
                    <ul>
                        ${section.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>`;
        });
        

    } else {
        // Fallback if ID is wrong
        document.querySelector('.portfolio-details').innerHTML = "<h2>Faculty profile not found.</h2>";
    }
});