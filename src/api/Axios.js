import axios from 'axios';
 
export const Axios= axios.create({
  baseURL:"https://api.coingecko.com/api/v3/coins/"
});

