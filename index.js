import{a as p,S as d,i as m}from"./assets/vendor-BH9GyP-n.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="49870616-6fef29b5083a7d4b692a746ee",g=async(a,r=1)=>{const o=await new URLSearchParams({key:y,q:a,p:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return p(`https://pixabay.com/api/?${o}&per_page=15&page=`)},c=document.querySelector(".gallery");function h(a){c.innerHTML=a.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:i,downloads:f})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${o}">
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
      <p class='info-text'>${i}</p>
      </li>
      <li class='info-item'>
      <p class='info-text'>Downloads</p>
      <p class='info-text'>${f}</p>
      </li>
      </ul>
    </a>
  </li>
  `).join(""),new d(".gallery a",{captionsData:"alt",captionsDelay:250})}function L(){c.innerHTML=""}const u=document.querySelector("span");function x(){u.classList.add("loader")}function n(){u.classList.remove("loader")}document.querySelector(".load");function S(){console.log("btton")}const b="Sorry, there are no images matching your search query. Please try again!";n();S();const l=document.querySelector(".form");l.addEventListener("submit",a=>{a.preventDefault(),x();const r=document.querySelector("input");g(r.value).then(o=>{const s=o.data.hits;if(!s.length){m.show({message:`${b}`}),L(),n();return}n(),h(s),galleryLightbox.refresh()}).catch(o=>{n()}),l.reset()});
//# sourceMappingURL=index.js.map
