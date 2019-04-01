import React from 'react';

const Page = (props) => {
  return <div>
    <pre>{JSON.stringify(props, undefined, 2)}</pre>
  </div>;
}
 
Page.getInitialProps = async function({req}) {


  let query = req.query;
  return {
    query
  }
}

export default Page;