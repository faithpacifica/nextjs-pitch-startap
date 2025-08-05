import { EyeIcon } from 'lucide-react';
import { formatDate } from '../utils';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Author, Startup } from '../sanity/types';
import { STARTUPS_QUERYResult } from '@/sanity/types';

type StartupCardProps = {
  post: STARTUPS_QUERYResult[number]; // ✅ exact match
};

export type StartupTypeCard = Omit<Startup, 'author'> & { author?: Author };

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
	const {
		_createdAt,
		views,
		author,
		title,
		category,
		_id,
		image,
		description,
	} = post;


	return (
		<li className="startup-card group">
			<div className="flex-between">
				<p className="startup_card_date">{formatDate(_createdAt)}</p>
				<div className="flex gap-1.5">
					<EyeIcon className="size-6 text-pinkRose" />
					<span className="text-16-medium">{views}</span>
				</div>
			</div>
			<div className="flex-between mt-5 gap-5">
				<div className="flex-1">
					<Link href={`/user/${author?._id}`}>
						<p className="text-16-medium line-clamp-1">{author?.name}</p>
					</Link>
					<Link href={`/startup/${_id}`}>
						<h3 className="text-26-semibold line-clamp-1">{title}</h3>
					</Link>
				</div>
				<Link href={`/user/${author?._id}`}>
					<Image
						src={image || '/placeholder.png'}
						width={48}
						height={48}
						alt="placeholder"
						className="rounded-full h-12"
					/>
				</Link>
			</div>
			<Link href={`/startup/${_id}`}>
				<p className="startup-card_desc">{description}</p>

				<img src={image  || '/placeholder.png'} alt="placeholder" className="startup-card_img" />
			</Link>

			<div className="flex-between gap-3 mt-5">
				<Link href={`/?query=${category?.toLowerCase()}`}>
					<p className="text-16-medium">{category}</p>
				</Link>
				<Button className="startup-card_btn" asChild>
					<Link href={`/startup/${_id}`}>Details</Link>
				</Button>
			</div>
		</li>
	);
};

export default StartupCard;
