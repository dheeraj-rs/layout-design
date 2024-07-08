'use client';
import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { LiveProvider, LivePreview } from 'react-live';
import CldImage from './CldImage';

const Playground = ({ code: defaultCode }) => {
  const [code, setCode] = useState(defaultCode);
  function handleOnChange(value) {
    console.log('value', value);
    setCode(value || '');
  }
  return (
    <div className="bg-white h-screen grid grid-cols-2">
      <div className="bg-[#1e1e1e] py-6">
        <Editor
          className="h-screen"
          defaultLanguage="javascript"
          defaultValue={code.trim()}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: {
              enabled: false,
            },
            contextmenu: false,
          }}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <div className="flex max-w-3xl m-auto align-center items-center justify-center p-6">
          <LiveProvider code={code} scope={{ CldImage }}>
            <LivePreview />
          </LiveProvider>
        </div>
      </div>
    </div>
  );
};

export default Playground;
