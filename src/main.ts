import "dotenv/config"

import { Request }  from "./request"
import { Europe, Euw1 } from "./location"


async function main() {
    if (!process.env.RIOT_KEY) {
        console.error("RIOT api key not found")
        return
    }

    let request = new Request(
        new Euw1(),
        new Europe()
    )

    console.log(await request.account("fastmiaou", "2601"))
}

main()
