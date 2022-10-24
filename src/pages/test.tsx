import React, { useState } from 'react';

export default function Test() {
  const [mode, setMode] = useState(false);
  return (
    <div className="flex flex-col h-screen bg-slate-800 text-white justify-center items-center space-y-4">
      <h1>Test: {mode ? 'ON' : 'OFF'}</h1>
      <button
        onClick={() => setMode((prev) => !prev)}
        className="bg-slate-300 text-slate-800 p-3 rounded-md w-fit z-50"
      >
        따ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ악
      </button>
      <div
        className={`fixed w-full h-full top-0 right-0 bg-gray-600 text-white transition duration-700 ease-in-out ${
          mode ? 'translate-x-0' : 'translate-x-full'
        } `}
      >
        <p>ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ</p>
      </div>
    </div>
  );
}
