import React from 'react';
import { atomOneDark, CodeBlock,dracula,nord } from "react-code-blocks";


const DefaultCodeBlock = ({text}) => {
  return (
    // <div className='rounded-md'>

    <CodeBlock
      text={text}
      language="javascript"
      showLineNumbers={true} 
      theme={dracula}
      customStyle={{
        width: '100%',
        height: '568px',
        fontSize: '16px',
        borderRadius: '8px', 
        maxWidth:'700px',

        overflowY: 'hidden',
      }}
    />
    // </div>
  );
};

export default DefaultCodeBlock;
