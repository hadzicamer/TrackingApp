import axios from 'axios';

export default axios.create({
baseURL:'http://9e7340daa8cf.ngrok.io'
});


//axios- to make our requests to API
// URL - ngrok(open up direct connection from express API and give public API to get acess)
// you must create new instance every 8 hours to get to your localhost machine
