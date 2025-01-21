#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import {
  printError,
  printHelp,
  printSuccess,
  printWeather
} from "./services/log.service.js";
import {
  getKeyValue,
  saveKeyValue,
  TOKEN_DICTIONARY
} from "./services/storage.service.js";
import { getIcon, getWeather } from "./services/api.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError('не передан токен');
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('токен сохранен');
  } catch (e) {
    printError(e.message);
  }
}

const saveCity = async (city) => {
  if (!city.length) {
    printError('не передан город');
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess('город сохранен');
  } catch (e) {
    printError(e.message);
  }
}

const getForecast = async () => {
  const city = await getKeyValue('city');

  try {
    const weather = await getWeather(city);
    printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (e) {
    if (e?.response?.status === 404) {
      printError('неверно указан город');
    } else if (e?.response?.status === 401) {
      printError('неверно указан токен');
    } else {
      printError(e.message);
    }
  }
}

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s)

  }
  if (args.t) {
    return saveToken(args.t);
  }

  return getForecast();
}

initCLI();
