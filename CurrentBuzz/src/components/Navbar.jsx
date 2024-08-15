const Navbar = ({ setCategory }) => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <span className="navbar-brand">
            <span className="badge bg-light text-dark fs-5">CurrentBuzz</span>
          </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {['technology', 'business', 'health', 'science', 'sports', 'entertainment'].map((category, index) => (
                <li className="nav-item" key={index}>
                  <div 
                    className="nav-link" 
                    onClick={() => setCategory(category)}
                    style={{
                      cursor: 'pointer',
                      padding: '10px',
                      color: 'white',
                      transition: 'background-color 0.3s, color 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.color = '#212529';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseDown={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseUp={(e) => e.currentTarget.style.color = '#212529'}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
export default Navbar;
