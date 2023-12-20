
export default function Header3() {
  return (
    <header className='header header3'>
      <div className="header3__logo">
        <a href="/link">Logo</a>
      </div>

      <div className="header3__collections-nav">
        <a href="/link">Link</a>
        <a href="/link">Link</a>
        <a href="/link" className="header1__collection-link">Link<i className="fa-solid fa-chevron-down"></i>
          <ul className="collection-link__sub-links">
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
          </ul></a>
        <a href="/accounts"><i className="fa-solid fa-user"></i></a>
        <a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a>
      </div>
    </header>
  )
}