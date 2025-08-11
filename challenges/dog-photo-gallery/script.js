const addDogBtn = document.getElementById('add-dog');
const clearGalleryBtn = document.getElementById('clear-gallery');
const dogList = document.getElementById('dog-list');

addDogBtn.addEventListener('click', fetchDog);
clearGalleryBtn.addEventListener('click', () => {
  dogList.innerHTML = '';
});

function fetchDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (!data || !data.message) {
        throw new Error('Invalid API response');
      }
      const listItem = document.createElement('li');
      const img = document.createElement('img');
      img.src = data.message;
      listItem.appendChild(img);
      dogList.appendChild(listItem);
    })
    .catch(err => {
      console.error('Error fetching dog image:', err);
      alert('Could not fetch a dog right now. Please try again later.');
    });
}
