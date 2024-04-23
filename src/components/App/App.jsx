import SearchBar from "../SearchBar/SearchBar"
import ImageGallery from "../ImageGallery/ImageGallery"
import Loader from "../Loader/Loader"
import Error from "../Error/Error"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import { fetchImages } from "../../imagesAPI"
import { useState, useEffect } from "react"



  
    
// fetchImages();

function App() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const handleSearch = (newQuery) => {
    setImages([]);
    setQuery(newQuery);
    setPage(1);
   
  }

 

  const handleLoadMore = () => {
    setPage(page+1)
  }


  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getImages() {
      try {
        setError(false);
      setLoading(true);
      const data = await fetchImages(query, page); 
      setImages((prevImages) => { return [...prevImages, ...data] });
    } catch (error) {
      setError(true);
    }
    finally {
      setLoading(false);
      }
    }
    getImages()
    console.log(query, page)
   },[query,page]) 



    return (
      <div>
        <SearchBar handleSearch={handleSearch} />
        {error && <Error/>}
        {loading && <Loader/>}
       {images.length>0 &&  <ImageGallery images={images}/>}
        {images.length > 0 && !loading && <LoadMoreBtn onClick={ handleLoadMore } />}
      </div>
    )
  
}

    export default App
