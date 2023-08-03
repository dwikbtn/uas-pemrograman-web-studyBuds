/**Script for study room page */
/**Select id with room type */
const roomType = document.querySelectorAll("#room-type div");
//fungsi untuk menambahkan class active pada room type
roomType.forEach((div) => {
  div.addEventListener("click", () => {
    roomType.forEach((d) => d.classList.remove("active"));
    div.classList.add("active");
  });
});
const topicButton = document.getElementById("topics-button");
const topicDropdown = document.getElementById("topic-dropdown");

//fungsi untuk menampilkan dropdown topic
topicButton.addEventListener("click", () => {
  topicDropdown.style.display =
    topicDropdown.style.display === "block" ? "none" : "block";
});

const topicOptions = topicDropdown.querySelectorAll("li");

topicOptions.forEach((option) => {
  option.addEventListener("click", () => {
    topicButton.textContent = option.textContent;
    topicDropdown.style.display = "none";
  });
});

/**Script for study room end here */
