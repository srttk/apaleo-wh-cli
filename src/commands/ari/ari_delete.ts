import { program } from "commander";
import { getApaleoInstance } from "../../init";
import { getError, loadingText } from "../../utils";
export const ariDelete = program
  .command("delete <id>")
  .description("Delete ari subscription by id")
  .action(async (id) => {
    let s = loadingText(`Deleting ${id}`);
    try {
      const apaleo = getApaleoInstance();

      let whId = await apaleo.deleteARISubscription(id);
      s.stop();
      console.log(`Ari subscription deleted ${whId}`);
    } catch (e) {
      s.stop();
      getError(e);
    }
  });
