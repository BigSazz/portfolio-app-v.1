import React, { Component } from 'react';
import { withRouter } from 'next/router';
import axios from 'axios';

import BaseLayout from '../../components/layouts/BaseLayout';

class Portfolio extends Component {
  static async getInitialProps(context) {
    let post = {};
    const postId = context.query.id;
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      post = res.data;
    } catch (err) {
      console.log(err);
    }

    return { post };
  }
  render() {
    const { post } = this.props;
    return (
      <BaseLayout>
        <h1>A Portfolio Page!</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
