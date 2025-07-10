import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { auth } from '@/auth';

const Navbar = async () => {

  const session = await auth()
	return (
		<header className="px-5 py-3 bg-white shadow-sm font-work-sans">
			<nav className="flex justify-between items-center">
				<Link href="/">
					<Image src="/logo.png" alt="Logo" width={144} height={30} />
				</Link>

        <div className="flex items-center gap-5">
{session && session ? user ?(
  <>
  <Link href='/'>
  
  </Link>
  </>
)}
        </div>
			</nav>
		</header>
	);
};

export default Navbar;
