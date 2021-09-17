import { program } from 'commander'
import { getApaleoInstance } from '../init'
import { getError, loadingText } from '../utils'
import DATA from '../data.json'
export const createCommand = program.command("create")
    .description("Create new web hook from data.json create property")
    .action(async () => {

        const apaleo = getApaleoInstance();

        const s = loadingText("Creating webhook subscription")

        try {

            let whId = await apaleo.webhooksCreate(DATA)

            s.stop()

            console.log(`Webhook created ${whId}`)
        }
        catch (e) {

            s.stop()

            getError(e)
        }


    })