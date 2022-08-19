const skills = [
    {
        name: "HTML",
        icon_url : "https://img.icons8.com/color/50/000000/html-5--v1.png",
        category : ["all", "frontend"]
    },
    {
        name: "CSS",
        icon_url : "https://img.icons8.com/color/50/000000/css3.png",
        category : ["all", "frontend"]
    },
    {
        name: "JavaScript",
        icon_url : "https://img.icons8.com/color/50/000000/javascript--v2.png",
        category : ["all", "frontend"]
    },
    {
        name: "BootStrap",
        icon_url : "images/bootstrap.png",
        category : ["all", "frontend"]
    },
    {
        name: "Postman",
        icon_url : "images/postman.png",
        category : ["all", "backend"]
    },
    {
        name: "Java",
        icon_url : "images/java.png",
        category : ["all", "backend"]
    },
    {
        name: "MySQL",
        icon_url : "images/mysql.png",
        category : ["all", "backend"]
    },
    {
        name: "Maven",
        icon_url : "images/maven.png",
        category : ["all", "backend"]
    },
    {
        name: "AWS",
        icon_url : "images/aws.png",
        category : ["all", "backend"]
    },
    {
        name: "SpringBoot",
        icon_url : "data:image/png;base64,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",
        category : ["all", "backend"]
    },
    {
        name: "Hibernate",
        icon_url : "https://hibernate.org/images/hibernate_icon_whitebkg.svg",
        category : ["all", "backend"]
    },
]

let myTechnicalSkills = document.getElementById("myTechnicalSkills");
let all_filter_btn = document.querySelector(".all_filter_btn")
let frontend_filter_btn = document.querySelector(".frontend_filter_btn");
let backend_filter_btn = document.querySelector(".backend_filter_btn");
all_filter_btn.classList.add("active_tech_skills")
all_filter_btn.addEventListener("click", () => {
    filterSkills("all");
    all_filter_btn.classList.add("active_tech_skills")
    frontend_filter_btn.classList.remove("active_tech_skills")
    backend_filter_btn.classList.remove("active_tech_skills")

})

frontend_filter_btn.addEventListener("click", () => {
    filterSkills("frontend")
    all_filter_btn.classList.remove("active_tech_skills")
    frontend_filter_btn.classList.add("active_tech_skills")
    backend_filter_btn.classList.remove("active_tech_skills")
})
backend_filter_btn.addEventListener("click", () => {
    filterSkills("backend");
    all_filter_btn.classList.remove("active_tech_skills")
    frontend_filter_btn.classList.remove("active_tech_skills")
    backend_filter_btn.classList.add("active_tech_skills")
})

function displaySkills(skills) {
    myTechnicalSkills.innerHTML = null;
    skills.forEach((skill) => {
        let itemContainer = document.createElement("div");
        itemContainer.setAttribute("class", "service-item padd-15");
        itemContainer.innerHTML = `<div class="service-item-inner">
        <div class="">
          <img src=${skill.icon_url} width="48px" height="48px"/>
        </div>
        <h4>${skill.name}</h4>
      </div>`

      myTechnicalSkills.append(itemContainer)
    })
}

function filterSkills(basis) {
    let filtered = skills.filter((el) => {
        return el.category.includes(basis)
    })
    displaySkills(filtered)
}


displaySkills(skills)