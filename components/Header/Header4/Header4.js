
import { AnnounceBar } from "@/components/AnnounceBar/AnnounceBar"

export default function Header4() {
  return (<>
    <AnnounceBar />
    
    <header className='header header4'>
      <div className="header4__logo">
        <a href="/link">Logo</a>
      </div>

      <div className="header4__collections-nav">
        <a href="/link">Link</a>
        <a href="/link">Link</a>
        <a href="/link">Link</a>
        <a href="/accounts"><i className="fa-solid fa-user"></i></a>
        <a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a>
      </div>
    </header>
  </>)
}