fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const crewMembers = data.crew;
        const position = document.getElementsByClassName('position')[0];
        const slider = document.getElementsByClassName('dot-slider')[0];
        const CrewName = document.getElementsByClassName('crew-name')[0];
        const crewBio = document.getElementsByClassName('crew-info')[0];
        const Crewimage = document.getElementsByClassName('crew-image')[0];
        let currentSlide = 1;

        slider.innerHTML = crewMembers.map((member, index) => {
            const active = index === 0 ? 'active' : '';
            return `<span class="dot ${active}" onclick="currentSlide(${index + 1})"></span>`;
        }).join('');
        // Show the current slide
        showSlide(currentSlide);
        function showSlide(slideIndex) {
            const position = document.getElementsByClassName('position')[0];
            const CrewName = document.getElementsByClassName('crew-name')[0];
            const crewBio = document.getElementsByClassName('crew-info')[0];
            const Crewimage = document.getElementsByClassName('crew-image')[0];
            const crewMembers = data.crew;

            // Update the slide content
            position.innerHTML = crewMembers[slideIndex - 1].role;
            CrewName.innerHTML = crewMembers[slideIndex - 1].name;
            crewBio.innerHTML = crewMembers[slideIndex - 1].bio;
            Crewimage.src = crewMembers[slideIndex - 1].images.png;
            Crewimage.alt = crewMembers[slideIndex - 1].name;

            // Update the active dot
            const dots = document.getElementsByClassName('dot');
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove('active');
            }
            dots[slideIndex - 1].classList.add('active');
        }


        // Automatically change slides every 10 seconds
        setInterval(() => {
            currentSlide++;
            if (currentSlide > crewMembers.length) {
                currentSlide = 1;
            }
            showSlide(currentSlide);
        }, 5000);


        const dots = slider.getElementsByTagName('span');
        for (let i = 0; i < dots.length; i++) {
            dots[i].addEventListener('click', () => {
                const activeDot = slider.getElementsByClassName('active')[0];
                activeDot.classList.remove('active');
                dots[i].classList.add('active');
                position.innerHTML = crewMembers[i].role;
                CrewName.innerHTML = crewMembers[i].name;
                crewBio.innerHTML = crewMembers[i].bio;
                Crewimage.src = crewMembers[i].images.png;
                Crewimage.alt = crewMembers[i].name;
            });
        }
    });
