import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
  
const gallery=document.querySelector('.gallery');

export function createGallery(images){
  gallery.innerHTML=images.map((
    {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads
    }
  )=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
      />
      <ul class='info-list'>
      <li class='info-item'>
      <p class='info-text'>Likes</p>
      <p class='info-text'>${likes}</p>
      </li>
      <li class='info-item'>
      <p class='info-text'>Views</p>
      <p class='info-text'>${views}</p>
      </li>
      <li class='info-item'>
      <p class='info-text'>Comments</p>
      <p class='info-text'>${comments}</p>
      </li>
      <li class='info-item'>
      <p class='info-text'>Downloads</p>
      <p class='info-text'>${downloads}</p>
      </li>
      </ul>
    </a>
  </li>
  `).join('');
  let galleryLightbox=new SimpleLightbox('.gallery a',{
    captionsData:'alt',
    captionsDelay:250
});

  }

export function clearGallery(){
gallery.innerHTML='';
}

const loader=document.querySelector('span');
export function showLoader(){
  loader.classList.add('loader');
}

export function hideLoader(){
  loader.classList.remove('loader')
}