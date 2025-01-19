import https from 'https';
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";

const getWeather = async (city) => {
  // const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API key}`;

  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error('не задан ключ API, задайте ключ через команду -t [API_KEY]');
  }

  const url = new URL('https://api.openweathermap.org/data/2.5/weather');
  url.searchParams.append('q', city);
  url.searchParams.append('appid', token);
  url.searchParams.append('lang', 'ru');
  url.searchParams.append('units', 'metric');


  https.get(url, response => {
    let result = '';
    response.on('data', (chunk) => {
      result += chunk;
    });

    response.on('end', () => {
      console.log(result);
    });

    response.on('error', (error) => {
      console.log(error);
    })
  });
}

export { getWeather };
