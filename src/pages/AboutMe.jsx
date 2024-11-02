
const styles={
  profileContainer:{
    // objectFit: 'cover',
    width: '100px;',
    borderRadius: '50%',
    /* Set the width of the images */
    height: '100px;'
     /* Ensures the image covers the circle without distortion */
    // border: '3px solid #000000'
    

},
margin:{
  marginTop:'30px',
  marginBottom: '15px', 

},
color:
{
  color: '#000000', // Text color
    // fontFamily: "cursive", 
    // Example font family
    fontFamily: '"Dancing Script", cursive',
    fontStyle: 'italic', 
    fontWeight: 'bold', // Font weight
    fontSize: '18px', // Example font size
    lineHeight: '1.5', 

},
header:{
  marginTop:'10px',
  color: '#000000', // Text color
    // fontFamily: "cursive", 
    // Example font family
    fontFamily: '"Dancing Script", cursive',
    fontStyle: 'italic', 
    fontWeight: 'bold', // Font weight
    fontSize: '35px'
  
}}


export default function Home() {
  return (
    
    <div className='creamy-white'>
    <div>
      <h1 style={styles.header}>About Me</h1>
      </div>
      <div style={styles.margin} >
        <img src="../../public/images/profilepicture.jpg" style={styles.profileContainer} alt="profile" />
        </div>
        <div>
      <p style={styles.color}
      >
       I am a junior web developer skilled in front-end technologies like HTML, 
       CSS, JavaScript, and Tailwind, with hands-on experience in back-end development 
       using Node.js, SQL, and MongoDB. My proficiency extends to the MERN stack, where I
        leverage React to build dynamic user interfaces and enhance user experience. I actively 
        participate in code reviews, ensuring best practices and high code quality while 
        collaborating with team members to foster a productive development environment.
         I have created custom API routes, integrating front-end and back-end functionalities 
         to deliver seamless applications. Utilizing version control systems like Git, I 
         streamline the development process, facilitating easy collaboration and 
         code management.
      </p>
      <p style={styles.color}>
      In addition to my web development expertise, I possess a solid 
      IT support background, including Windows OS installation, server 
      management, and networking (DHCP, DNS, TCP/IP). My experience with 
      cloud platforms like Microsoft Teams and SharePoint further complements my
       technical skill set. With strong communication and problem-solving skills, 
       I focus on delivering excellent customer service and continuously strive to
        enhance both user experience and application performance, ensuring that projects 
        meet user needs and business objectives effectively. My commitment to ongoing 
        learning and adapting to new technologies keeps me at the forefront of the 
      ever-evolving web development landscape.
        </p>
    </div>
    </div>
  );
}
