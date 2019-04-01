import React from 'react';

const Page = (props) => {
  return ( <div>
    <h1>Hello, Next.js</h1>
    <pre>{JSON.stringify(props, undefined, 2)}</pre>
  </div> );
}

Page.getInitialProps = async function({ isServer }) {

  return {
    isServer,
    smaple: 'data'
  }
}
 
export default Page;