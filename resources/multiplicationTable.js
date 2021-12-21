import * as fs from "fs";
import colors from "colors";

const multiplicationTable = async (number = 1, table = false, limit = 10) => {
  try {
    let output = "";
    let outputLog = "";

    for (let i = 0; i <= limit; i++) {
      output += `${number} x ${i} = ${number * i}\n`;
      outputLog += `${number} ${"x".yellow} ${i} ${"=".yellow} ${number * i}\n`;
    }

    if (table) {
      console.log("=================");
      console.log(colors.rainbow(`   Tabla del ${number}   `).bgGrey);
      console.log("=================");
      console.log(outputLog);
    }

    fs.writeFile(`./out/table-${number}.txt`, output, (err) => {
      if (err) throw err;
    });

    return `table-${number}.txt`;
  } catch (err) {
    throw err;
  }
};

export { multiplicationTable };
