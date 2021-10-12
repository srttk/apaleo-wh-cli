import { program } from "commander";
import { getApaleoInstance } from "../../init";
import { getError, loadingText } from "../../utils";
export const ariSync = program
  .command("sync <id>")
  .description("Trigger full sync by id ")
  .action(async (id) => {
    const apaleo = getApaleoInstance();

    let s = loadingText(`Trigger full sync ${id}`);

    try {
      let whId = await apaleo.triggerARISubscriptionEvent(id, "sync");
      s.stop();
      console.log(`Sync triggered ${whId}`);
    } catch (e) {
      s.stop();
      getError(e);
    }
  });
