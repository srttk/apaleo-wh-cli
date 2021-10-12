import { program } from "commander";
import { getApaleoInstance } from "../../init";
import { getError, loadingText } from "../../utils";
export const whDelete = program
  .command("delete [id]")
  .description("Delete webhook by id")
  .option("-a, --all", "Delete all")
  .action(async (id: string = "") => {
    let s = loadingText(`Deleting `);
    const apaleo = getApaleoInstance();
    let options = whDelete.opts();
    let ids = id.split(",");

    if (options.all) {
      let whs = await apaleo.webhooksList();

      ids = whs.map((w) => String(w.id));
    }

    if (ids.length === 0) {
      console.log(`Nothing to delete`);
      process.exit(0);
    }

    for (let i = 0; i < ids.length; i++) {
      let wid = ids[i];
      try {
        let whId = await apaleo.webhooksDelete(wid);
        s.stop();
        console.log(`Webhook deleted ${whId}`);
      } catch (e) {
        s.stop();
        getError(e);
      }
    }
  });
