import React, { Component } from 'react';
import { FacebookProvider, Comments } from 'react-facebook';

export default class CommentsFB extends Component {
  render() {
    return (
      <FacebookProvider appId="2172707499477897">
        <Comments href="https://www.facebook.com/20531316728/posts/10154009990506729/" />
      </FacebookProvider>
    );
  }
}