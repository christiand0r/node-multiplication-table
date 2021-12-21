import Yargs from "yargs";
import { hideBin } from "yargs/helpers";

//Instance of Yargs
const yargs = Yargs(hideBin(process.argv));

const argv = yargs
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description: "Number base for the multiplication table",
  })
  .option("t", {
    alias: "table",
    type: "boolean",
    boolean: true,
    default: false,
    description: "Indicates whether the table should be printed",
    demandOption: false,
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    description: "Indicates how far the table should go",
    demandOption: false,
  }).argv;

export { argv };
