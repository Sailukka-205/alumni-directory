document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is logged in
    if (localStorage.getItem("isLoggedIn") !== "true" && window.location.pathname !== "/login.html") {
        window.location.href = "login.html";
    }

    // Display Famous Alumni
    const famousAlumniContainer = document.getElementById("famousAlumniContainer");
    if (famousAlumniContainer) {
        alumniData.forEach(alumni => {
            const alumniCard = document.createElement("div");
            alumniCard.classList.add("alumni-card");
            alumniCard.innerHTML = `
                <img src="${alumni.image}" alt="${alumni.name}">
                <h3>${alumni.name}</h3>
                <p>${alumni.profession}</p>
                <a href="${alumni.linkedin}" target="_blank">LinkedIn</a>
            `;
            famousAlumniContainer.appendChild(alumniCard);
        });
    }

    // Display Alumni by Year
    const yearContainer = document.getElementById("yearContainer");
    const alumniContainer = document.getElementById("alumniContainer");

    if (yearContainer && alumniContainer) {
        let years = [...new Set(alumniData.map(alumni => alumni.year))];

        years.forEach(year => {
            const yearButton = document.createElement("button");
            yearButton.textContent = year;
            yearButton.addEventListener("click", () => showAlumni(year));
            yearContainer.appendChild(yearButton);
        });

        function showAlumni(year) {
            alumniContainer.innerHTML = "";
            let filteredAlumni = alumniData.filter(alumni => alumni.year === year);
            
            filteredAlumni.forEach(alumni => {
                const alumniCard = document.createElement("div");
                alumniCard.classList.add("alumni-card");
                alumniCard.innerHTML = `
                    <img src="${alumni.image}" alt="${alumni.name}">
                    <h3>${alumni.name}</h3>
                    <p>${alumni.profession}</p>
                    <a href="${alumni.linkedin}" target="_blank">LinkedIn</a>
                `;
                alumniContainer.appendChild(alumniCard);
            });
        }
    }
});

// Login Function
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Simple hardcoded credentials
    const validUser = "student";
    const validPass = "alumni123";

    if (username === validUser && password === validPass) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html"; // Redirect to home
    } else {
        document.getElementById("error-msg").innerText = "Invalid username or password!";
    }
}

// Logout Function
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}
const alumniData = {
    "data-science": ["Alice Smith - Data Scientist", "Bob Johnson - AI Researcher"],
    "engineering": ["Charlie Brown - Mechanical Engineer", "David Lee - Civil Engineer"],
    "business": ["Eve Adams - Business Consultant", "Frank Miller - Entrepreneur"]
};

function showAlumni() {
    let specialization = document.getElementById("specialization").value;
    let alumniList = document.getElementById("alumni-list");
    
    alumniList.innerHTML = "";
    
    if (specialization && alumniData[specialization]) {
        alumniData[specialization].forEach(name => {
            let div = document.createElement("div");
            div.innerText = name;
            div.className = "alumni-card";
            alumniList.appendChild(div);
        });
    }
}

