
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const facultyId = params.get('id');

  const hero = document.querySelector('.page-hero');
  const details = document.querySelector('.portfolio-details');

  if (!facultyId || !facultyDetails[facultyId]) {
  if (hero) hero.style.display = 'none';

  if (details) {
    details.style.display = 'flex';
    details.style.minHeight = '100vh';
    details.style.alignItems = 'center';
    details.style.justifyContent = 'center';
    details.style.textAlign = 'center';
    details.style.padding = '2rem';

    details.innerHTML = `
      <h2 style="font-size:2rem; font-weight:600;">
        Faculty profile not found.
      </h2>
    `;
  }
  return;
}

  const data = facultyDetails[facultyId];

  document.getElementById('prof-name').textContent = data.name;
  document.getElementById('prof-designation').textContent = data.designation;
  document.getElementById('prof-email').textContent = data.email;
  document.getElementById('prof-exp').textContent = data.exp;
  document.getElementById('prof-about').textContent = data.about;


  const profexpContainer=document.getElementById('prof-exp');
  profexpContainer.innerHTML +='<span>+ Years</span>'

  const stat = document.getElementById('prof-stat');
  const label = document.getElementById('prof-label');
  const link = document.getElementById('prof-link');
    if (data.linkedin) {
    label.textContent = "LinkedIn";
    link.textContent = "View Profile";
    link.style.cursor = 'pointer';
    link.addEventListener('click', () => {
        window.open(data.linkedin, '_blank');
    });
    }
    else if(data.googleScholar){
    label.textContent = "Google Scholar";
    link.textContent = "View Profile";
    link.style.cursor = 'pointer';
    link.addEventListener('click', () => {
        window.open(data.googleScholar, '_blank');
    });
    }
    else if(data.mobileNumber){
    label.textContent = "Contact";
    link.textContent = data.mobileNumber;
    link.style.pointerEvents = 'none';
    }
    else{
      stat.style.display='none';
    }

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
});
