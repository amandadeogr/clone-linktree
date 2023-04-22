import Card from "../Card";
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

const cards = [
   {
      image: github,
      href: 'https://github.com/amandadeogr',
      title: 'Github',
      subtitle: 'Link do meu perfil no github. @amandadeogr'
   },
   {
      image: linkedin,
      href: 'https://www.linkedin.com/in/amandadeogr/',
      title: 'Linkedin',
      subtitle: 'Link do meu perfil no linkedin. @amandadeogr'
   },
   {
      image: instagram,
      href: 'https://instagram.com/amandadeogr',
      title: 'Instagram',
      subtitle: 'Link do meu perfil no instagram. @amandadeogr'
   },
]

const Main = () => {
   return(
         <>
            {
               cards.map((item) => {
                  return (
                     <Card links={item}/>
                  )
               })
            }
         </>
   )
}

export default Main;