document.addEventListener('DOMContentLoaded', function() {
    const userImageElem = document.getElementById('userImage');
    const userNameElem = document.getElementById('userName');
    const infoContentElem = document.getElementById('infoContent');
    const ageBtn = document.getElementById('ageBtn');
    const emailBtn = document.getElementById('emailBtn');
    const phoneBtn = document.getElementById('phoneBtn');
    const getUserBtn = document.getElementById('getUser');

    // Function to fetch random user data from API
    function fetchRandomUser() {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                const fullName = `${user.name.first} ${user.name.last}`;
                const largeImage = user.picture.large;

                // Update DOM with user data
                userImageElem.src = largeImage;
                userNameElem.textContent = fullName;

                // Clear info content on new user fetch
                infoContentElem.textContent = '';
            })
            .catch(error => console.error('Error fetching random user:', error));
    }

    // Initial fetch of random user on page load
    fetchRandomUser();

    // Event listener for Get User button
    getUserBtn.addEventListener('click', fetchRandomUser);

    // Event listeners for info buttons
    ageBtn.addEventListener('click', () => {
        infoContentElem.textContent = ''; // Clear existing content
        infoContentElem.textContent = `Age: ${user.dob.age}`;
    });

    emailBtn.addEventListener('click', () => {
        infoContentElem.textContent = ''; // Clear existing content
        infoContentElem.textContent = `Email: ${user.email}`;
    });

    phoneBtn.addEventListener('click', () => {
        infoContentElem.textContent = ''; // Clear existing content
        infoContentElem.textContent = `Phone: ${user.phone}`;
    });
});
