import { program } from 'commander'
import { getApaleoInstance } from '../init'
import { getError } from '../utils'
export const deleteCommand = program.command("delete <id>")
    .description("Delete webhook by id")
    .action(async (id) => {

        try {

            const apaleo = getApaleoInstance();

            let whId = await apaleo.webhooksDelete(id)

            console.log(`Webhook deleted ${whId}`)
        }
        catch (e) {

            getError(e)
        }


    })