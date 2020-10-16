var fs = require('fs')

var csvWriter = require('csv-write-stream')
var writer = csvWriter(
    { headers: ["user", "text"],
    separator: '|'}
)

writer.pipe(fs.createWriteStream('data.csv'))

fs.readFile("tweets.json", 'utf8', (err, data) => {
    if (err) {
        console.log('Error: ' + err)
        return
    }

    data = JSON.parse(data)
    data.forEach(element => {
        // console.log(element)
        user = element['id']
        tweet_text = element['text']
        tweet_text.replace(/\s+/g, '')
        writer.write([user, tweet_text])
    })
    writer.end()
})
