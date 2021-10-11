#!/usr/local/node
import { Command } from "commander";
import { listCommands, accountCommand, loginCommand } from "./commands";
import { whProgram } from "./commands/wh";
import { ariProgram } from "./commands/ari";
import { createApaleoInstance } from "./init";
const program = new Command();

program.version("0.0.0");

program.usage(
  "Apaleo Webhook Manager : list, create, update, delete apaleo webhooks(subscriptions) from command line"
);

program.addCommand(listCommands);
program.addCommand(accountCommand);
program.addCommand(loginCommand);
program.addCommand(whProgram);
program.addCommand(ariProgram);

createApaleoInstance().then(() => {
  program.parse();
});
