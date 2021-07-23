
function fetchAPI(query,page) {
    
   return fetch(`https://pixabay.com/api/?key=21851027-176a1d26dd1c513dea811d525&q=${query}&image_type=photo&pretty=true&page=1&per_page=12&page=${page}`)
    .then(res=>res.json())
}
const api={
    fetchAPI,
}
 export default api;
 