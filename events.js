// const events = [
//   {
//     id: 1,
//     name: "DiscusForce Throw",
//     date: "16/10/2024",
//     meet: "Lightning Bolt Championships",
//     category: "Throw",
//     image: "https://www.tutorialspoint.com/discus_throw/images/rules_regarding_discus.jpg",
//   },
//   {
//     id: 2,
//     name: "RelayChamp 4x100m",
//     date: "30/09/2024",
//     meet: "Grand Marathon Challenge",
//     category: "4x100m",
//     image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Gold_Relay_UK_WOC_2008-crop.jpg",
//   },
//   // Add more events here
// ];

// // Render event tiles
// function renderEvents(eventList) {
//   const eventTiles = document.getElementById("eventTiles");
//   eventTiles.innerHTML = ""; // Clear existing tiles

//   eventList.forEach((event) => {
//     const tile = document.createElement("div");
//     tile.className = "event-tile";
//     tile.onclick = () => openModal(event);

//     tile.innerHTML = `
//       <img src="${event.image}" alt="${event.name}" class="event-image" />
//       <div class="event-info">
//         <h3>${event.name}</h3>
//         <p>Date: ${event.date}</p>
//         <p>Meet: ${event.meet}</p>
//         <p>Category: ${event.category}</p>
//       </div>
//     `;

//     eventTiles.appendChild(tile);
//   });
// }

// // Filter events
// function filterEvents() {
//   const query = document.getElementById("searchBar").value.toLowerCase();
//   const filteredEvents = events.filter(
//     (event) =>
//       event.name.toLowerCase().includes(query) ||
//       event.meet.toLowerCase().includes(query) ||
//       event.category.toLowerCase().includes(query)
//   );
//   renderEvents(filteredEvents);
// }

// // Open registration modal
// function openModal(event) {
//   const modal = document.getElementById("registrationModal");
//   const eventNameInput = document.getElementById("event-name");
//   eventNameInput.value = event.name;

//   modal.classList.remove("hidden");
// }

// // Close modal
// function closeModal() {
//   const modal = document.getElementById("registrationModal");
//   modal.classList.add("hidden");
// }

// // Initialize events
// document.addEventListener("DOMContentLoaded", () => {
//   renderEvents(events);

//   document.getElementById("registrationForm").addEventListener("submit", (e) => {
//     e.preventDefault();
//     alert("Registration Successful!");
//     closeModal();
//   });
// });




// const events = [
//   {
//     id: 1,
//     name: "DiscusForce Throw",
//     date: "2024-10-16",
//     meet: "Lightning Bolt Championships",
//     category: "Throw",
//     image: "https://www.tutorialspoint.com/discus_throw/images/rules_regarding_discus.jpg",
//   },
//   {
//     id: 2,
//     name: "RelayChamp 4x100m",
//     date: "2024-09-30",
//     meet: "Grand Marathon Challenge",
//     category: "4x100m",
//     image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Gold_Relay_UK_WOC_2008-crop.jpg",
//   },
//   // Add more events here with the same structure.
// ];

// // Helper function to categorize events
// function categorizeEvents() {
//   const today = new Date();

//   const upcoming = events.filter(event => new Date(event.date) > today);
//   const ongoing = events.filter(event => new Date(event.date).toDateString() === today.toDateString());
//   const finished = events.filter(event => new Date(event.date) < today);

//   return { upcoming, ongoing, finished };
// }

// // Render categorized events
// function renderCategorizedEvents() {
//   const { upcoming, ongoing, finished } = categorizeEvents();

//   renderEvents(upcoming, "upcomingEvents");
//   renderEvents(ongoing, "ongoingEvents");
//   renderEvents(finished, "finishedEvents");
// }

// // Render events into a specific section
// function renderEvents(eventList, sectionId) {
//   const section = document.querySelector(`#${sectionId} .event-grid`);
//   section.innerHTML = ""; // Clear existing tiles

//   eventList.forEach(event => {
//     const tile = document.createElement("div");
//     tile.className = "event-tile";

//     tile.innerHTML = `
//       <img src="${event.image}" alt="${event.name}" class="event-image" />
//       <div class="event-info">
//         <h3>${event.name}</h3>
//         <p>Date: ${event.date}</p>
//         <p>Meet: ${event.meet}</p>
//         <p>Category: ${event.category}</p>
//       </div>
//     `;

//     section.appendChild(tile);
//   });
// }

// // Initialize events
// document.addEventListener("DOMContentLoaded", () => {
//   renderCategorizedEvents();
// });




// -----------------------------------------------new----------------------------
const events = [
  {
    id: 1,
    name: "DiscusForce Throw",
    date: "16/10/2024",
    meet: "Lightning Bolt Championships",
    category: "Upcoming",
    image: "https://www.tutorialspoint.com/discus_throw/images/rules_regarding_discus.jpg",
  },
  {
    id: 2,
    name: "RelayChamp 4x100m",
    date: "30/09/2024",
    meet: "Grand Marathon Challenge",
    category: "Ongoing",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Gold_Relay_UK_WOC_2008-crop.jpg",
  },
  {
    id: 3,
    name: "Marathon Blaze",
    date: "22/08/2024",
    meet: "Elite Racing League",
    category: "Completed",
    image: "https://via.placeholder.com/250x150?text=Marathon+Image",
  },
  // More events can be added here
];

// Render event tiles based on category
function renderEvents(eventList, category) {
  const eventGrid = document.getElementById(category);
  eventGrid.innerHTML = ""; // Clear existing tiles

  eventList.forEach((event) => {
    const tile = document.createElement("div");
    tile.className = "event-tile";

    // Add Register button only for Upcoming Events
    let registerButton = "";
    if (event.category === "Upcoming") {
      registerButton = `<button class="register-button" onclick="openModal('${event.name}')">Register</button>`;
    }

    tile.innerHTML = `
      <img src="${event.image}" alt="${event.name}" class="event-image" />
      <div class="event-info">
        <h3>${event.name}</h3>
        <p>Date: ${event.date}</p>
        <p>Meet: ${event.meet}</p>
        <p>Category: ${event.category}</p>
        ${registerButton}
      </div>
    `;

    eventGrid.appendChild(tile);
  });
}

// Filter events based on search query
function filterEvents() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(query) ||
      event.meet.toLowerCase().includes(query) ||
      event.category.toLowerCase().includes(query)
  );
  
  const upcomingEvents = filteredEvents.filter(event => event.category === "Upcoming");
  const ongoingEvents = filteredEvents.filter(event => event.category === "Ongoing");
  const completedEvents = filteredEvents.filter(event => event.category === "Completed");

  renderEvents(upcomingEvents, "upcomingEvents");
  renderEvents(ongoingEvents, "ongoingEvents");
  renderEvents(completedEvents, "completedEvents");
}

// Open registration modal and populate event name
function openModal(eventName) {
  document.getElementById("event-name").value = eventName;
  document.getElementById("registrationModal").classList.remove("hidden");
}

// Close the modal
function closeModal() {
  document.getElementById("registrationModal").classList.add("hidden");
}

// Handle registration form submission
document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const eventName = document.getElementById("event-name").value;

  alert(`Registration successful for ${eventName}\nName: ${name}\nEmail: ${email}`);
  closeModal(); // Close the modal after submission
});

// Initialize events when the page loads
document.addEventListener("DOMContentLoaded", () => {
  // Render all events in their respective categories
  const upcomingEvents = events.filter(event => event.category === "Upcoming");
  const ongoingEvents = events.filter(event => event.category === "Ongoing");
  const completedEvents = events.filter(event => event.category === "Completed");

  renderEvents(upcomingEvents, "upcomingEvents");
  renderEvents(ongoingEvents, "ongoingEvents");
  renderEvents(completedEvents, "completedEvents");

  // Add event listener to search bar
  document.getElementById("searchBar").addEventListener("input", filterEvents);
});
