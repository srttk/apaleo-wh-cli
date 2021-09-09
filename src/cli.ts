#!/usr/local/node
import { Command } from 'commander';
import { listCommands, createCommand, updateCommand, deleteCommand, accountCommand } from './comands';
const program = new Command();


program.version("0.0.0")

program.usage("Apaleo Webhook Manager : list, create, update, delete apaleo webhooks(subscriptions) from command line")

program.addCommand(listCommands)
program.addCommand(createCommand)
program.addCommand(updateCommand)
program.addCommand(deleteCommand)
program.addCommand(accountCommand)

program.parse();