// Fetch data from a file named 'data.json'
fetch('data.json')
  // When the data is fetched, convert the response to JSON format
  .then(response => response.json())
  // After converting to JSON, work with the data
  .then(data => {
    // Get the 'technology' items from the data
    const techItems = data.technology;
    // Find the HTML element with the id 'disc-container'
    const discContainer = document.querySelector('#disc-container');
    // Find the first HTML element with the class 'name'
    const nameSelected = document.getElementsByClassName('name')[0];
    // Find the first HTML element with the class 'info'
    const info = document.getElementsByClassName('info')[0];
    // Find the first HTML element with the class 'tech-image'
    const image = document.getElementsByClassName('tech-image')[0];

    // Loop through each item in 'techItems'
    for (let i = 0; i < techItems.length; i++) {
      // Create a new 'div' element
      const disc = document.createElement('div');
      // Add the class 'disc' to the 'div' element
      disc.classList.add('disc');
      // If it's the first item (index 0), add the 'active' class to the 'div'
      if (i === 0) {
        disc.classList.add('active');
      }
      // Set the inner HTML of the 'div' to the current index + 1 (to display a number)
      disc.innerHTML = i + 1;
      // Add a click event listener to the 'div'
      disc.addEventListener('click', () => {
        // When clicked, set the 'nameSelected' inner HTML to the item's name
        nameSelected.innerHTML = techItems[i].name;
        // Set the 'info' inner HTML to the item's description
        info.innerHTML = techItems[i].description;
        // Set the 'image' source to the item's portrait image URL
        image.src = techItems[i].images.portrait;
        // Set the 'image' alt text to the item's name in lowercase
        image.alt = techItems[i].name.toLowerCase();
        // Find the currently active 'disc' and remove the 'active' class from it
        const activeDisc = document.querySelector('.disc.active');
        if (activeDisc) {
          activeDisc.classList.remove('active');
        }
        // Add the 'active' class to the clicked 'disc'
        disc.classList.add('active');
      });
      // Add the 'div' (disc) to the 'discContainer' element
      discContainer.appendChild(disc);
    }
  });
