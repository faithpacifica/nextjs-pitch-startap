
const StartupCard = ({post}:{post:StartupTypeCard}) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">
          {formatpost?._createdAt}
        </p>
      </div>
    </li>
  )
}

export default StartupCard