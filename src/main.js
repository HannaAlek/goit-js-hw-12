import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import getImagesByQuery from "./js/pixabay-api";

import {createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton} from "./js/render-functions";

const errorMsg="Sorry, there are no images matching your search query. Please try again!";
hideLoader();
hideLoadMoreButton();
const form=document.querySelector('.form');
form.addEventListener('submit',(event)=>{
event.preventDefault();
showLoader();

const inputSearch=document.querySelector('input')

getImagesByQuery(inputSearch.value)
.then(response=>{
    const arr=response.data.hits;
    if (!arr.length){
        iziToast.show({message:`${errorMsg}`});
        clearGallery();
        hideLoader();
       
        return;
    };
    hideLoader();
    createGallery(arr);
    galleryLightbox.refresh();
    // showLoadMoreButton();
})
.catch(Error=>{
    hideLoader();
    
});
form.reset();

})
