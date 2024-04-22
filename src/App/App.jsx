import SearchBar from "../SearchBar/SearchBar"
import { fetchImages } from "../imagesAPI"



  
    
// fetchImages();

function App() {

  const onSubmit= async () => {

    try {
      const data = await fetchImages()
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }
  }
    



    return (
      <div>
        <SearchBar onSubmit={onSubmit} />
     
      </div>
    )
  
}

    export default App
