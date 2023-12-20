import Header1 from "../Header/Header1/Header1"
import Header2 from "../Header/Header2/Header2"
import Header3 from "../Header/Header3/Header3"
import Header4 from "../Header/Header4/Header4"
import Footer from "../Footer/footer"

export default function MainLayout(props) {
  return (<div className="fixed-nav transparent-nav">
    
    <main>{props.children}</main>
    <Footer />  </div>)
}