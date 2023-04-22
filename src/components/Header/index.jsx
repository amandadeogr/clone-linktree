import './Header.css';

const Header = () => {
   return (
      <header className='header'>
         <img src="https://github.com/amandadeogr.png" alt="" className="image-profile"/>

         <div className="description-profile">
            <h3 className="name-profile">Amanda Ramirez</h3>
            <p className="subtitle-profile">@amandadeogr</p>
         </div>
      </header>
   )
}

export default Header;