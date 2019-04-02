import React from 'react';

//* scroll component stick on top
const Scroll = props => {
  return (
    // use double {{}} for JSX style
    <div style={{ overflowY: 'scroll', border: '1px solid black', height: '500px' }}>
      {props.children}
    </div>
  );
};

export default Scroll;
