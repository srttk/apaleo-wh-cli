import { program } from 'commander'
import { getError, loadingText } from '../../utils'
import writeJsonFile from 'write-json-file';
export const whNew = program.command("new <name>")
    .description("Create new web hook from data.json create property")
    .action(async (name) => {

        await writeJsonFile(`${name}.wh.json`, sampleJson);

    })


const sampleJson = {
    id: null,
    data: {
        "end_point_url": "",
        "hotel_ids": ["BER"],
        "topics": [
            "RatePlan", "UnitGroup", "Reservation", "Property", "Group", "Block", "Unit",
            "Folio", "Invoice"
        ]

    }
}