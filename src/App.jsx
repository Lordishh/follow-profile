import './App.css'
import { ProfileCard } from './ProfileCard'
import { users } from './data'


function App() {
  const formatAlias = (alias) => `@${alias}`

  return (
    <>
      <h1 style={{ color: '#fff', marginBottom: '5rem'}}>Componente Follow</h1>
      <section className='wrapper-card'>

        {
          users.map((user) => {
            const {id, name, alias, image, initialFollowing, verified, linkProfile} = user;

            return (
              <ProfileCard
                key={id}
                name={name}
                verified={verified}
                alias={alias}
                linkProfile={linkProfile}
                image={image}
                initialFollowing={initialFollowing}
                formatAlias={formatAlias}
              />
            )
          })
        }
      </section>
    </>
  )
}

export default App
