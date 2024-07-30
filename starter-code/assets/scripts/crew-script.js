// Fetch the data from 'data.json'
fetch('data.json')
    // Once the data is fetched, convert the response to JSON
    .then(response => response.json())
    // Once the data is converted to JSON, proceed with the following code
    .then(data => {
        // Get the crew members from the data
        const crewMembers = data.crew;
        // Get the first element with the class name 'position'
        const position = document.getElementsByClassName('position')[0];
        // Get the first element with the class name 'dot-slider'
        const slider = document.getElementsByClassName('dot-slider')[0];
        // Get the first element with the class name 'crew-name'
        const CrewName = document.getElementsByClassName('crew-name')[0];
        // Get the first element with the class name 'crew-info'
        const crewBio = document.getElementsByClassName('crew-info')[0];
        // Get the first element with the class name 'crew-image'
        const Crewimage = document.getElementsByClassName('crew-image')[0];
        // Set the initial slide to 1
        let currentSlide = 1;

        // Create dots for each crew member and add them to the slider
        slider.innerHTML = crewMembers.map((member, index) => {
            // If the index is 0, make this dot active
            const active = index === 0 ? 'active' : '';
            // Return the HTML for the dot, which calls currentSlide() when clicked
            return `<span class="dot ${active}" onclick="currentSlide(${index + 1})"></span>`;
        }).join('');
        
        // Show the initial slide
        showSlide(currentSlide);
        
        // Define the function to show a specific slide
        function showSlide(slideIndex) {
            // Get the first element with the class name 'position'
            const position = document.getElementsByClassName('position')[0];
            // Get the first element with the class name 'crew-name'
            const CrewName = document.getElementsByClassName('crew-name')[0];
            // Get the first element with the class name 'crew-info'
            const crewBio = document.getElementsByClassName('crew-info')[0];
            // Get the first element with the class name 'crew-image'
            const Crewimage = document.getElementsByClassName('crew-image')[0];
            // Get the crew members from the data
            const crewMembers = data.crew;

            // Update the content of the slide with the role, name, bio, and image of the crew member
            position.innerHTML = crewMembers[slideIndex - 1].role;
            CrewName.innerHTML = crewMembers[slideIndex - 1].name;
            crewBio.innerHTML = crewMembers[slideIndex - 1].bio;
            Crewimage.src = crewMembers[slideIndex - 1].images.png;
            Crewimage.alt = crewMembers[slideIndex - 1].name;

            // Get all the dots
            const dots = document.getElementsByClassName('dot');
            // Remove the 'active' class from all dots
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove('active');
            }
            // Add the 'active' class to the current dot
            dots[slideIndex - 1].classList.add('active');
        }

        // Automatically change slides every 5 seconds
        setInterval(() => {
            // Increment the current slide
            currentSlide++;
            // If the current slide is greater than the number of crew members, reset to 1
            if (currentSlide > crewMembers.length) {
                currentSlide = 1;
            }
            // Show the new current slide
            showSlide(currentSlide);
        }, 5000);

        // Get all the dots in the slider
        const dots = slider.getElementsByTagName('span');
        // Add a click event to each dot
        for (let i = 0; i < dots.length; i++) {
            dots[i].addEventListener('click', () => {
                // Remove the 'active' class from the currently active dot
                const activeDot = slider.getElementsByClassName('active')[0];
                activeDot.classList.remove('active');
                // Add the 'active' class to the clicked dot
                dots[i].classList.add('active');
                // Update the content of the slide with the role, name, bio, and image of the clicked dot's crew member
                position.innerHTML = crewMembers[i].role;
                CrewName.innerHTML = crewMembers[i].name;
                crewBio.innerHTML = crewMembers[i].bio;
                Crewimage.src = crewMembers[i].images.png;
                Crewimage.alt = crewMembers[i].name;
            });
        }
    });
