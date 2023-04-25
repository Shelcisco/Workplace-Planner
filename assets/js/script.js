const dateDisplay = document.getElementById("date");
const currentDate = new Date();

dateDisplay.innerHTML = currentDate.toDateString();

document.body.style.backgroundImage = "url('./assets/image/OfficePlanner.jpg')"; 

const timeBlocks = document.querySelectorAll(".description");

// Get the current date and time
const now = new Date();
const currentHour = now.getHours();

// Loop through each time block and color code it based on whether it's in the past, present, or future
timeBlocks.forEach(block => {
  const blockId = block.id;
  const blockHour = parseInt(blockId);
  
  if (blockHour < currentHour) {
    block.style.backgroundColor = "lightgrey";
  } else if (blockHour === currentHour) {
    block.style.backgroundColor = "red";
  } else {
    block.style.backgroundColor = "lightgreen";
  }
});

$(".save_btn").on("click", function() {
  // Get the data you want to save
  console.log("buttonclick")
  let data = $(this).siblings(".description")

  const textareaelement = data.attr("id")
  // Save the data to local storage
  localStorage.setItem(textareaelement, data.val());


save_btn.onclick =(block => {
block.addEventListener("change", function() {
localStorage.setItem(this.id, this.value);
});
});
});

// Load saved events from local storage when the page loads
timeBlocks.forEach(block => {
  const savedEvent = localStorage.getItem(block.id);
  
  if (savedEvent) {
    block.value = savedEvent;
  }
})
