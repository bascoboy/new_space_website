const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavigation = document.querySelector(".primary-navigation");

const destinationInfo = document.querySelector(".destination-info");
const tabs = document.querySelectorAll(".tab");
const destinationPicture = document.querySelector(".destination-picture");

const crewPicture = document.querySelector(".crew-picture");
const dots = document.querySelectorAll(".dot");
const crewInfo = document.querySelector(".crew-details");

const numberedDots = document.querySelectorAll(".numbered");
const technologyInfo = document.querySelector(".technology-content");
const technologyPicture = document.querySelector(".technology-image");

const main = document.querySelector("#main");
const navBtns = document.querySelectorAll("ul a");
const nav = document.querySelector("nav");

mobileNavToggle.addEventListener("click", () => {
  mobileNavToggle.classList.toggle("mobile-nav-toggle-image");
  primaryNavigation.classList.toggle("primary-navigation-toggle");
});

async function loadData() {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
}

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const data = await loadData();
    const { destinations, crew, technology } = data;

    main.addEventListener("click", function (e) {
      const id = e.target.dataset.id;

      // destination html page
      tabs.forEach(function (tab) {
        if (id) {
          tab.classList.remove("active");
          e.target.classList.add("active");
        }
        destinations.forEach(function (item) {
          if (id === item.name.toLowerCase()) {
            destinationPicture.innerHTML = `<source srcset="${item.images.webp}" type="image/webp"/>
                                            <img src="${item.images.png}" alt="${item.name}" />`;

            destinationInfo.innerHTML = `<h2 class="fs-800 ff-serif uppercase">${item.name}</h2>
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
                                         </div>`;
          }
        });
      });

      // crew html page
      dots.forEach(function (dot) {
        if (id) {
          dot.classList.remove("active");
          e.target.classList.add("active");
        }
        crew.forEach(function (item) {
          if (id === item.role.toLowerCase()) {
            crewInfo.innerHTML = `<h2 class="fs-600 ff-serif uppercase">${item.role}</h2>
                                  <p class="fs-700 ff-serif uppercase">${item.name}</p>
                                  <p>${item.bio}</p>`;
            crewPicture.innerHTML = `<source srcset="${item.images.webp}" type="image/webp"/>
                                     <img src="${item.images.png}" alt="${item.name}"/>`;
          }
        });
      });

      // technology html page
      numberedDots.forEach(function (numbered) {
        if (id) {
          numbered.classList.remove("active");
          e.target.classList.add("active");
        }
        technology.forEach(function (item) {
          if (id === item.name.toLowerCase()) {
            technologyInfo.innerHTML = `<h2 class="fs-600 ff-serif uppercase">The terminology...</h2>
                                        <p class="fs-700 ff-serif uppercase">${item.name}</p>
                                        <p>${item.description}</p>`;
            technologyPicture.src =
              window.innerWidth < 752
                ? item.images.landscape
                : item.images.portrait;
          }
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
});
