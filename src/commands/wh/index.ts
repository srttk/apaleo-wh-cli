import { program } from 'commander'
import { whList } from './wh_list'
import { whCreate } from './wh_create'
import { whUpdate } from './wh_update'
import { whDelete } from './wh_delete'
import { whNew } from './wh_new'

export const whProgram = program.command('wh')
    .description('webhook subscriptions')
    .addCommand(whList)
    .addCommand(whCreate)
    .addCommand(whUpdate)
    .addCommand(whDelete)
    .addCommand(whNew)