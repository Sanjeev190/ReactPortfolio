// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import './background.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <div className="background-container">
      <main className="mx-3">
        <Outlet />
      </main>
      </div>
    <div className="card-footer text-body-secondary"style={{padding:'20px'}}>
    <div style={{ textAlign: 'center',  }}>
                <a href="https://github.com/Sanjeev190" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px',color: 'black' }}>
                    <i className="fab fa-github "></i>
                </a>
                <a href="https://www.linkedin.com/in/sanjeev-thapa-45b50b28b/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px',color: 'black' }}>
                    <i className="fab fa-linkedin "></i>
                </a>
                <a href="https://www.facebook.com/share/txU3VkJn7jeg1KGh/?mibextid=LQQJ4d"
target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' ,color: 'black'}}>
                    <i className="fab fa-facebook "></i>
                </a>
            </div>
  </div>
    </>
  );
}

export default App;
