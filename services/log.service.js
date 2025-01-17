import chalk from 'chalk';
import dedent from 'dedent-js';

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
		Без параметров - вывод погоды
		-s [CITY] для установки города
		-h для вывода помощи
		-t [API_KEY] для сохранения токена
		`
  );
};

const printError = (message) => {
  console.log(chalk.bgRed(`ERROR: ${message}`));
}

const printSuccess = (message) => {
  console.log(chalk.bgGreen(`SUCCESS: ${message}`));
}


export {
  printHelp,
  printError,
  printSuccess,
};
