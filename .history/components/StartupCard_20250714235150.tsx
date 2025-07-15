import { formatDate } from '../utils';

const StartupCard = ({post}:{post:StartupTypeCard}) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">
          {formatDate(post?._createdAt) }
        </p>
        <div className="flex"></div>
      </div>
    </li>
  )
}

export default StartupCard