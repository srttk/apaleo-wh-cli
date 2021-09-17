import { AxiosError } from 'axios'
import chalk from 'chalk'
import ora from 'ora'
export function getError(e: AxiosError) {

    let msg = e.message

    if (e.response && e.response.data) {

        const { title = null, messages = null } = e.response.data
        if (messages) {
            msg = messages.join(",") || e.message
        }
        else {
            msg = title || e.message
        }
    }

    console.log(chalk.bgRed(chalk.white(msg)))
    return msg
}

export function loadingText(text: string) {
    const spinner = ora(chalk.magentaBright(text)).start();

    return spinner

}