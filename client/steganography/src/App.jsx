import React, { useState } from 'react';
import Encode from './Encode';
import Decode from './Decode';

function App() {
  const [drop, setDrop] = useState(false);
  const [enc, setEnc] = useState(null);
  const [dec, setDec] = useState(null);
  const [dropMenuText, setDropMenuText] = useState("Select Mode");

  const handleEncodeClick = () => {
    setDropMenuText("Encode");
    setDrop(false);
    setEnc(true);
    setDec(false);
  };

  const handleDecodeClick = () => {
    setDropMenuText("Decode");
    setDrop(false);
    setEnc(false);
    setDec(true);
  };

  const handleDropChange = () => {
    setDrop(!drop);
  };

  return (
    <div className="pt-64 App min-h-screen font-sans bg-gradient-to-b font-semibold bg-gray-900 text-white">
      <div className='text-center'>
        <h1 className='text-6xl p-10'>Image Steganography</h1>
        <h2>Upload an image that you would like to encode or decode</h2>
        <h2>The steganography technique involved here is based on LSB Manipulation</h2>
      </div>
      <div>
        <div className='text-center pt-12'>
          <button
            type="button"
            className="inline-flex w-1/4 text-center justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-black transition-all"
            aria-expanded={drop}
            aria-haspopup="true"
            onClick={handleDropChange}
          >
            {dropMenuText}
            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>

          {drop && (
            <div className='flex flex-col transition-all' id='change'>
              <ul className='flex flex-col transition-all items-center '>
                <li onClick={handleEncodeClick} className='cursor-pointer  py-2 hover:border hover:border-white w-1/4 shadow-sm bg-black ease-linear duration-500 '>
                  <button >Encode 🔒</button>
                </li>
                <li onClick={handleDecodeClick} className='cursor-pointer py-2 hover:border hover:border-white w-1/4 shadow-sm bg-black rounded-b-xl ease-linear hover:bg-gradient-to-br duration-500'>
                  <button >Decode 🔓</button>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div>
          {enc && <Encode />}
          {dec && <Decode />}
        </div>
      </div>
    </div>
  );
}

export default App;