
function Collection1() {
  return (
    <div className="collection collection1">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="collection1__collection-item">
              <div className="collection1__product-img">
                <div className="collection1__heart">
                <i className="fa-regular fa-heart"></i>
                </div>
                <img src="https://github.com/henryleestudio/exom-shopify-next.js/blob/main/public/images/shoe1.png?raw=true" alt="shoe image" />
                <div className="collection1__product-info">
                  <div className="collection1__product-details">
                    <span className="collection1__product-title">Sneakers</span>
                    <span className="collection1__product-price">$2,500</span>
                  </div>
                  <div className="collection1__colors">
                    <div className="collection1__color collection1__color--blue"></div>
                    <div className="collection1__color collection1__color--black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          <div className="col-md-6">
            <div className="collection1__collection-item">
              <div className="collection1__product-img">
              <div className="collection1__heart">
                <i className="fa-regular fa-heart"></i>
                </div>
                <img src="https://github.com/henryleestudio/ecom-shopify-next.js/blob/main/public/images/shoe3.png?raw=true" alt="shoe image" />
                <div className="collection1__product-info">
                  <div className="collection1__product-details">
                    <span className="collection1__product-title">Sneakers</span>
                    <span className="collection1__product-price">$3,500</span>
                  </div>
                  <div className="collection1__colors">
                    <div className="collection1__color collection1__color--blue"></div>
                    <div className="collection1__color collection1__color--black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection1;