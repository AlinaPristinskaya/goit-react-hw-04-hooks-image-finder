function fetchGallery(name, page) {
    const MY_KEY=`21851027-176a1d26dd1c513dea811d525`;
    const url =`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${name}&page=${page}&per_page=12&key=${MY_KEY}`
    return fetch(url).then(response => {
      if (response.ok) {
        return response.json();
      }
  
      return Promise.reject(new Error(`Нет покемона с именем ${name}`));
    });
  }
  
  const api = {
    fetchGallery,
  };
  
  export default api;