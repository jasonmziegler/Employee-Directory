//console.log('Hello, World!');


// declare the API URL 
const userAPI = 'https://randomuser.me/api/?results=12'
// Fetch the api data and console.log when complete.
// code from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch(userAPI)
  .then(response => response.json())
  .then(generateHTML);

// HELPER FUNCTIONS

function createEmployeeCard(employee) {
    console.log(employee);
    // display the results to the screen in their cards
    const card = document.createElement('div');
    card.classList.add('card');
    const cardImageContainer = document.createElement('div');
    cardImageContainer.classList.add('card-img-container');
    const profileImg = document.createElement('img');
    profileImg.setAttribute('src', employee.picture.large);
    profileImg.classList.add('card-img');
    profileImg.setAttribute('alt', 'profile picture');
    cardImageContainer.appendChild(profileImg);
    const cardInfoContainer = document.createElement('div');
    cardInfoContainer.classList.add('card-info-container');
    const nameTitle = document.createElement('h3');
    nameTitle.setAttribute('id', `${employee.name.first}-${employee.name.last}`);
    nameTitle.classList.add('card-name', 'cap');
    nameTitle.innerText  = `${employee.name.first} ${employee.name.last}`;
    cardInfoContainer.appendChild(nameTitle);
    const employeeEmail = document.createElement('p');
    employeeEmail.classList.add('card-text');
    employeeEmail.innerText = `${employee.email}`;
    cardInfoContainer.appendChild(employeeEmail);
    const employeeLocation = document.createElement('p');
    employeeLocation.classList.add('card-text');
    employeeLocation.innerText = `${employee.location.city}, ${employee.location.state}`;
    cardInfoContainer.appendChild(employeeLocation);
    card.appendChild(cardImageContainer);
    card.appendChild(cardInfoContainer);
    /*
    <div class="card">
    
        <div class="card-img-container">
            <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">first last</h3>
            <p class="card-text">email</p>
            <p class="card-text cap">city, state</p>
        </div>
    </div>
    */
    card.addEventListener('click', (e) => {
        console.log(e.target);
        console.log(employee);
    });

    return card;
}

function generateHTML(data) {
    const employeesContainer = document.getElementById('gallery');
    const employees = data.results;
    console.log(employees);
    // create a card for each user in employees
    for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    const card = createEmployeeCard(employee);
    employeesContainer.insertAdjacentElement('beforeend', card);
}
}

// instead of calling generate html we could call setEmployees which would be a function that returns employees so that we have an array of the employees that we can use
// this way we can iterate over the array when using the modal 