import React, { Component } from 'react';
import { FacebookProvider, Comments } from 'react-facebook';

export default class CommentsFB extends Component {
  render() {
    return (
      <FacebookProvider appId="681371895994182">
        <Comments href="https://www.facebook.com/anitvdotga/posts/647123532410500/" />
      </FacebookProvider>
    );
  }
}