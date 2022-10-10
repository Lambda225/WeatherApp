import React from 'react'

function TextBox({children}) {
  return (
    <div className='hidden bg-[rgba(8,41,72,0.3)] w-1/3 pl-10 lg:flex flex-col'>
        {children}
    </div>
  )
}

export default TextBox