import '../portfolio.css';
const styles={
  color:
{
  color: 'black', // Text color
    // fontFamily: "cursive", 
    // Example font family
    fontFamily: '"Dancing Script", cursive',
    fontStyle: 'italic', 
    fontWeight: 'bold', // Font weight
    fontSize: '18px', // Example font size
    lineHeight: '1.5', 

},

}

export default function About() {
  return (
    // <div>
    //   <div className="portfolio-header">
    //   <h1>Portfolio</h1>
    //   </div>
    //   <div>
    //   <p className="portfolio">
    //     Hi this is my prtfolio. here are some of the projects I have worked on. feel free to check it out
    //   </p>
    //   </div>
    //   <div className="portfolio-container">
    //     <ul>
    //       <li>
    //         <img src="../../public/images/c1.png" alt="project1" />
    //         < a href=" https://sanjeev190.github.io/Weather-application/">Weather Application </a>
    //       </li>
    //       <li>
    //         <img src="../../public/images/c2.png" alt="project2" />
    //         <a href="https://github.com/Sanjeev190/TechBlog">Tech Blog</a>
    //       </li>
    //       <li>
    //         <img src="../../public/images/c3.png" alt="project3" />
    //         <a href=" https://sanjeev190.github.io/pick-my-flick2/">Pick my flick</a>
    //       </li>
    //       <li>
    //         <img src="../../public/images/c4.png" alt="project4" />
    //         <a href="https://github.com/Sanjeev190/EmployeeTracker2">Employee Tracker</a>
    //       </li>
    //       <li>
    //         <img src="../../public/images/c5.png" alt="project5" />
    //         <a href="https://github.com/Sanjeev190/Readme-file">Read Me file</a>
    //       </li>
        
    //     </ul>
    //     </div>
    // </div>
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
            src="../../public/images/c1.png" 
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
            src="../../public/images/c2.png" 
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
            src="../../public/images/c3.png" 
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
            src="../../public/images/c4.png" 
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
            src="../../public/images/c5.png" 
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
