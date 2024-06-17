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
            const {id, name, alias, image, initialFollowing, verified} = user;

            return (
              <ProfileCard
                key={id}
                name={name}
                alias={alias}
                verified={verified}
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
