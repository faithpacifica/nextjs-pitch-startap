import Link from 'next/link';
import Image from 'next/image';
import { auth,signOut, signIn } from '@/auth';

const Navbar = async () => {
	const session = await auth();
	return (
		<header className="px-5 py-3 bg-white shadow-sm font-work-sans">
			<nav className="flex justify-between items-center">
				<Link href="/">
					<Image src="/logo.png" alt="Logo" width={144} height={30} />
				</Link>

				<div className="flex items-center gap-5 text-black">
					{session && session.user ? (
						<>
							<Link href="/startup/create/">
								<span>Create</span>
							</Link>
							<button onClick={signOut()}>
								<span>Logout</span>
							</button>
							<Link href={`/user/${session.user?.id}`}>
								<span>{session?.user?.name}</span>
							</Link>
						</>
					) : (
						<button onClick={await signIn('github')}>
							<span>Login</span>
						</button>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
