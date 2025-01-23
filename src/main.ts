import "dotenv/config"

import { Europe, Euw1 } from "./location"
import { Api } from "./api"


async function main() {
    if (!process.env.RIOT_KEY) {
        console.error("RIOT api key not found")
        return
    }

    const api = new Api(
        process.env.RIOT_KEY,
        new Euw1(),
        new Europe()
    )

    const account = await api.league.account("fastmiaou", "2601")
    console.log(account)
}

main()
