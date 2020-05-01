import React from 'react';
import PropTypes from 'prop-types';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import './index.css';

export default function Layout({ first, second }) {
  return (
    <>
      <GatsbySeo title="Karolis Šarapnickis" description="I build neat things using JavaScript." />
      <main className="Layout antialiased flex flex-col sm:flex-row">
        <div className="Layout__first bg-teal-500 flex flex-col justify-center items-center sm:items-end px-8 pb-2 sm:pb-0">
          <div className="sm:hidden" style={{ height: 25 }} />
          {first}
        </div>
        <div className="bg-teal-500 sm:hidden">
          <svg
            className="w-full"
            preserveAspectRatio="none"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 50V48L50 0V2L0 50Z" fill="black" />
            <path d="M0 50L50 2V50H0Z" fill="white" />
          </svg>
        </div>
        <div className="Layout__second flex-1 flex flex-col justify-center sm:items-start px-8 pt-2 sm:pt-0">
          {second}
          <div style={{ height: 25 }} className="sm:hidden" />
        </div>
      </main>
    </>
  );
}

Layout.propTypes = {
  first: PropTypes.node,
  second: PropTypes.node,
};
