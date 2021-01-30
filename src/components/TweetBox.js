import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import './TweetBox.css';
import db from '../firebase';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      displayName: 'Mohib Khan',
      username: 'mohibkay',
      avatar:
        'https://avatars.githubusercontent.com/u/66241121?s=460&u=f9579b38be7e263cb2644f8e0563defdf82ca197&v=4',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      timestamp: new Date().getTime(),
    });
    setTweetMessage('');
    setTweetImage('');
  };
  const stopTweet = (e) => e.preventDefault();
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars.githubusercontent.com/u/66241121?s=460&u=f9579b38be7e263cb2644f8e0563defdf82ca197&v=4" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={tweetMessage || tweetImage ? sendTweet : stopTweet}
          type="submit"
          className={
            'tweetBox__tweetButton ' +
            (tweetMessage || tweetImage ? 'active' : 'disable')
          }
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
