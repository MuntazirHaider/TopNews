import { Link } from "react-router-dom";

const Navbar = () => {

  return (

    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-danger">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3 title" to="/general">
          <strong className='fst-italic fs-1'>Top<span className="badge bg-secondary fst-italic fs-6">News</span></strong>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/general">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/technology">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;