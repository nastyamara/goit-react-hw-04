import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';



export const fetchImages = async(searchQuery, page) => {

 

    const response = await axios.get('?client_id=2eiybNV2jmYvvCmeSq4k0xXVz8Fb4618IbCurb7k5wI'
        , {
        params: {
                query: searchQuery,
                per_page: 20,
                page: page,
           
           
        }
        }
    )
    return response.data.results;
   
}
