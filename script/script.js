/**Script for header */
/**browse category functionality */
const headerCategory = document.getElementById("header__browse__category");
const headerCategoryBtn = document.querySelector(".header__browse__btn");

categoryOpen = false;
headerCategoryBtn.addEventListener("click", function () {
  categoryOpen = !categoryOpen;
  console.log(categoryOpen);
  if (categoryOpen) {
    headerCategory.style.display = "flex";
  } else {
    headerCategory.style.display = "none";
  }
});
/**Script for header end here */

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
topicButton?.addEventListener("click", () => {
  topicDropdown.style.display =
    topicDropdown.style.display === "block" ? "none" : "block";
});

const topicOptions = topicDropdown?.querySelectorAll("li");

topicOptions?.forEach((option) => {
  option.addEventListener("click", () => {
    topicButton.textContent = option.textContent;
    topicDropdown.style.display = "none";
  });
});

const statusAll = document.getElementById("status-all");
const statusOpen = document.getElementById("status-open");
const statusRestricted = document.getElementById("status-restricted");

//fungsi untuk memfilter room berdasarkan open/restricted
//filter berdasarkan custom attribute data-open
function filterCardsByStatus(status) {
  const cards = document.querySelectorAll(".card-container");

  cards.forEach((card) => {
    if (status === "all") {
      card.style.display = "block";
      return;
    }
    const cardStatus = card.getAttribute("data-open");
    if (cardStatus === status) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

statusAll.addEventListener("click", () => {
  filterCardsByStatus("all");
});

statusOpen.addEventListener("click", () => {
  filterCardsByStatus("open");
});

statusRestricted.addEventListener("click", () => {
  filterCardsByStatus("restricted");
});

function filterByTopic(topic) {
  const cards = document.querySelectorAll(".card-container");

  cards.forEach((card) => {
    if (topic === "all") {
      card.style.display = "block";
      return;
    }
    const cardTopic = card.getAttribute("data-topic");
    if (cardTopic === topic) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

document.getElementById("topic-all").addEventListener("click", () => {
  filterByTopic("all");
});
document.getElementById("topic-programming").addEventListener("click", () => {
  filterByTopic("programming");
});
document.getElementById("topic-math").addEventListener("click", () => {
  filterByTopic("math");
});
document.getElementById("topic-biologhy").addEventListener("click", () => {
  filterByTopic("biologhy");
});
document.getElementById("topic-engineering").addEventListener("click", () => {
  filterByTopic("engineering");
});

/**Script for study room end here */
