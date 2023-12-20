
import { AnnounceBar } from "@/components/AnnounceBar/AnnounceBar"

export default function Header4() {
  return (<>
    <AnnounceBar />
    
    <header className='header header4'>
      <div className="header4__logo">
        <a href="/link">Logo</a>
      </div>

      <div className="header4__collections-nav">
        <a href="/link" className="header1__collection-link">Link <i className="fa-solid fa-chevron-down"></i>
          <ul className="collection-link__sub-links">
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
          </ul></a>
        <a href="/link">Link</a>
        <a href="/link">Link</a>
        <a href="/accounts"><i className="fa-solid fa-user"></i></a>
        <a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a>
      </div>
    </header>
  </>)
}