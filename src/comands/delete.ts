import { program } from 'commander'
import { getApaleoInstance } from '../init'
export const deleteCommand = program.command("delete <id>")
    .description("Delete webhook by id")
    .action(async (id) => {

        const apaleo = getApaleoInstance();

        let whId = await apaleo.webhooksDelete(id)

        console.log(`Webhook deleted ${whId}`)

    })