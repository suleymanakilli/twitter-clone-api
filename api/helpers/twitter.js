
const { default: axios } = require('axios');

const url="https://api.twitter.com/1.1/search/tweets.json"
require('dotenv').config()
class Twitter{
    get(query, resultType, maxId) {
        return axios.get(url, {
            params: {
                q: query,
                result_type: resultType,
                count: 10,
                tweet_mode: "extended",
                max_id: maxId
            },
            headers:{
                "Authorization": `Bearer ${process.env.TWITTER_API_TOKEN}`
                
            }
        })
    }
}

module.exports=Twitter;