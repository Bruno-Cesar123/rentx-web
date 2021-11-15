import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const token = localStorage.getItem('@Rentx:token');

    if (error.response.status === 401 && token) {
      const response = await refreshToken(error);
      return response;
    }

    return Promise.reject(error)
  }
)

async function refreshToken(error: Error) {
  return new Promise((resolve, reject) => {
    try {
      const refresh_token = localStorage.getItem('@Rentx:refresh_token');

      api.post('/refresh-token', {
        token: refresh_token,
      })
        .then(async (res) => {
          localStorage.setItem('@Rentx:token', res.data.token);
          localStorage.setItem('@Rentx:refresh_token', res.data.refresh_token);

          return resolve(res);
        })
        .catch((err) => {
          return reject(error)
        })
    } catch (err) {
      return reject(err);
    }
  })
}