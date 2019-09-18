import React, { Component, Fragment } from 'react';
import Link from 'next/link';

import '../../styles/main.scss';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a> About</a>
        </Link>
        <Link href='/portfolios'>
          <a> Portfolios</a>
        </Link>
        <Link href='/blogs'>
          <a> Blogs</a>
        </Link>
        <Link href='/cv'>
          <a> C.V</a>
        </Link>
        <style jsx>
          {`
            a {
              font-size: 20px;
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export default Header;
