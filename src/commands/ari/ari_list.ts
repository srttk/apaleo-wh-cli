import { program } from "commander";
import Table from "cli-table";
import { getApaleoInstance } from "../../init";
import { getError, loadingText } from "../../utils";

export const ariList = program
  .command("list")
  .description("list ari subscriptions")
  .action(async () => {
    const apaleo = getApaleoInstance();

    const spinner = loadingText("Loading ari subscriptions");
    try {
      let subscriptions = await apaleo.getARISubscriptions();

      spinner.stop();

      if (subscriptions.length === 0) {
        console.log(`No webhook subscription available`);
        return;
      }

      var table = new Table({
        head: ["# ID", "Endpoint url", "Hotels", "Rateplans"],
        colWidths: [40, 50, 20, 30],
      });

      subscriptions.map((wh) => {
        table.push([
          wh.id,
          wh.endpoint_url,
          wh.hotel_id,
          wh.rate_plan_ids.join(","),
        ]);
      });

      console.log(table.toString());
    } catch (e) {
      spinner.stop();
      getError(e);
    }
  });
