import { program } from 'commander'
import Table from 'cli-table'
import { getApaleoInstance } from '../init'

export const accountCommand = program.command("account")
    .description("Get account details")
    .action(async () => {

        const apaleo = getApaleoInstance();

        let account = await apaleo.getAccount()
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
    })