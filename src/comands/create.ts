import { program } from 'commander'
import { getApaleoInstance } from '../init'
import { getError } from '../utils'
import DATA from '../data.json'
export const createCommand = program.command("create")
    .description("Create new web hook from data.json create property")
    .action(async () => {

        const apaleo = getApaleoInstance();

        try {

            let whId = await apaleo.webhooksCreate(DATA)

            console.log(`Webhook created ${whId}`)
        }
        catch (e) {

            getError(e)
        }


    })