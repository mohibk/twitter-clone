import React, { useState, useEffect } from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import db from '../firebase';
import FlipMove from 'react-flip-move';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.timestamp}
            displayName={post.displayName}
            avatar={post.avatar}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
          />
        ))}
      </FlipMove>
      <div className="feed__footer">
        <HomeIcon className="feed__footerIcon" />
        <SearchIcon className="feed__footerIcon" />
        <NotificationsNoneIcon className="feed__footerIcon" />
        <MailOutlineIcon className="feed__footerIcon" />
      </div>
    </div>
  );
};

export default Feed;
