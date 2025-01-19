#!usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";

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

const getForecast = async () => {
  try {
    const weather = await getWeather('moscow');
    console.log(weather);
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
    printHelp();
  }
  if (args.s) {
    // todo: сохранить город

  }
  if (args.t) {
    return saveToken(args.t);
  }

  getForecast();

  // todo: вывести погоду
}

initCLI();
