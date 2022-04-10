/*jshint esversion: 8 */
import { base64Password } from "../lib/base64-password.js";
import { Command as c } from "commander";
import { complexPassword } from "../lib/complex-password.js";
import { memorablePassword } from "../lib/memorable-password.js";

// Initializing Variables
const args = process.argv.slice(2);
const program = new c();

(async () => {
  program
    .version("1.0.0")
    .option("-t, --type <type>", "Specify a type (base64, complex, memorable)")
    .option("-i, --iteration <numbers>", "Specify a number of iteration")
    .option("-s, --separator <char>", "Specify a character for the separator")
    .parse(process.argv);

  if (args.length === 0) {
    program.help();
  } else if (args[1] == "memorable") {
    memorablePassword();
  } else if (args[1] === "complex") {
    complexPassword();
  } else if (args[1] === "base64") {
    base64Password();
  }
})();
