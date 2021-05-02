//console.log('Hello, World!');


// declare the API URL 
const userAPI = 'https://randomuser.me/api/?results=12'
// Fetch the api data and console.log when complete.
// code from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch(userAPI)
  .then(response => response.json())
  .then(generateHTML);

// HELPER FUNCTIONS
function updateModal(employee) {
    const body = document.getElementsByTagName('body')[0];
    console.log('body', body);
    let modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');
    let modal = document.createElement('div');
    modal.classList.add('modal');
    let button = document.createElement('button');
    button.classList.add('modal-close-btn');
    button.setAttribute('type', 'button');
    button.setAttribute('id', 'modal-close-btn');
    let strong = document.createElement('strong');
    strong.innerText = "X";
    strong.cl
    button.appendChild(strong);
    button.addEventListener('click', (e) => { 
        button.parentNode.parentNode.remove();
    });
    modal.appendChild(button);
    let modalInfoContainer = document.createElement('div');
    modalInfoContainer.classList.add('modal-info-container');
    let modalImg = document.createElement('img');
    modalImg.classList.add('modal-img');
    modalImg.setAttribute('src', employee.picture.large);
    modalImg.setAttribute('alt', 'profile picture')
    modalInfoContainer.appendChild(modalImg);
    let name = document.createElement('h3');
    name.setAttribute('id', `${employee.name.first}-${employee.name.last}-modal-img`);
    name.innerText = `${employee.name.first} ${employee.name.last}`;
    modalInfoContainer.appendChild(name);
    let email = document.createElement('p');
    email.classList.add('modal-text');
    email.innerText = `${employee.email}`;
    modalInfoContainer.appendChild(email);
    let city = document.createElement('p');
    city.classList.add('modal-text', 'cap');
    city.innerText = employee.location.city;
    modalInfoContainer.appendChild(city);
    modalInfoContainer.appendChild(document.createElement('hr'));
    let phone = document.createElement('p');
    phone.classList.add('modal-text');
    phone.innerText = employee.phone;
    modalInfoContainer.appendChild(phone);
    let address = document.createElement('p');
    address.classList.add('modal-text');
    address.innerText = `${employee.location.street.number} ${employee.location.street.name}, ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}`;
    modalInfoContainer.appendChild(address);
    let birthday = document.createElement('p');
    birthday.classList.add('modal-text');
    let birthdayObject = new Date(employee.dob.date);
    //birthday.innerText = `Birthday: ${employee.dob.date}`;
    console.log(birthdayObject);
    birthday.innerText = `Birthday: ${birthdayObject.getMonth() + 1}/${birthdayObject.getUTCDate()}/${birthdayObject.getFullYear()}`;
    modalInfoContainer.appendChild(birthday);
    modal.appendChild(modalInfoContainer);
    modalContainer.appendChild(modal);

    body.insertAdjacentElement('beforeend', modalContainer);
/*
<div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="https://via.placeholder.com/125" alt="profile picture">
            <h3 id="name" class="modal-name cap">name</h3>
            <p class="modal-text">email</p>
            <p class="modal-text cap">city</p>
            <hr>
            <p class="modal-text">(555) 555-5555</p>
            <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
        </div>
    </div>
</div>    
*/
}

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
    nameTitle.setAttribute('id', `${employee.name.first}-${employee.name.last}-img`);
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
        updateModal(employee);
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

