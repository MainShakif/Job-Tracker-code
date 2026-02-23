var interviewCount = document.getElementById("interviewCount");
var rejectedCount = document.getElementById("rejectedCount");
var tabCount = document.getElementById("tabCount");

var interviewTotal = 0;
var rejectedTotal = 0;
var totalJobs = 8;

var cards = document.getElementsByClassName("job-card");

var interviewButtons = document.getElementsByClassName("interview-btn");

// interview button functionality
for (var i = 0; i < interviewButtons.length; i++) {
  interviewButtons[i].addEventListener("click", function () {
    var card = this.closest(".job-card");
    var badge = card.querySelector(".status-badge");
    var oldStatus = badge.innerText;

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
