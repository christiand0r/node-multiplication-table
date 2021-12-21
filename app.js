import { argv } from "./config/yargs.js";
import { multiplicationTable } from "./resources/multiplicationTable.js";

multiplicationTable(argv.b, argv.t, argv.l)
  .then((output) => console.log(`EXITO: El archivo ${output} fue creado`.green))
  .catch((err) =>
    console.log("FALLO: No se ha podido crear el archivo".red, err)
  );
