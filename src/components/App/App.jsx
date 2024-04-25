import SearchBar from "../SearchBar/SearchBar"
import ImageGallery from "../ImageGallery/ImageGallery"
import Loader from "../Loader/Loader"
import Error from "../Error/Error"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import { fetchImages } from "../../imagesAPI"
import { useState, useEffect } from "react"
import ImageModal from "../ImageModal/ImageModal"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    
    padding: '0',
    border: 'none',
    borderRadius: '0',
   
  },
  overlay: {
    backgroundColor: 'rgb(1, 1, 1, 0.9)',
       
   } 
};

function App() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [image, setImage] = useState();
  const [showBtn, setShowBtn] = useState(false);

   
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal(e) {
      if (e.target.nodeName !== 'IMG') {
    return;
  }

    setIsOpen(true);
    e.preventDefault();
    setImage(e.target.dataset.source) 
  }


  function closeModal(e) {
    e.preventDefault();
      setIsOpen(false);
    
  }

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
                setShowBtn(data.total_pages > page ? true : false)
      
        setImages((prevImages) => { return [...prevImages, ...data.results] });

    } catch (error) {
      setError(true);
    }
    finally {
        setLoading(false);
             }
    }
    getImages()

  }, [query, page]) 

    return (
      <div> 
        <SearchBar handleSearch={handleSearch} />
        {error && <Error/>}
        {loading && <Loader/>}
        {images.length > 0 && <ImageGallery images={images} openModal={openModal} closeModal={ closeModal} modalIsOpen={modalIsOpen}/>}
        <ImageModal
      
          openModal={openModal} modalIsOpen={modalIsOpen} closeModal={closeModal} image={image} customStyles={ customStyles} />
        {images.length > 0 && !loading &&
          showBtn &&
          <LoadMoreBtn onClick={handleLoadMore} />}
      </div>
    )
  
}

    export default App
