import { program } from "commander";
import { getApaleoInstance } from "../../init";
import { getError, loadingText } from "../../utils";
import DATA from "../../ari.data.json";
export const ariCreate = program
  .command("create")
  .description("Create new ari subscription from ari.data.json create property")
  .action(async () => {
    const apaleo = getApaleoInstance();

    const s = loadingText("Creating ari subscription");

    try {
      let whId = await apaleo.createARISubscription(DATA);

      s.stop();

      console.log(`Ari suscription ${whId}`);
    } catch (e) {
      s.stop();
      getError(e);
    }
  });
