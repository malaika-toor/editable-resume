// TypeScript code to handle saving and loading the editable fields

// Define an interface for resume data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    jobTitle: string;
    company: string;
    years: string;
    degree: string;
    university: string;
    gradYear: string;
}

// Function to save resume data into localStorage
function saveResume(): void {
    // Collect data from the editable fields
    const resumeData: ResumeData = {
        name: (document.getElementById("name") as HTMLElement).innerText,
        email: (document.getElementById("email") as HTMLElement).innerText,
        phone: (document.getElementById("phone") as HTMLElement).innerText,
        jobTitle: (document.getElementById("job-title") as HTMLElement).innerText,
        company: (document.getElementById("company") as HTMLElement).innerText,
        years: (document.getElementById("years") as HTMLElement).innerText,
        degree: (document.getElementById("degree") as HTMLElement).innerText,
        university: (document.getElementById("university") as HTMLElement).innerText,
        gradYear: (document.getElementById("grad-year") as HTMLElement).innerText
    };

    // Save data to localStorage
    localStorage.setItem("resumeData", JSON.stringify(resumeData));

    console.log("Resume saved:", resumeData);
    alert("Resume saved!");
}

// Function to load saved resume data
function loadResume(): void {
    const savedData = localStorage.getItem("resumeData");
    if (savedData) {
        const resumeData: ResumeData = JSON.parse(savedData);
        (document.getElementById("name") as HTMLElement).innerText = resumeData.name;
        (document.getElementById("email") as HTMLElement).innerText = resumeData.email;
        (document.getElementById("phone") as HTMLElement).innerText = resumeData.phone;
        (document.getElementById("job-title") as HTMLElement).innerText = resumeData.jobTitle;
        (document.getElementById("company") as HTMLElement).innerText = resumeData.company;
        (document.getElementById("years") as HTMLElement).innerText = resumeData.years;
        (document.getElementById("degree") as HTMLElement).innerText = resumeData.degree;
        (document.getElementById("university") as HTMLElement).innerText = resumeData.university;
        (document.getElementById("grad-year") as HTMLElement).innerText = resumeData.gradYear;
    }
}

// Load resume data when the page loads
window.onload = loadResume;
