#!usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp } from "./services/log-service.js";

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }
  if (args.s) {
    // todo: сохранить город
  }
  if (args.t) {
    // todo: сохранить токен
  }

  // todo: вывести погоду
}

initCLI();
