import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';

import BaseLayout from '../components/layouts/BaseLayout';

class Portfolio extends Component {
  static async getInitialProps() {
    let posts = [];
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = res.data;
    } catch (err) {
      console.log(err);
    }

    return { posts: posts.splice(0, 20) };
  }

  render() {
    const { posts } = this.props;

    const renderPost = posts => {
      return posts.map(post => {
        return (
          <li key={post.id}>
            <Link as={`/portfolio/${post.id}`} href='/portfolio/[id]'>
              <a style={{ fontSize: '20px' }}>{post.title}</a>
            </Link>
          </li>
        );
      });
    };
    return (
      <BaseLayout>
        <h1>Portfolios Page!</h1>
        <ul>{renderPost(posts)}</ul>
      </BaseLayout>
    );
  }
}

export default Portfolio;
