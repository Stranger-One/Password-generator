import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function App() {

  let numbers = '0123456789'
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  let symbols = '!@#$%^&*()-_=+[{]};:<.>/?';

  const [length, setLength] = useState(15);

  const [includeNumber, setIncludeNumber] = useState(false);
  const [includelowercase, setIncludelowercase] = useState(false);
  const [includeuppercase, setIncludeuppercase] = useState(false);
  const [includesymbol, setIncludesymbol] = useState(false)

  const [password, setPassword] = useState('')
  
  function generate() {
    if(!includeNumber && !includelowercase && !includeuppercase && !includesymbol){
      toast.error('Atleast one option should be checked', {
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
      return;
    }
    let sampleSpace = '';
    if (includesymbol) sampleSpace += symbols;
    if (includeNumber) sampleSpace += numbers;
    if (includelowercase) sampleSpace += lowercase;
    if (includeuppercase) sampleSpace += uppercase;
    let passwordGenerate = "";

    for (var i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * sampleSpace.length);
      passwordGenerate += sampleSpace[index];
    }
    setPassword(passwordGenerate)
    toast.success('Your password is ready', {
      icon: '✔',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
  }

  function copyToClip() {
    navigator.clipboard.writeText(password)
  }

  return (
    <>
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>

      <div className=" w-full h-screen bg-slate-500 flex items-center justify-center text-black ">

        <div className=' min-w-[300px] min-h-[500px] bg-slate-700 flex flex-col items-center capitalize p-4 rounded-md' >
          <h1 className='text-3xl underline mb-4 ' >generate your password</h1>

          <div className=' w-full h-10 bg-slate-500 flex justify-center items-center gap-4 mb-2 rounded-md'>
            <input type="text" name="" id="" value={password} className=' border-none outline-none bg-transparent p-1 w-[70%]' />
            <button className=' border-none rounded-lg capitalize text-lg font-semibold px-2  active:translate-x-[-1px] active:translate-y-[-1px] ' onClick={copyToClip}>copy</button>
          </div>

          <div className=' w-full mb-2'>

            <h1 className=' capitalize  ml-2 mb-1'>length: {length} </h1>

            <div className=' w-full h-10 bg-slate-500 flex items-center gap-4 mb-2 px-2 rounded-md '>
              <h2 className=' '>5</h2>
              <input type="range" name="" id="" min={5} max={25} value={length} onChange={(e) => setLength(e.target.value)} className=' w-full bg-slate-100 ' />
              <h2 className=' ' >25</h2>
            </div>

          </div>

          <div className=' w-full bg-transparent  gap-2'>

            <h1 className=' leading-tight ml-2 mb-1 '>settings</h1>

            <div className=' w-full h-10 bg-slate-500 flex justify-between items-center px-2 rounded-md mb-2 '>
              <label htmlFor="includeNumber" className=' text-lg capitalize '>include number</label>
              <input type="checkbox" id='includeNumber' checked={includeNumber} onClick={() => setIncludeNumber(!includeNumber)} className=' size-5 cursor-pointer ' />
            </div>

            <div className=' w-full h-10 bg-slate-500 flex justify-between items-center px-2 rounded-md mb-2 '>
              <label htmlFor="includelowercase" className=' text-lg capitalize '>include lowercase</label>
              <input type="checkbox" id='includelowercase' checked={includelowercase} onClick={() => setIncludelowercase(!includelowercase)} className=' size-5 cursor-pointer' />
            </div>

            <div className=' w-full h-10 bg-slate-500 flex justify-between items-center px-2 rounded-md mb-2 '>
              <label htmlFor="includeuppercase" className=' text-lg capitalize '>include uppercase</label>
              <input type="checkbox" id='includeuppercase' checked={includeuppercase} onClick={() => setIncludeuppercase(!includeuppercase)} className=' size-5 cursor-pointer' />
            </div>

            <div className=' w-full h-10 bg-slate-500 flex justify-between items-center px-2 rounded-md mb-2 '>
              <label htmlFor="includesymbol" className=' text-lg capitalize '>include symbol</label>
              <input type="checkbox" id='includesymbol' checked={includesymbol} onClick={() => setIncludesymbol(!includesymbol)} className=' size-5 cursor-pointer' />
            </div>
 
          </div>

          <div className=' w-full h-10 bg-slate-500 flex items-center py-2 gap-2 rounded-md mt-5'>
            <button className='w-full h-full bg-transparent border-none outline-none text-lg' onClick={generate}>Generate Password</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
