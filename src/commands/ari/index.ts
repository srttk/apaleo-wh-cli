import { program } from "commander";
import { ariList } from "./ari_list";
import { ariCreate } from "./ari_create";
import { ariUpdate } from "./ari_update";
import { ariDelete } from "./ari_delete";
import { ariSync } from "./ari_sync";

export const ariProgram = program
  .command("ari")
  .description("webhook subscriptions")
  .addCommand(ariList)
  .addCommand(ariCreate)
  .addCommand(ariUpdate)
  .addCommand(ariDelete)
  .addCommand(ariSync);
