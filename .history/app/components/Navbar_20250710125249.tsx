import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className="flex justify-between items-center">
<Link href="/" ><Image src="/logo.svg" alt="Next Pitch Startup Logo" width={150} height={50} className="object-contain"/></Link>
        <ul className="flex gap-5">
<Link/>

      </nav>

    </header>
  )
}

export default Navbar