import "dotenv/config"

import { account, league, summoner } from "./request"


async function main() {
    if (!process.env.RIOT_KEY) {
        console.error("RIOT api key not found")
        return
    }

    const a = await account("fastmiaou", "2601")
    const s = await summoner(a.puuid)
    console.log(s)
    console.log(await league(s.id))
}

main()
