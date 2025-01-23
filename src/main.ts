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

    const account = await api.lol.account.byGameNameAndTagLine("fastmiaou", "2601")

    try {
        const matches = await api.lol.match.byPuuid(account.puuid)
        matches.forEach(async item => {
            try {
                console.log(item)
                console.log(await api.lol.match.byMatchId(item))

            } catch (e: any) {
                console.log(e)
            }
        })
    
    } catch (e: any) {
        console.log(e)
    }
}

main()
