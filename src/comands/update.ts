import { program } from 'commander'
import { getApaleoInstance } from '../init'
import { getError } from '../utils'
import DATA from '../data.json'
export const updateCommand = program.command("update <id>")
    .description("Update id from data.json with data create property")
    .action(async (id) => {

        const apaleo = getApaleoInstance();

        try {

            let whId = await apaleo.webhooksUpdate(id, DATA)
            console.log(`Webhook updated ${whId}`)
        }
        catch (e) {
            getError(e)
        }

    })