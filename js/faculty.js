/* ---------- Faculty Card Template ---------- */
function createFacultyCard(data) {
  // Logic to handle different file types (PDF/DOCX)
  let portfolioUrl = data.portfolio;

  if (data.portfolio && data.portfolio !== "xyz") {
    const isWordDoc = data.portfolio.toLowerCase().endsWith('.docx') || 
                      data.portfolio.toLowerCase().endsWith('.doc');

    if (isWordDoc) {
      // Use Google Docs Viewer to open .docx in a new tab instead of downloading
      portfolioUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + '/' + data.portfolio)}&embedded=true`;
    }
  } else {
    portfolioUrl = "#";
  }

  return `
    <div class="faculty-card">
      <img src="${data.image}" alt="${data.name}" class="faculty-img">

      <div class="faculty-body">
        <h3>${data.name}</h3>
        <p class="faculty-qualification">${data.qualification}</p>
        <p><strong>Specialization:</strong> ${data.specialization}</p>
        <p><strong>Experience:</strong> ${data.experience}</p>
        <p class="faculty-contact">${data.email}</p>
        
        ${data.portfolio !== "xyz" ? `
          <a href="${portfolioUrl}" target="_blank" rel="noopener noreferrer" class="portfolio-link">
              <i class="fa-solid fa-user-tie"></i> Know More
          </a>
        ` : `
          <span class="portfolio-link disabled">
              <i class="fa-solid fa-user-tie"></i> Resume Pending
          </span>
        `}
      </div>
    </div>
  `;
}

/* ---------- Faculty Data ---------- */

const hod = {
  name: "Ms. Dipti Jadhav",
  qualification: "Pursuing PhD",
  specialization: "Human Machine Interaction",
  experience: "15+ years",
  email: "dipti@dbit.in",
  portfolio: "https://compsweb.github.io/Ms.Dipti-Jadhav/Template/",
  image: "images/hod-pic.png"
};

const professors = [
  {
    name: "Dr. Amiya Kumar Tripathy",
    qualification: "PhD",
    specialization: "Machine Vision, Data Science, ICT in Agriculture",
    experience: "10+ years",
    email: "amiya@dbit.in",
    portfolio: "https://compsweb.github.io/Dr.-Amiya-Kumar-Tripathy/",
    image: "images/faculty/amiya-pic.png"
  }
];

const associateProfessors = [
  {
    name: "Dr. Phiroj Shaikh",
    qualification: "PhD",
    specialization: "Web Data Mining",
    experience: "19+ years",
    email: "phiroj@dbit.in",
    portfolio: "https://compsweb.github.io/Dr.-Phiroj-Shaikh/",
    image: "images/faculty/phiroj-pic.png"
  }
];

const assistantProfessors = [
  {
    name: "Dr. Seema Nehete",
    qualification: "Ph.D Computer Engineering",
    specialization: "Machine learning and Big Data Analytics",
    experience: "21+ years",
    email: "seema@dbit.in",
    portfolio: "https://compsweb.github.io/Ms.-Seema-Nehete/",
    image: "images/faculty/seema-pic.png"
  },
  {
    name: "Mr. Imran Ali Mirza",
    qualification: "M.E in Computer Engineering",
    specialization: "Analytics",
    experience: "20+ years",
    email: "mirza@dbit.in",
    portfolio: "https://compsweb.github.io/Imran/",
    image: "images/faculty/imran-pic.png"
  },
  {
    name: "Ms. Sejal Chopra",
    qualification: "M.E. in Electronics and Telecommunication",
    specialization: "Communications & Signal Processing",
    experience: "15+ years",
    email: "sejal@dbit.in",
    portfolio: "https://compsweb.github.io/Ms.Sejal-Chopra/",
    image: "images/faculty/sejal-pic.png"
  },
  {
    name: "Ms. Shainila Mulla",
    qualification: "Masters in Computer Engineering",
    specialization: "Operating System",
    experience: "14+ years",
    email: "shainila@dbit.in",
    portfolio: "https://compsweb.github.io/Ms.-Shainila-Mulla/Template/",
    image: "images/faculty/shainila-pic.png"
  },
  {
    name: "Ms. Mayura Gavhane",
    qualification: "M.E Computers",
    specialization: "Programming, Security & Blockchain",
    experience: "14+ years",
    email: "mayura@dbit.in",
    portfolio: "https://compsweb.github.io/Mayura-Gavhane/",
    image: "images/faculty/mayura-pic.png"
  },
  {
    name: "Ms. Hiteshri Shirtavde",
    qualification: "M.Tech in Computer Science",
    specialization: "Image processing",
    experience: "14+ years",
    email: "hiteshri@dbit.in",
    portfolio: "https://compsweb.github.io/Ms.-Hiteshri-Shirtavde/hiteshri/index.html",
    image: "images/faculty/hiteshri-pic.png"
  },
  {
    name: "Ms. Deepa Goel",
    qualification: "M.Tech in Computer Science",
    specialization: "DBMS and Operating System",
    experience: "14+ years",
    email: "deepa@dbit.in",
    portfolio: "https://compsweb.github.io/Ms.-Deepa-Goel/deepa/index.html",
    image: "images/faculty/deepa-pic.png"
  },
  {
    name: "Ms. Sana Shaikh",
    qualification: "M.E. in Computer Engineering",
    specialization: "Data Analysis",
    experience: "13+ years",
    email: "sana@dbit.in",
    portfolio: "https://compsweb.github.io/Ms-Sana-Shaikh/",
    image: "images/faculty/sana-pic.png"
  },
  {
    name: "Ms. Priti Andhale",
    qualification: "M.E in Computer Engineering",
    specialization: "Software & Web Technologies, Core Systems & Security",
    experience: "12+ years",
    email: "priti@dbit.in",
    portfolio: "documents/faculty-resumes/priti-resume.pdf",
    image: "images/faculty/priti-pic.png"
  },
  {
    name: "Ms. Kalpita Wagaskar",
    qualification: "M.Tech. in Computer Engineering",
    specialization: "Artificial Intelligence & Grid Computing",
    experience: "11+ years",
    email: "kalpita@dbit.in",
    portfolio: "https://compsweb.github.io/Ms.-Kalpita-Wagaskar/Template/",
    image: "images/faculty/kalpita-pic.png"
  },
  {
    name: "Ms. Pooja Bansode",
    qualification: "Masters in Computer Engineering",
    specialization: "Data Analytics",
    experience: "10+ years",
    email: "pooja@dbit.in",
    portfolio: "https://compsweb.github.io/Ms.-Pooja-Bansode/",
    image: "images/faculty/pooja-pic.png"
  },
  {
    name: "Ms. Kirti Bhadange",
    qualification: "PhD Computer Engineering",
    specialization: "Software Engineering, DataBase Mangement System",
    experience: "8+ years",
    email: "kirti@dbit.in",
    portfolio: "documents/faculty-resumes/kirti-resume.pdf",
    image: "images/faculty/kirti-pic.png"
  },
  {
    name: "Ms. Himani Joshi",
    qualification: "Master of Technology",
    specialization: "Deep Learning, Machine Learning, Soft Computing",
    experience: "7+ years",
    email: "himani@dbit.in",
    portfolio: "https://compsweb.github.io/Ms.-Himani-Josh/",
    image: "images/faculty/himani-pic.png"
  },
  {
    name: "Ms. Jayshree R. Sanap",
    qualification: "Pursuing PhD",
    specialization: "Image Processing, Machine Learning, Deep learning",
    experience: "5+ years",
    email: "jayshree@dbit.in",
    portfolio: "documents/faculty-resumes/jayshree-resume.pdf",
    image: "images/faculty/jayshree-pic.png"
  },
  {
    name: "Ms. Varsha Kulkarni",
    qualification: "M.E Computer Engineering",
    specialization: "Data analysis",
    experience: "2+ years",
    email: "varsha@dbit.in",
    portfolio: "https://compsweb.github.io/Ms.-Varsha-Kulkarni/",
    image: "images/faculty/varsha-pic.png"
  }
];

/* ---------- Render Faculty Cards ---------- */

// Render HOD
const hodContainer = document.getElementById("hod-card");
if (hodContainer) hodContainer.innerHTML = createFacultyCard(hod);

// Render Professors
const profContainer = document.getElementById("professors");
if (profContainer) {
  professors.forEach(faculty => profContainer.insertAdjacentHTML("beforeend", createFacultyCard(faculty)));
}

// Render Associate Professors
const associateContainer = document.getElementById("associate-professors");
if (associateContainer) {
  associateProfessors.forEach(faculty => associateContainer.insertAdjacentHTML("beforeend", createFacultyCard(faculty)));
}

// Render Assistant Professors
const assistantContainer = document.getElementById("assistant-professors");
if (assistantContainer) {
  assistantProfessors.forEach(faculty => assistantContainer.insertAdjacentHTML("beforeend", createFacultyCard(faculty)));
}


/* ---------- ACHIEVEMENTS & RESEARCH AREAS ---------- */

/* ---------- ACHIEVEMENTS & RESEARCH AREAS ---------- */

function achievementCard(data) {
  return `
    <div class="info-card">
      <h3>${data.title}</h3>
      <p>${data.description}</p>
      <ul>
        ${data.items.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;
}

function researchCard(data) {
  return `
    <div class="info-card">
      <h3>${data.area}</h3>
      <p><strong>Faculty:</strong> ${data.faculty}</p>
    </div>
  `;
}

/* ---------- ACHIEVEMENTS DATA ---------- */

const achievements = [
  {
    title: "Research Publications & Funded Projects",
    description:
      "Faculty members actively publish research papers in reputed international journals and conferences and receive research funding from recognized bodies.",
    items: [
      "Gesture Aided Speech for Deaf and Mute – Dipti Jadhav, Amiya Kumar Tripathy (I2CT 2018, IEEE)",
      "Pneumonia Detection in X-rays Using OpenCV and Deep Learning – Shainila Mulla et al. (ICCICT 2021, IEEE)",
      "Minor Research Grant (University of Mumbai) – Dr. Seema Prashant Nehete (2019–20)"
    ]
  },
  {
    title: "Academic Leadership & Curriculum Development",
    description:
      "Faculty members contribute to academic leadership, curriculum design, and institutional development.",
    items: [
      "Dr. Seema Prashant Nehete – Member, Syllabus Setting Committee under NEP 2024 (Semester III)",
      "Dr. Amiya Kumar Tripathy – Director, Center for GeoAI & Machine Learning, DBIT Mumbai",
      "Dr. Phiroj Shaikh – Session Chair at National-Level Technical Symposium (INNOVATION SPARK-10)"
    ]
  },
  {
    title: "Conferences, Workshops & Professional Activities",
    description:
      "Faculty regularly organize, participate in, and present research at national and international conferences and workshops.",
    items: [
      "Research paper presentation at International Conference on Web Sciences (ICWS-2009)",
      "Organization and participation in AICTE/ISTE approved workshops on Data Mining, Soft Computing, Linux, and Computer Networking",
      "Active involvement in faculty development programs and student-centric technical initiatives"
    ]
  }
];

/* ---------- RESEARCH AREAS DATA ---------- */

const researchAreas = [
  {
    area: "Artificial Intelligence & Deep Learning",
    faculty: "Dr. Seema Nehete, Ms. Himani Joshi, Ms. Jayshree Sanap"
  },
  {
    area: "Data Science, Analytics & GeoAI",
    faculty: "Dr. Amiya Kumar Tripathy, Mr. Imran Ali Mirza"
  },
  {
    area: "Image Processing & Computer Vision",
    faculty: "Ms. Hiteshri Shirtavde, Ms. Shainila Mulla"
  }
];

/* ---------- RENDER ACHIEVEMENTS & RESEARCH ---------- */

const achievementsContainer = document.getElementById("achievements");
if (achievementsContainer) {
  achievements.forEach(item =>
    achievementsContainer.insertAdjacentHTML("beforeend", achievementCard(item))
  );
}

const researchContainer = document.getElementById("research-areas");
if (researchContainer) {
  researchAreas.forEach(item =>
    researchContainer.insertAdjacentHTML("beforeend", researchCard(item))
  );
}
