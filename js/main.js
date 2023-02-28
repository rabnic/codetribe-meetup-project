let data = [
  {
    name: "mLab CondeTribe",
    logo: "mlab-codetribe-logo.png",
    cost: "Free",
    duration: "6",
    courses: ["Mobile Dev", "Web Dev"],
    languages: [],
    partners: ["MTN", "CSIR", "BBD"],
    mode: "Onsite",
    campuses: [],
    isStipendOffered: true,
    isThereInternship: true,
  },
  {
    name: "CapaCiti",
    logo: "capaciti-logo.png",
    cost: "Free",
    duration: "6",
    courses: ["Mobile Dev", "Web Dev"],
    languages: [],
    partners: ["MTN", "CSIR", "BBD"],
    mode: "Onsite",
    campuses: [],
    isStipendOffered: true,
    isThereInternship: true,
  },
  {
    name: "Code College",
    logo: "code-college-logo.png",
    cost: "Free",
    duration: "6",
    courses: ["Mobile Dev", "Web Dev"],
    languages: [],
    partners: ["MTN", "CSIR", "BBD"],
    mode: "Onsite",
    campuses: [],
    isStipendOffered: true,
    isThereInternship: true,
  },
  {
    name: "IT Academy",
    logo: "it-academy-logo.png",
    cost: "Free",
    duration: "6",
    courses: ["Mobile Dev", "Web Dev"],
    languages: [],
    partners: ["MTN", "CSIR", "BBD"],
    mode: "Onsite",
    campuses: [],
    isStipendOffered: true,
    isThereInternship: true,
  },
  {
    name: "Project Codex",
    logo: "project-codex-logo.png",
    cost: "Free",
    duration: "6",
    courses: ["Mobile Dev", "Web Dev"],
    languages: [],
    partners: ["MTN", "CSIR", "BBD"],
    mode: "Onsite",
    campuses: [],
    isStipendOffered: true,
    isThereInternship: true,
  },
  {
    name: "Tshimologong",
    logo: "tshimologong-logo.png",
    cost: "Free",
    duration: "6",
    courses: ["Mobile Dev", "Web Dev"],
    languages: [],
    partners: ["MTN", "CSIR", "BBD"],
    mode: "Onsite",
    campuses: [],
    isStipendOffered: true,
    isThereInternship: true,
  },
  {
    name: "Umuzi",
    logo: "umuzi-logo.jpeg",
    cost: "Free",
    duration: "6",
    courses: ["Mobile Dev", "Web Dev"],
    languages: [],
    partners: ["MTN", "CSIR", "BBD"],
    mode: "Onsite",
    campuses: [],
    isStipendOffered: true,
    isThereInternship: true,
  },
  {
    name: "WeThinkCode",
    logo: "wethinkcode_-logo.png",
    cost: "Free",
    duration: "6",
    courses: ["Mobile Dev", "Web Dev"],
    languages: [],
    partners: ["MTN", "CSIR", "BBD"],
    mode: "Onsite",
    campuses: [],
    isStipendOffered: true,
    isThereInternship: true,
  },
  {
    name: "mLab CondeTribe",
    logo: "mlab-codetribe-logo.png",
    cost: "Free",
    duration: "6",
    courses: ["Mobile Dev", "Web Dev"],
    languages: [],
    partners: ["MTN", "CSIR", "BBD"],
    mode: "Onsite",
    campuses: [],
    isStipendOffered: true,
    isThereInternship: true,
  },
];

const cardsContainer = document.getElementById("cards");
const buttons = document.querySelectorAll(".filter-button.norm");
const btnAll = document.querySelector("#btnAll");

buttons.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    toggleActiveClass(elem);
  });
});

btnAll.addEventListener("click", (e) => {
  toggleActiveClassForAll();
});

function toggleActiveClass(btn) {
  if (btn.classList.contains("active")) {
    btn.classList.remove("active");
  } else {
    btn.classList.add("active");
  }
}

function toggleActiveClassForAll() {
  buttons.forEach((btn) => {
    if (btnAll.id != btn.id) {
      btn.classList.remove("active");
    }
  });
}

function renderData() {
  data.forEach((bootcamp) => {
    cardsContainer.innerHTML += `
<div class="card">
			<div class="card-head">
				<img src="assets/logos/${bootcamp.logo}" width="50" height="50" alt="">
				<h3 class="title">${bootcamp.name}</h3>
			</div>
			<div class="card-body">
				<div class="row">
					<p>Courses</p>
					:<p>${bootcamp.courses.toString()}</p>
				</div>
				<div class="row">
					<p>Cost</p>
					<p>${bootcamp.cost}</p>
				</div>
				<div class="row">
					<p>Duration</p>
					<p>${bootcamp.duration} months</p>
				</div>
				<div class="row">
					<p>Industry partners</p>
					<p>${bootcamp.partners.toLocaleString()}</p>
				</div>
			</div>
			<div class="card-footer">
				<button>More Info</button>
			</div>
		</div>
`;
  });
}
renderData();
