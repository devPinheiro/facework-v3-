import useSWR from 'swr';
import axios from 'axios';

interface Payload {
  email: string;
  password: string;
}

// const login = (url: string, payload: Payload) =>
//   axios.post(url, payload).then((res) => res.data);

// export default async function useLogin(payload: Payload) {
//   const { data, error } = await axios
//     .post('https://burnham.pennee.tech/api/login', payload)
    
// console.log('====================================');
// console.log(data);
// console.log('====================================');
//   const loading = !data && !error;
//   const loggedOut = error && error.status === 403;

//   return {
//     loading,
//     loggedOut,
//     error,
//     user: data,
//   };
// }
