let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");
let tabCount = document.getElementById("tabCount");

let interviewTotal = 0;
let rejectedTotal = 0;
let totalJobs = 8;

let cards = document.getElementsByClassName("job-card");

let interviewButtons = document.getElementsByClassName("interview-btn");

// interview button functionality
for (let i = 0; i < interviewButtons.length; i++) {
  interviewButtons[i].addEventListener("click", function () {
    let card = this.closest(".job-card");
    let badge = card.querySelector(".status-badge");
    let oldStatus = badge.innerText;

    if (oldStatus === "REJECTED") {
      rejectedTotal--;
    }

    if (oldStatus !== "INTERVIEW") {
      interviewTotal++;
    }

    badge.innerText = "INTERVIEW";

    // badge color change
    badge.classList.remove("badge-neutral", "badge-error");
    badge.classList.add("badge-success");

    interviewCount.innerText = interviewTotal;
    rejectedCount.innerText = rejectedTotal;
  });
}

// rejected button functionality
let rejectButtons = document.getElementsByClassName("reject-btn");

for (let i = 0; i < rejectButtons.length; i++) {
  rejectButtons[i].addEventListener("click", function () {
    let card = this.closest(".job-card");
    let badge = card.querySelector(".status-badge");
    let oldStatus = badge.innerText;

    if (oldStatus === "INTERVIEW") {
      interviewTotal--;
    }

    if (oldStatus !== "REJECTED") {
      rejectedTotal++;
    }

    badge.innerText = "REJECTED";

    // badge color change
    badge.classList.remove("badge-neutral", "badge-success");
    badge.classList.add("badge-error");

    interviewCount.innerText = interviewTotal;
    rejectedCount.innerText = rejectedTotal;
  });
}

// made delete job button
let deleteButtons = document.getElementsByClassName("delete-btn");

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function () {
    let card = this.closest(".job-card");
    card.remove();

    totalJobs--;
    updateCount();
  });
}

//
function checkEmptyState() {
  let cards = document.getElementsByClassName("job-card");
  let visibleJobs = 0;

  for (var i = 0; i < cards.length; i++) {
    if (cards[i].style.display !== "none") {
      visibleJobs++;
    }
  }

  let emptyState = document.getElementById("emptyState");

  if (visibleJobs === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }
}

// All Tab
document.getElementById("allTab").addEventListener("click", function () {
  let cards = document.getElementsByClassName("job-card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "block";
  }

  updateCount();
  checkEmptyState();
});

//
function filterTab(status) {
  const cards = document.getElementsByClassName("job-card");
  let visibleJobs = 0;
  let totalCards = cards.length;

  for (let card of cards) {
    const badge = card.querySelector(".status-badge");
    if (status === "all" || badge.innerText === status.toUpperCase()) {
      card.style.display = "block";
      visibleJobs++;
    } else {
      card.style.display = "none";
    }
  }

  // Update tabCount to show "visible of total" for filtered tabs
  if (status === "all") {
    tabCount.innerText = totalCards + " jobs";
  } else {
    tabCount.innerText = visibleJobs + " of " + totalCards + " jobs";
  }

  // Show empty state if needed
  if (visibleJobs === 0 && status !== "all") showEmptyState(status);
}


//Interview tab
document.getElementById("interviewTab").addEventListener("click", function () {
  var jobContainer = document.getElementById("jobContainer");
  var cards = document.getElementsByClassName("job-card");
  var visibleJobs = 0;

  var existingEmpty = document.getElementById("interviewEmpty");
  if (existingEmpty) existingEmpty.remove();

  // Filter cards
  for (var i = 0; i < cards.length; i++) {
    var badge = cards[i].querySelector(".status-badge");
    if (badge.innerText === "INTERVIEW") {
      cards[i].style.display = "block";
      visibleJobs++;
    } else {
      cards[i].style.display = "none";
    }
  }

  if (visibleJobs === 0) {
    var emptyDiv = document.createElement("div");
    emptyDiv.id = "interviewEmpty";
    emptyDiv.className = "max-w-5xl mx-auto mt-4";

    emptyDiv.innerHTML = `
      <div class="card bg-base-100 shadow text-center p-10">
        <img src="./jobs.png" class="w-28 mx-auto mb-4" />
        <h2 class="text-2xl font-bold">No Jobs Available</h2>
        <p class="text-gray-500">Check back soon for new job opportunities</p>
      </div>
    `;

    jobContainer.appendChild(emptyDiv);
  }

  updateCount();
});

// Rejected tab
document.getElementById("rejectedTab").addEventListener("click", function () {
  let cards = document.getElementsByClassName("job-card");
  for (let i = 0; i < cards.length; i++) {
    let badge = cards[i].querySelector(".status-badge");

    if (badge.innerText === "REJECTED") {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }

  updateCount();
  checkEmptyState();
});

// Rejected Tab
document.getElementById("rejectedTab").addEventListener("click", function () {
  var jobContainer = document.getElementById("jobContainer");
  var cards = document.getElementsByClassName("job-card");
  var visibleJobs = 0;

  var existingEmpty = document.getElementById("rejectedEmpty");
  if (existingEmpty) existingEmpty.remove();

  for (var i = 0; i < cards.length; i++) {
    var badge = cards[i].querySelector(".status-badge");
    if (badge.innerText === "REJECTED") {
      cards[i].style.display = "block";
      visibleJobs++;
    } else {
      cards[i].style.display = "none";
    }
  }

  if (visibleJobs === 0) {
    var emptyDiv = document.createElement("div");
    emptyDiv.id = "rejectedEmpty";
    emptyDiv.className = "max-w-5xl mx-auto mt-4";

    emptyDiv.innerHTML = `
      <div class="card bg-base-100 shadow text-center p-10">
        <img src="./jobs.png" class="w-28 mx-auto mb-4" />
        <h2 class="text-2xl font-bold">No Rejected Jobs</h2>
        <p class="text-gray-500">You haven't rejected any jobs yet</p>
      </div>
    `;

    jobContainer.appendChild(emptyDiv);
  }

  updateCount();
});

//
function updateCount() {
  var visible = 0;

  for (var i = 0; i < cards.length; i++) {
    if (cards[i].style.display !== "none") {
      visible++;
    }
  }

  tabCount.innerText = visible + " of " + totalJobs + " jobs";
}

updateCount();
