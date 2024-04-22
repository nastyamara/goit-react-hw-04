import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';



export const fetchImages = async () => {

 

    const response = await axios.get('?client_id=2eiybNV2jmYvvCmeSq4k0xXVz8Fb4618IbCurb7k5wI'
        , {
        params: {
           query: 'boy'
        }
        }
    )
    return response.data;
   
}
