import React from 'react'
import { Link } from "react-router-dom";
function card(x) {
  return (
    <>
      <div className="container pt-3 pb-3" >
        <div className="row">
          <div className="col">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {
                x.data.map(y => (
                  <div className="col">
                    <div className="card h-100">
                      <img src={y.img} alt="p4" className="bd-placeholder-img card-img-top" width="100%" height="" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false" /><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text>

                      <div className="card-body">
                        <h5 className="card-title"><Link to={`/Products/${y.id}`}>{y.title}</Link></h5>
                        <p className="card-text">{y.text}</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted"><button type="button" className="btn btn-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                          </svg>
                          Add
                        </button> {y.price}</small>
                      </div>
                    </div>
                  </div>
                ))
              }

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default card