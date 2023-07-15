import React from 'react';
import { atomOneDark, CodeBlock,nord } from "react-code-blocks";


const DefaultCodeBlock = ({text}) => {
  return (
    <div className='rounded-md'>

    <CodeBlock
      text={text}
      language="solidity"
      showLineNumbers={true} 
      theme={atomOneDark}
      customStyle={{
        width: '600px',
        height: '450px',
        fontSize: '12px',
        borderRadius: '8px', 
        maxWidth:'600px'

        // overflow: 'hidden',
      }}
    />
    </div>
  );
};

export default DefaultCodeBlock;
