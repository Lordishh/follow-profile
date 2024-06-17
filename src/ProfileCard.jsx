import { useState } from "react"
import verifiedImg from './assets/verified.svg'

export const ProfileCard = ({ image, name, alias, formatAlias, initialFollowing, verified}) => {
  const [isFollowing, setIsFollowing] = useState(initialFollowing)
  const text = isFollowing ? 'Siguiendo':'Seguir'
  const btnClassName = isFollowing
    ? 'profile-card-btn is-following'
    : 'profile-card-btn';

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='profile-card'>
      <header className='profile-card-header'>
        <img
          className='profile-card-avatar'
          src={image}
          alt="Foto no disponible"
          />
        <div className='profile-card-info'>
          <div className="profile-wrapper-name">
            <strong>{name}</strong>
            {
              !!verified && <img style={{ height: '14px', width: '14px' }} src={verifiedImg} alt="" />
            }
          </div>
          <strong className='profile-card-alias'>{formatAlias(alias)}</strong>
        </div>
      </header>

      <aside>
          <button className={btnClassName} onClick={handleClick}>
            <span className='profile-card-text'>{text}</span>
            <span className='profile-card-stopFollow'>Dejar de seguir</span>
          </button>
      </aside>
    </article>
  )
}
