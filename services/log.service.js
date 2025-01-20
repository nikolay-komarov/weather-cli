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

const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.bgYellow(' WEATHER ')}
    ${icon} ${res.weather[0].description}
    Температура ${res.main.temp} (ощущается как ${res.main.feels_like})
    Влажность ${res.main.humidity}
    Скорость ветра ${res.wind.speed}
		`
  );
}

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
  printWeather,
};
