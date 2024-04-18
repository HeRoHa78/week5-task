//select movie poster original image
let moviePosterContainer = document.querySelector('.movie-poster-container');
let moviePosterContainerImage = document.querySelector('.movie-poster-container img');


//select modal window layer
let modal = document.querySelector('#myModal');

//select close button
let closeBtn = document.querySelector('.closeBtn');

// select modal window image
let modalImage = document.querySelector('.movie-poster-modal');

moviePosterContainerImage.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = moviePosterContainerImage.src;
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if(event.target === modal) {
        modal.style.display = 'none';
    }
});
