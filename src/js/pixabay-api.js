import axios from 'axios';
const API_KEY='49870616-6fef29b5083a7d4b692a746ee';
export default function getImagesByQuery(query){
   const params=new URLSearchParams(
      {key:API_KEY,
      q:query,
      image_type:'photo',
      orientation:'horizontal',
      safesearch:true})
   return axios(`https://pixabay.com/api/?${params}`);
}