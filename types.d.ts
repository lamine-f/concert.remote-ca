type Musique = {
  name: string,
  description: string
}

type Artist = {
  id: number,
  name: string,
  picture: string[],
  bio?: string,
  musique: Musique
}

type Concert = {
  id: number,
  name: string,
  types: Musique[];
  artist: Artist,
  date: string,
  title: string,
  description: string,
}