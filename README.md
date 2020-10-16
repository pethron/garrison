![logo](.github/images/logo.png)

Garrison is the way to tidy up your Twitter feed.

It runs a machine learning algorithm over the people you follow to sort them in list based on topics they talk about.

# How it works
The focus of this project is to find a way to normalize Twitter home feed by clustering following people in lists. Steps to be made are:

## Dataset
1. Authorize the twitter user
2. Retrieve the list of ids of friends (account you are following)
3. Retrieve up to the latest 200 tweets for each friend

## ML Algorithm
1. Analyze each person tweets and reply to classify topics for each person by:
    1. Bio - usually in the bio there are useful informations to extract
    2. Topic - what topic is the person tweeting about?
    3. Relevance - how much is each topic relevant? We want to get the topics that have the most relevance for each person
3. Make clusters of people by topic and relevance

## How Garrison Works
![works](.github/images/garrison_works.jpg)

*Ohohoh, times to clean things up Ladies!*

Garrison comes in two test flavours as we are striving to find the best working solution: 
- TF-IDF matrix and k-means clustering in version 1
- LDA + Embeddings in version 2

Garrison gives result for each Tweet text in terms of cluster (topic) with associated Bag-of-words, each one with a % of occurence, associating the **User**

## The Pipeline
![works](.github/images/garrison_pipeline.jpg)

*Ohohoh, I'm working, no Meganoid is above the Garrison way*

Garrison **Pipeline** is composed of 3 main elements:
- *Garrison Tweeter-Catcher*: **Node.js solution with index.js** to run the script and an Auth file that contains credentials to authenticate to Twitter API.
  The solution takes **2 arguments**: **-u** the **Twitter handle** and **-c** the **max number of tweet to retrieve**. If -u is not used Garrison get the following tweets and not the personal ones.
- *Garrison Csv Converter*: in order to make a dataset for *Garrison Tidy* we use this one to convert the json output to a standard pre-formatted **csv** file.
- *Garrison Tidy*: it comes as said in 2 versions: just load in Google colab the **ipynb** and run it passing the test dataset from the steps above.

## Known actual limitations

- In counting: specifies the number of Tweets to try and retrieve, up to a maximum of 200 per distinct request. The value of count is best thought of as a limit to the number of Tweets to return because suspended or deleted content is removed after the count has been applied. We include retweets in the count, even if include_rts is not supplied. It is recommended you always send include_rts=1 when using this API method.

## .env for Node.js example
![works](.github/images/garrison_env.jpg)

*Ohohoh, get it done my friends!*

For Node.js to work you'll need a .env file with your Twitter api credentials

```
CONSUMER_KEY = XXXXXXXXXXXXXXXXXXXXXXXXXX
CONSUMER_SECRET = XXXXXXXXXXXXXXXXXXXXXXXXXx
BEARER_TOKEN = XXXXXXXXXXXXXXXXXXXXXXXXXx
OAUTH_ACCESS =  YYYYYYYYYYYYYY
OAUTH_SECRET = YYYYYYYYYYYYYYYYY
```
- Those with X are already provided by your Twitter developer portal.
- Those with Y can be retrieved by running *auth.js* and following the provided instructions.

## To Launch Garrison Tweeter-Catcher and Garrison Csv Converter together

Launch the provided *bash* command: 

```*garrison.sh* -c <count> -u [<user>]```

