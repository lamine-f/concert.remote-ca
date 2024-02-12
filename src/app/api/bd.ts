

const Rap: Musique = {
  name: "Rap",
  description: "Le rap est un genre de musique qui dénonce...",
}


const artists : Artist[] = [
  {
    id: 1,
    name: "La féve",
    bio: "La fève est un rappeur francais",
    musique: Rap,
    picture: [
      "https://1863.fr/wp-content/uploads/2020/10/article_yasmine.jpg",
      "https://images.genius.com/1f1644744e853ba20c1f0659c6994988.1000x1000x1.jpg",
      "https://www.radiofrance.fr/s3/cruiser-production/2022/02/4935976f-c2c4-4926-ab75-46965ad98658/870x489_la-f.jpg"
    ]
  },
  {
    id: 2,
    name: "Khali",
    bio: "",
    musique: Rap,
    picture: [
      "https://1863.fr/wp-content/uploads/2020/10/article_yasmine.jpg",
      "https://images.genius.com/1f1644744e853ba20c1f0659c6994988.1000x1000x1.jpg",
      "https://www.radiofrance.fr/s3/cruiser-production/2022/02/4935976f-c2c4-4926-ab75-46965ad98658/870x489_la-f.jpg"
    ]
  },
  {
    id: 3,
    name: "STEE",
    bio: "",
    musique: Rap,
    picture: [
      "https://1863.fr/wp-content/uploads/2020/10/article_yasmine.jpg",
      "https://images.genius.com/1f1644744e853ba20c1f0659c6994988.1000x1000x1.jpg",
      "https://www.radiofrance.fr/s3/cruiser-production/2022/02/4935976f-c2c4-4926-ab75-46965ad98658/870x489_la-f.jpg"
    ]
  },

];


export const CONCERTS: Concert[]  = artists.map( (artist, key) => ({
  id: key+1,
  name: "2eme concert de "+artist.name,
  types: [artist.musique],
  artist: artist,
  description: "Un concert très attendu surtout suite à",
  date: "12 Mai",
  title: "Un concert à ne pas manquer",
}) );
