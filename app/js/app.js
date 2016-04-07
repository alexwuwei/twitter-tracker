'use strict';

var socket = window.io();
var tweetLi = document.getElementById('tweet-list');

var prependTweet = (tweet) => {
  var tweetEl = document.createElement('li');
  tweetEl.innerHTML = '<img src="' + tweet.user.profile_image_url + '" alt="profile image"><p>' + tweet.text + '</p>';
  tweetLi.insertBefore(tweetEl, tweetLi.firstChild);
};

socket.on('tweets', (tweets) => {
  tweets.forEach((tweet) => {
    prependTweet(tweet);
  });
});

socket.on('tweet', (tweet) => {
  prependTweet(tweet);
});
