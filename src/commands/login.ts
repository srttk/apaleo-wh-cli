import { program } from 'commander'
export const loginCommand = program.command("login")
    .action(async () => {

        console.log(`List`)



        // server.close()

    })

function sleep(time = 1000) {

    return new Promise((resolve) => {

        let t = setTimeout(() => {
            clearTimeout(t);
            resolve(true)

        }, time)

    })
}