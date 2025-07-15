import { EyeIcon } from 'lucide-react';
import { formatDate } from '../utils';

const StartupCard = ({post}:{post:StartupTypeCard}) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">
          {formatDate(post?._createdAt) }
        </p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-pinkRose" />
          <span className="text-16-medium">{post.views}</span>
        </div>
      </div>
    </li>
  )
}

export default StartupCard