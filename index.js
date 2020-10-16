const Twitter = require('twitter')
const fs = require('fs')

require('dotenv').config()

const tweets_threshold = 200
const consumer_key = process.env.CONSUMER_KEY
const consumer_secret = process.env.CONSUMER_SECRET
const oauth_access = process.env.OAUTH_ACCESS
const oauth_secret = process.env.OAUTH_SECRET



const dumpTweetsById = async(client, id) => {
    try {
        const res = await client.get('statuses/user_timeline', {user_id: id, exclude_replies: true, include_rts: false, count: tweets_threshold})
        return res

    } catch (error) {
        console.error(`ERROR! error for user id ${id}`)
        console.error(`${JSON.stringify(error)}`)
    }

}

const getFollowing = async(client) => {
    const res = await client.get('friends/ids', {})
    console.log("ids:", res)
    return res
}

const client = new Twitter({
    consumer_key: consumer_key,
    consumer_secret: consumer_secret,
    access_token_key: oauth_access,
    access_token_secret: oauth_secret
  });




const main = async() => {

    let data = []
    const {ids} = await getFollowing(client)

    for(let i = 0; i < ids.length; i++){
        resp = await dumpTweetsById(client, ids[i])
        if(resp)
            data.push( ... resp )
    }

    fs.writeFile(`tweets.json`, JSON.stringify(data),  err  => {
        if (err) {
            console.log(err);
        }
    });

    console.log("Finished retrieving tweets")
}

if (require.main === module) {
    main();
}


