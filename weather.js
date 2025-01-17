#!usr/bin/env node
import { getArgs } from "./helpers/args.js";

const initCLI = () => {
  const args = getArgs(process.argv);

  console.log(args);

  if (args.h) {
    // todo: вывести help
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
