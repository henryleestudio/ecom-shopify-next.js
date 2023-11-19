export const Hero2 = () => {
  return ( 
    <div className="hero hero2">
      <div className="hero2__collection1">
        <img className="hero2__bg" src="https://images.pexels.com/photos/6311603/pexels-photo-6311603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        

        <div className="hero2__content-container">
          <div className="hero2__info">
            {/* <h1 className="hero2__title">Canvas Aura</h1> */}

            {/* <p className="hero2__paragraph">Welcome to Canvas Aura, a space dedicated to celebrating and embracing the unique individual that is you. Here, we celebrate diversity, authenticity, and the beauty that comes from embracing your true self.</p> */}
            <a href="#" className="hero2__button">Men</a>
          </div>
        </div>
      </div>

      <div className="hero2__collection2">
        <img className="hero2__bg" src="https://images.pexels.com/photos/7691331/pexels-photo-7691331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        

        <div className="hero2__content-container">
          <div className="hero2__info">
            <a href="#" className="hero2__button">women</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2;