import { program } from 'commander'
import Table from 'cli-table'
import { getApaleoInstance } from '../init'
import { getError, loadingText } from '../utils'

export const accountCommand = program.command("account")
    .description("Get account details")
    .action(async () => {

        const apaleo = getApaleoInstance();

        let s = loadingText("Loading account info")
        try {

            let account = await apaleo.getAccount()
            s.stop();
            var table = new Table({
                head: ['Code', 'Name', "Type"],
                colWidths: [20, 30, 20]
            });

            table.push([
                account.code,
                account.name,
                account.type
            ])

            console.log(table.toString());
        }
        catch (e) {
            s.stop();
            getError(e)
        }
    })