
export default function Header1() {
  return (
    <header className='header header1'>
      <div className="header1__collections-nav">
        <a href="/link">Link</a>
        <a href="/link">Link</a>
        <a href="/link">Link</a>
      </div>

      <div className="header1__logo">
        <a href="/link">Logo</a>
      </div>

      <div className="header1__collections-nav">
        <a href="/link">Link</a>
        <a href="/link">Link</a>
        <a href="/link">Link</a>
        <a href="/accounts"><i className="fa-solid fa-user"></i></a>
        <a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a>
      </div>
    </header>
  )
}