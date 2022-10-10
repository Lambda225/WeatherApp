import React from 'react'

function Wrapper({children}) {
  return (
    <div className=' min-h-[80%] shadow-lg w-11/12 md:w-4/5 flex overflow-hidden relative '>{children}</div>
  )
}

export default Wrapper