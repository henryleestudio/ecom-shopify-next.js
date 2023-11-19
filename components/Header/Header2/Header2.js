
export default function Header2() {
  return (
    <header className='header header2'>
      <div className="header2__logo">
        <a href="/link">Logo</a>
      </div>

      <div className="header2__collections-nav">
        <a href="/link">Link</a>
        <a href="/link">Link</a>
        <a href="/link">Link</a>
      </div>

      <div className="header2__collections-nav">
        <a href="/accounts"><i className="fa-solid fa-user"></i></a>
        <a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a>
      </div>
    </header>
  )
}