// Fetch data from 'data.json' file
fetch('data.json')
    // Once the data is fetched, convert the response to JSON format
    .then(response => response.json())
    // Once the data is converted to JSON, proceed with the following function
    .then(data => {
        // Get the 'destinations' array from the JSON data
        const destinations = data.destinations;
        
        // Create an array of destination names wrapped in <li> tags
        const destinationNames = destinations.map(destination => `<li>${destination.name}</li>`);
        
        // Get the first element with the class name 'ds'
        const destinationsDiv = document.getElementsByClassName('ds')[0];
        
        // Get the first element with the class name 'name'
        const SelectedName = document.getElementsByClassName('name')[0];
        
        // Get the first element with the class name 'des-text'
        const SelecteddesInfo = document.getElementsByClassName('des-text')[0];
        
        // Get the first element with the class name 'destination-image'
        const destinationImage = document.getElementsByClassName("destination-image")[0];
        
        // Get the first element with the class name 'distance'
        const Distance = document.getElementsByClassName("distance")[0];
        
        // Get the first element with the class name 'time'
        const TravelTime = document.getElementsByClassName("time")[0];

        // Set the inner HTML of the destinationsDiv to an unordered list of destination names
        destinationsDiv.innerHTML = `<ul>${destinationNames.join('')}</ul>`;

        // Get all <li> elements inside the destinationsDiv
        const listItems = destinationsDiv.getElementsByTagName('li');

        // Add the "active" class to the first list item by default
        listItems[0].classList.add('active');
        
        // Loop through each list item
        for (let i = 0; i < listItems.length; i++) {
            // Add a click event listener to each list item
            listItems[i].addEventListener('click', (event) => {
                // Loop through all list items to remove the "active" class
                for (let j = 0; j < listItems.length; j++) {
                    listItems[j].classList.remove('active');
                }
                // Add the "active" class to the clicked list item
                const selectedListItem = event.target;
                selectedListItem.classList.add('active');
                
                // Get the name of the clicked destination
                const selectedName = event.target.innerHTML;
                
                // Set the inner HTML of the SelectedName element to the clicked destination's name
                SelectedName.innerHTML = selectedName;
                
                // Find the clicked destination object in the destinations array
                const selectedDestination = destinations.find(destination => destination.name === selectedName);
                
                // Set the inner HTML of the SelecteddesInfo element to the clicked destination's description
                SelecteddesInfo.innerHTML = selectedDestination.description;
                
                // Set the source and alt text of the destinationImage element to the clicked destination's image and name
                destinationImage.src = selectedDestination.images.png;
                destinationImage.alt = selectedDestination.name;
                
                // Set the inner HTML of the Distance element to the clicked destination's distance
                Distance.innerHTML = selectedDestination.distance;
                
                // Set the inner HTML of the TravelTime element to the clicked destination's travel time
                TravelTime.innerHTML = selectedDestination.travel;
            });
        }
    });
