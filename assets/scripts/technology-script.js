fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const techItems = data.technology;
    const discContainer = document.querySelector('#disc-container');
    const nameSelected = document.getElementsByClassName('name')[0];
    const info= document.getElementsByClassName('info')[0];
    const image = document.getElementsByClassName('tech-image')[0];


    // Loop through the tech items and create the disc pagination
    for (let i = 0; i < techItems.length; i++) {
       
      const disc = document.createElement('div');
      disc.classList.add('disc');
      if (i === 0) {
        disc.classList.add('active');
      }
      disc.innerHTML = i + 1; // add number inside the disc
      disc.addEventListener('click', () => {
        nameSelected.innerHTML = techItems[i].name;
        info.innerHTML = techItems[i].description;
        image.src = techItems[i].images.portrait;
        image.alt = techItems[i].name.toLowerCase();
        // Remove the "active" class from all discs
        const activeDisc = document.querySelector('.disc.active');
        if (activeDisc) {
          activeDisc.classList.remove('active');
        }

        // Add the "active" class to the clicked disc
        disc.classList.add('active');
      });
      discContainer.appendChild(disc);
    }
  });
