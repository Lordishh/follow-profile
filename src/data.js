import Messi from "./assets/images/messi-photo.svg"
import Enuel from "./assets/images/enu-photo.svg"
import Teddy from "./assets/images/swims-photo.svg"
import Laurie from "./assets/images/laurie-photo.svg"

export const users = [
  {
    id: 1,
    name: 'Enuel Monzón',
    alias: 'enudev',
    linkProfile: 'https://x.com/EnuDev',
    initialFollowing: true,
    image: Enuel,
  },
  {
    id: 2,
    name: 'Leo Messi',
    alias: 'leomessi',
    linkProfile: 'https://x.com/Messismo10',
    verified: true,
    initialFollowing: true,
    image: Messi,
  },
  {
    id: 3,
    name: 'Hugh Laurie',
    alias: 'hugh Laurie',
    linkProfile: 'https://x.com/hughlaurie',
    verified: true,
    initialFollowing: false,
    image: Laurie,
  },
  {
    id: 4,
    name: 'Teddy BoutDaCheck',
    alias: 'teddyswims',
    linkProfile: 'https://x.com/teddyswims',
    verified: true,
    initialFollowing: false,
    image: Teddy,
  },
]
