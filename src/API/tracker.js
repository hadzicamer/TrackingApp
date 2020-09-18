import axios from 'axios';

export default axios.create({
baseURL:' http://5202971b9dae.ngrok.io'
});


{/*
axios- to make our requests to API
URL - ngrok(open up direct connection from express API and give public API to get acess)
you must create new instance every 8 hours to get to your localhost machine
*/
}
