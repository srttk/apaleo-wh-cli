import { program } from "commander";
import { getApaleoInstance } from "../../init";
import { getError, loadingText } from "../../utils";
import DATA from "../../ari.data.json";
export const ariUpdate = program
  .command("update <id>")
  .description("Update id from data.json with data create property")
  .action(async (id) => {
    const apaleo = getApaleoInstance();

    let s = loadingText(`Updating ${id}`);

    try {
      let whId = await apaleo.updateARISubscription(id, DATA);
      s.stop();
      console.log(`Ari subscription updated ${whId}`);
    } catch (e) {
      s.stop();
      getError(e);
    }
  });
