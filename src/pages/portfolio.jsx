import '../portfolio.css';
const styles={
  color:
{
  color: 'black', // Text color
    // fontFamily: "cursive", 
    // Example font family
    fontFamily: 'consolas',
   
    fontWeight: 'bold', // Font weight
    fontSize: '18px', // Example font size
    lineHeight: '1.5', 

},

}

export default function About() {
  return (
   
  
    <div className="container my-5">
  <div className="portfolio-header text-center mb-4">
    <h1 style={{ fontFamily: '"Dancing Script", cursive',
    fontStyle: 'italic'}}>Portfolio</h1>
  </div>
  <div className="text-center mb-4">
    <p className="portfolio">
      Hi, this is my portfolio. Here are some of the projects I have worked on. Feel free to check them out!
    </p>
  </div>
  <div className="portfolio-container">
    <div className="row">
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <div className="text-center">
          <img 
            src="../../images/picture2.avif" 
            alt="project1" 
            className="img-fluid rounded image-uniform" 
            style={{ maxWidth: "100%", height: "auto" }} 
          />
          <a href="https://sanjeev190.github.io/Weather-application/" target="_blank" rel="noopener noreferrer" className="d-block mt-2 text-decoration-none text-primary font-weight-bold" style={styles.color}>
            Weather Application
          </a>
        </div>
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <div className="text-center">
          <img 
            src="../../images/picture3.jpg" 
            alt="project2" 
            className="img-fluid rounded image-uniform" 
            style={{ maxWidth: "100%", height: "auto" }} 
          />
          <a href="https://github.com/Sanjeev190/TechBlog" target="_blank" rel="noopener noreferrer" className="d-block mt-2 text-decoration-none text-primary font-weight-bold" style={styles.color}>
            Tech Blog
          </a>
        </div>
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <div className="text-center">
          <img 
            src="../../images/picture6.avif" 
            alt="project3" 
            className="img-fluid rounded image-uniform" 
            style={{ maxWidth: "100%", height: "auto" }} 
          />
          <a href="https://sanjeev190.github.io/pick-my-flick2/" target="_blank" rel="noopener noreferrer" className="d-block mt-2 text-decoration-none text-primary font-weight-bold" style={styles.color}>
            Pick my Flick
          </a>
        </div>
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <div className="text-center">
          <img 
            src="../../images/picture4.avif" 
            alt="project4" 
            className="img-fluid rounded image-uniform" 
            style={{ maxWidth: "100%", height: "auto" }} 
          />
          <a href="https://github.com/Sanjeev190/EmployeeTracker2" target="_blank" rel="noopener noreferrer" className="d-block mt-2 text-decoration-none text-primary font-weight-bold" style={styles.color}>
            Employee Tracker
          </a>
        </div>
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <div className="text-center">
          <img 
            src="../../images/picture.jpg" 
            alt="project5" 
            className="img-fluid rounded image-uniform" 
            style={{ maxWidth: "100%", height: "auto" }} 
          />
          <a href="https://github.com/Sanjeev190/Readme-file" target="_blank" rel="noopener noreferrer" className="d-block mt-2 text-decoration-none text-primary font-weight-bold"style={styles.color}>
            Read Me file
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
