import axios from 'axios';
const API_KEY='49870616-6fef29b5083a7d4b692a746ee';

const getImagesByQuery= async (query,page=1)=>{
   const params=await new URLSearchParams(
      {key:API_KEY,
      q:query,
      p:page,
      image_type:'photo',
      orientation:'horizontal',
      safesearch:true})
   return axios(`https://pixabay.com/api/?${params}&per_page=15&page=`);
}
export default getImagesByQuery