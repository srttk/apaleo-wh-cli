import { program } from 'commander'
import Table from 'cli-table'
import { loadingText, getError } from '../utils'

import { getApaleoInstance } from '../init'
export const listCommands = program.command("list")
    .description("List webhooks")
    .action(async () => {

        const apaleo = getApaleoInstance();

        const spinner = loadingText("Loading subscriptions")
        try {

            let webhooks = await apaleo.webhooksList()

            spinner.stop()

            if (webhooks.length === 0) {

                console.log(`No subscription available`)
                return
            }

            var table = new Table({
                head: ['# ID', 'Endpoint url', 'Hotels', "Topics"],
                colWidths: [40, 50, 20, 30]
            });


            webhooks.map(wh => {
                table.push([
                    wh.id,
                    wh.end_point_url,
                    wh.hotel_ids.join(','),
                    wh.topics.join(',')
                ])
            })


            console.log(table.toString());
        }

        catch (e) {
            spinner.stop()
            getError(e)
        }







    })