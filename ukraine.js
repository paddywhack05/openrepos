const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "ukraine",
description:"ukraine command",
execute(message){
    redditFetch({
        subreddit:'ukraine',
        sort: 'top',
        allowNSFW: false,
       allowCrossPost: true,
        allowVideo: true,
        allowModPost: false,
       }).then(post => {
        console.log(post.length);
        if (post.selftext.length >= 1999){ 
        message.channel.send(`im sorry but that post has over 2000 charecters and is to long to post in discord`)
        message.channel.send("!ukraine")
     return; }
           if(post.upvote_ratio >= 0.90){
               message.channel.send(`here is news about ukraine ${message.author} ${post.title} ${post.selftext} ${post.url}`);
            }else {
                message.channel.send(`im sorry but that post has a ${post.upvote_ratio} upvote ratio and he may have betrayed glorious Ukrain with russian propaganda here is another`)
                message.channel.send("!ukraine")
            }  
         });
}
}
