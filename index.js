import{a as p,S as m,i as d}from"./assets/vendor-BH9GyP-n.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const y="49870616-6fef29b5083a7d4b692a746ee";function g(o){const r=new URLSearchParams({key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return p(`https://pixabay.com/api/?${r}`)}const c=document.querySelector(".gallery");function h(o){c.innerHTML=o.map(({webformatURL:r,largeImageURL:i,tags:s,likes:e,views:t,comments:a,downloads:u})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${i}">
      <img
        class="gallery-image"
        src="${r}"
        alt="${s}"
      />
      <ul class='info-list'>
      <li class='info-item'>
      <p class='info-text'>Likes</p>
      <p class='info-text'>${e}</p>
      </li>
      <li class='info-item'>
      <p class='info-text'>Views</p>
      <p class='info-text'>${t}</p>
      </li>
      <li class='info-item'>
      <p class='info-text'>Comments</p>
      <p class='info-text'>${a}</p>
      </li>
      <li class='info-item'>
      <p class='info-text'>Downloads</p>
      <p class='info-text'>${u}</p>
      </li>
      </ul>
    </a>
  </li>
  `).join(""),new m(".gallery a",{captionsData:"alt",captionsDelay:250})}function L(){c.innerHTML=""}const f=document.querySelector("span");function x(){f.classList.add("loader")}function n(){f.classList.remove("loader")}const S="Sorry, there are no images matching your search query. Please try again!";n();const l=document.querySelector(".form");l.addEventListener("submit",o=>{o.preventDefault(),x();const r=document.querySelector("input");g(r.value).then(i=>{const s=i.data.hits;if(!s.length){d.show({message:`${S}`}),L(),n();return}n(),h(s),galleryLightbox.refresh()}).catch(i=>{n()}),l.reset()});
//# sourceMappingURL=index.js.map
