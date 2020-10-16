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
