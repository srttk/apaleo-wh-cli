import { program } from "commander";
import { getApaleoInstance } from "../../init";
import { getError, loadingText } from "../../utils";
export const ariDelete = program
  .command("delete [id]")
  .description("Delete ari subscription by id")
  .option("-a, --all", "Delete all")
  .action(async (id: string = "") => {
    let options = ariDelete.opts();
    const apaleo = getApaleoInstance();

    let s = loadingText(`Deleting `);
    let ids = id.split(",");

    if (options.all) {
      let subs = await apaleo.getARISubscriptions();
      ids = subs.map((s) => String(s.id));
    }

    if (id.length === 0) {
      console.log(`No ids`);
      process.exit(0);
    }

    for (let i = 0; i < ids.length; i++) {
      try {
        let sid = ids[i];

        let whId = await apaleo.deleteARISubscription(sid);
        s.stop();
        console.log(`Ari subscription deleted ${whId}`);
      } catch (e) {
        s.stop();
        getError(e);
      }
    }
  });
