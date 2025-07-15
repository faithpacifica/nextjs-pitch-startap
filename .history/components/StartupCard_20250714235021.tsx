import { formatDate } from '../.history/utils20250714234848';

const StartupCard = ({post}:{post:StartupTypeCard}) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">
          {formatDate(post?._createdAt) }
        </p>
      </div>
    </li>
  )
}

export default StartupCard