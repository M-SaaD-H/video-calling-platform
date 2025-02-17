import { useState } from 'react'
import { Link } from 'react-router-dom';

function Landing() {
  const [name, setName] = useState("");

  return (
    <div className='flex items-center justify-center gap-2'>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value)
        }}
        value={name}
        className='border-gray-600 border-2 outline-black py-2 px-4 rounded-md'
      />
      <Link to={`/room/${name}`} className='py-2 px-4 bg-black text-white rounded-md'>
        Join
      </Link>
    </div>
  )
}

export default Landing