import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <h1 className='text-5xl text-center my-20 mb-10 font-semibold'>Bringing People Closer, No Matter the Distance.</h1>
      <h2 className="text-3xl text-center my-10 font-semibold">Join With your Loved Ones Now!</h2>
      <Outlet />
    </>
  )
}

export default App
