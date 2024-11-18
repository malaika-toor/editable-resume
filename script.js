// TypeScript code to handle saving and loading the editable fields
// Function to save resume data into localStorage
function saveResume() {
    // Collect data from the editable fields
    var resumeData = {
        name: document.getElementById("name").innerText,
        email: document.getElementById("email").innerText,
        phone: document.getElementById("phone").innerText,
        jobTitle: document.getElementById("job-title").innerText,
        company: document.getElementById("company").innerText,
        years: document.getElementById("years").innerText,
        degree: document.getElementById("degree").innerText,
        university: document.getElementById("university").innerText,
        gradYear: document.getElementById("grad-year").innerText
    };
    // Save data to localStorage
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    console.log("Resume saved:", resumeData);
    alert("Resume saved!");
}
// Function to load saved resume data
function loadResume() {
    var savedData = localStorage.getItem("resumeData");
    if (savedData) {
        var resumeData = JSON.parse(savedData);
        document.getElementById("name").innerText = resumeData.name;
        document.getElementById("email").innerText = resumeData.email;
        document.getElementById("phone").innerText = resumeData.phone;
        document.getElementById("job-title").innerText = resumeData.jobTitle;
        document.getElementById("company").innerText = resumeData.company;
        document.getElementById("years").innerText = resumeData.years;
        document.getElementById("degree").innerText = resumeData.degree;
        document.getElementById("university").innerText = resumeData.university;
        document.getElementById("grad-year").innerText = resumeData.gradYear;
    }
}
// Load resume data when the page loads
window.onload = loadResume;
