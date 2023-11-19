
export default function Header3() {
  return (
    <header className='header header3'>
      <div className="header3__logo">
        <a href="/link">Logo</a>
      </div>

      <div className="header3__collections-nav">
        <a href="/link">Link</a>
        <a href="/link">Link</a>
        <a href="/link">Link</a>
        <a href="/accounts"><i className="fa-solid fa-user"></i></a>
        <a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a>
      </div>
    </header>
  )
}