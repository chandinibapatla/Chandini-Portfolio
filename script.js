// =============================
// PROJECT DETAILS
// =============================

const projects = {

    attendance: {

        category: "MINI PROJECT",

        title: "Smart Attendance System",

        description:
            "A smart attendance system using an IR sensor to detect attendance and help automate the attendance recording process.",

        tags: [
            "IR Sensor",
            "Automation",
            "Attendance"
        ]

    },


    vehicle: {

        category: "DEEP LEARNING PROJECT",

        title: "Vehicle Damage Assessment",

        description:
            "A deep learning based system for assessing vehicle damage from images using computer vision techniques.",

        tags: [
            "Python",
            "Deep Learning",
            "Computer Vision"
        ]

    }

};


// =============================
// OPEN PROJECT POPUP
// =============================

function showProject(projectName) {

    const project = projects[projectName];

    if (!project) {
        return;
    }


    document.getElementById("modalCategory").textContent =
        project.category;


    document.getElementById("modalTitle").textContent =
        project.title;


    document.getElementById("modalDescription").textContent =
        project.description;


    const tagContainer =
        document.getElementById("modalTags");


    tagContainer.innerHTML = "";


    project.tags.forEach(tag => {

        const span =
            document.createElement("span");


        span.textContent = tag;


        tagContainer.appendChild(span);

    });


    document
        .getElementById("projectModal")
        .classList.add("active");

}


// =============================
// CLOSE PROJECT POPUP
// =============================

function closeProject() {

    document
        .getElementById("projectModal")
        .classList.remove("active");

}


// =============================
// CLOSE POPUP WHEN CLICKING
// OUTSIDE THE BOX
// =============================

document
    .getElementById("projectModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeProject();

        }

    });


// =============================
// ESC KEY CLOSES POPUP
// =============================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeProject();

    }

});


// =============================
// CONTACT FORM
// =============================

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        alert(
            "Thank you for your message! I will get back to you soon."
        );


        this.reset();

    });