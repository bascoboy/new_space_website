// Select the mobile navigation toggle button and the primary navigation element
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavigation = document.querySelector(".primary-navigation");

// Select the destination info, tabs, and destination picture elements
const destinationInfo = document.querySelector(".destination-info");
const tabs = document.querySelectorAll(".tab");
const destinationPicture = document.querySelector(".destination-picture");

// Select the crew picture, dots, and crew details elements
const crewPicture = document.querySelector(".crew-picture");
const dots = document.querySelectorAll(".dot");
const crewInfo = document.querySelector(".crew-details");

// Select the numbered dots, technology content, and technology image elements
const numberedDots = document.querySelectorAll(".numbered");
const technologyInfo = document.querySelector(".technology-content");
const technologyPicture = document.querySelector(".technology-image");

// Select the main element and the navigation buttons inside a list
const main = document.querySelector("#main");
const navBtns = document.querySelectorAll("ul a");
const nav = document.querySelector("nav");

// Add a click event listener to the mobile navigation toggle button
mobileNavToggle.addEventListener("click", () => {
  // Toggle the class for the mobile navigation toggle button
  mobileNavToggle.classList.toggle("mobile-nav-toggle-image");
  // Toggle the class for the primary navigation
  primaryNavigation.classList.toggle("primary-navigation-toggle");
});

// Function to load data from a JSON file asynchronously
async function loadData() {
  // Fetch the data from the JSON file
  const response = await fetch("./data.json");
  // Convert the response to JSON format
  const data = await response.json();
  // Return the data
  return data;
}

// Add an event listener to the window to run code when the content is loaded
window.addEventListener("DOMContentLoaded", async () => {
  try {
    // Load the data from the JSON file
    const data = await loadData();
    // Destructure the data to get destinations, crew, and technology arrays
    const { destinations, crew, technology } = data;

    // Add a click event listener to the main element
    main.addEventListener("click", function (e) {
      // Get the data-id attribute from the clicked element
      const id = e.target.dataset.id;

      // For the destination HTML page
      tabs.forEach(function (tab) {
        if (id) {
          // Remove the active class from all tabs
          tab.classList.remove("active");
          // Add the active class to the clicked tab
          e.target.classList.add("active");
        }
        // Loop through each destination item
        destinations.forEach(function (item) {
          if (id === item.name.toLowerCase()) {
            // Update the destination picture with new content
            destinationPicture.innerHTML = `
              <source srcset="${item.images.webp}" type="image/webp"/>
              <img src="${item.images.png}" alt="${item.name}" />
            `;
            // Update the destination info with new content
            destinationInfo.innerHTML = `
              <h2 class="fs-800 ff-serif uppercase">${item.name}</h2>
              <p class="text-light">${item.description}</p>
              <div class="destination-meta flex">
                <div>
                  <h3 class="fs-200 ff-sans-cond uppercase letter-spacing-2 text-light">
                    Avg. distance
                  </h3>
                  <p class="ff-serif uppercase">${item.distance}</p>
                </div>
                <div>
                  <h3 class="fs-200 ff-sans-cond uppercase letter-spacing-2 text-light">
                    Est. travel time
                  </h3>
                  <p class="ff-serif uppercase">${item.travel}</p>
                </div>
              </div>
            `;
          }
        });
      });

      // For the crew HTML page
      dots.forEach(function (dot) {
        if (id) {
          // Remove the active class from all dots
          dot.classList.remove("active");
          // Add the active class to the clicked dot
          e.target.classList.add("active");
        }
        // Loop through each crew item
        crew.forEach(function (item) {
          if (id === item.role.toLowerCase()) {
            // Update the crew info with new content
            crewInfo.innerHTML = `
              <h2 class="fs-600 ff-serif uppercase">${item.role}</h2>
              <p class="fs-700 ff-serif uppercase">${item.name}</p>
              <p>${item.bio}</p>
            `;
            // Update the crew picture with new content
            crewPicture.innerHTML = `
              <source srcset="${item.images.webp}" type="image/webp"/>
              <img src="${item.images.png}" alt="${item.name}"/>
            `;
          }
        });
      });

      // For the technology HTML page
      numberedDots.forEach(function (numbered) {
        if (id) {
          // Remove the active class from all numbered dots
          numbered.classList.remove("active");
          // Add the active class to the clicked numbered dot
          e.target.classList.add("active");
        }
        // Loop through each technology item
        technology.forEach(function (item) {
          if (id === item.name.toLowerCase()) {
            // Update the technology info with new content
            technologyInfo.innerHTML = `
              <h2 class="fs-600 ff-serif uppercase">The terminology...</h2>
              <p class="fs-700 ff-serif uppercase">${item.name}</p>
              <p>${item.description}</p>
            `;
            // Update the technology picture based on screen width
            technologyPicture.src =
              window.innerWidth < 752
                ? item.images.landscape
                : item.images.portrait;
          }
        });
      });
    });
  } catch (error) {
    // Log any errors to the console
    console.log(error);
  }
});
