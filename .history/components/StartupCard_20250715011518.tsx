import { EyeIcon } from 'lucide-react';
import { formatDate } from '../utils';
import Link from 'next/link';
import Image from 'next/image';

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
	const {
		_createdAt,
		views,
		author: { _id:authorId, name },
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
					<Link href={`/user/${authorId}`}>
						<p className="text-16-medium line-clamp-1">{name}</p>
					</Link>
          <Link href={`/startup/${_id}`}>
          <h3 className='text-26-semibold line-clamp-1'></h3>
          </Link>
				</div>
        <Link href={`/user/${authorId}`}>
          <Image
            src={image}
            width={48}
            height={48}
            alt='placeholder'
            className="rounded-full"
          />
        </Link>
			</div>
      <Link >
      <p className="startup-card-desc">
        {description}
      </p>
      </Link>
		</li>
	);
};

export default StartupCard;
