import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { auth } from '@/auth';
import {signOut, signIn } from '@/auth'

const Navbar = async () => {

  const session = await auth()
	return (
		<header className="px-5 py-3 bg-white shadow-sm font-work-sans">
			<nav className="flex justify-between items-center">
				<Link href="/">
					<Image src="/logo.png" alt="Logo" width={144} height={30} />
				</Link>

        <div className="flex items-center gap-5 text-bla">
{session && session ? user ?(
  <Link>
  <Link href='startup/create/'>
  <span>Create</span>
  </Link>
  <button onClick={signOut}>
    <span>Logout</span>
  </button>

  Link href = {`/user/${session?.id}`}>
  <span>{session?.user?.name}</span>
  </Link>
  </>
):(
  <button onClick = {signIn('github')}>
    <span>Login with Github</span>
  </button>
)}
        </div>
			</nav>
		</header>
	);
};

export default Navbar;
