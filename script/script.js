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

// delete job button created
let deleteButtons = document.getElementsByClassName("delete-btn");

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function () {
    let card = this.closest(".job-card");
    card.remove();

    totalJobs--;
    updateCount();
  });
}
