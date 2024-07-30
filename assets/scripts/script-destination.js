
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const destinations = data.destinations;
        const destinationNames = destinations.map(destination => `<li>${destination.name}</li>`);
        const destinationsDiv = document.getElementsByClassName('ds')[0];
        const SelectedName = document.getElementsByClassName('name')[0];
        const SelecteddesInfo = document.getElementsByClassName('des-text')[0];
        const destinationImage = document.getElementsByClassName("destination-image")[0];
        const Distance = document.getElementsByClassName("distance")[0];
        const TravelTime = document.getElementsByClassName("time")[0];

        destinationsDiv.innerHTML = `<ul>${destinationNames.join('')}</ul>`;

        const listItems = destinationsDiv.getElementsByTagName('li');
        // Add the "active" class to the first list item by default
listItems[0].classList.add('active');
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].addEventListener('click', (event) => {
                for (let j = 0; j < listItems.length; j++) {
                    listItems[j].classList.remove('active');
                }
                // Add the "active" class to the clicked list item
                const selectedListItem = event.target;
                selectedListItem.classList.add('active');
                const selectedName = event.target.innerHTML;
                SelectedName.innerHTML = selectedName;
                const selectedNameInfo = event.target.innerHTML;

                const selectedDestination = destinations.find(destination => destination.name === selectedName);
                SelecteddesInfo.innerHTML = selectedDestination.description;
                destinationImage.src = selectedDestination.images.png;
                destinationImage.alt = selectedDestination.name;
                Distance.innerHTML = selectedDestination.distance;
                TravelTime.innerHTML = selectedDestination.travel;
                // Use the selected destination object to display the desired information
            });
        }
    });

