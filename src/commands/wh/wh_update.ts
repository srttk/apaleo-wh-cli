import { program } from 'commander'
import { getApaleoInstance } from '../../init'
import { getError, loadingText } from '../../utils'
import DATA from '../../data.json'
export const whUpdate = program.command("update <id>")
    .description("Update id from data.json with data create property")
    .action(async (id) => {

        const apaleo = getApaleoInstance();

        let s = loadingText(`Updating ${id}`)

        try {

            let whId = await apaleo.webhooksUpdate(id, DATA)
            s.stop()
            console.log(`Webhook updated ${whId}`)
        }
        catch (e) {
            s.stop()
            getError(e)
        }

    })