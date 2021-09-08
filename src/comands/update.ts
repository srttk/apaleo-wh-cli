import { program } from 'commander'
import { getApaleoInstance } from '../init'
import DATA from '../data.json'
export const updateCommand = program.command("update <id>")
    .description("Update id from data.json with data create property")
    .action(async (id) => {

        const apaleo = getApaleoInstance();

        let whId = await apaleo.webhooksUpdate(id, DATA)

        console.log(`Webhook updated ${whId}`)

    })