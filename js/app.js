//console.log('Hello, World!');


// declare the API URL 
const userAPI = 'https://randomuser.me/api/?results=12'
// Fetch the api data and console.log when complete.
// code from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch(userAPI)
  .then(response => response.json())
  .then(data => console.log(data.results));

// display the results to the screen in their cards

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

