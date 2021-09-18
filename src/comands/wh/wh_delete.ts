import { program } from 'commander'
import { getApaleoInstance } from '../../init'
import { getError, loadingText } from '../../utils'
export const whDelete = program.command("delete <id>")
    .description("Delete webhook by id")
    .action(async (id) => {

        let s = loadingText(`Deleting ${id}`)
        try {

            const apaleo = getApaleoInstance();

            let whId = await apaleo.webhooksDelete(id)
            s.stop()
            console.log(`Webhook deleted ${whId}`)
        }
        catch (e) {
            s.stop()
            getError(e)
        }


    })