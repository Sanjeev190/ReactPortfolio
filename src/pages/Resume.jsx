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
sectionSpacing: {
  marginBottom: '30px', // Adds spacing between sections
},

}
export default function Blog() {
  return (

<div className="container mt-5">
<h1 
  className="text-center" 
  style={{ fontFamily: 'consolas', ...styles.sectionSpacing }}
>
  Resume
</h1>

<div className="text-center mb-4">
  <a 
    href="../../public/sanjeevResume.docx" 
    download="sanjeevResume.docx" 
    className="btn btn-dark"
    style={{ fontWeight: 'bold' }}
  >
    Download My Resume
  </a>
</div>

<div className="skill-list" style={styles.sectionSpacing}>
  <h2 className="text-primary" style={styles.color}>Skills</h2>
  <ul className="list-unstyled" style={styles.color}>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>Node.js</li>
    <li>SQL</li>
    <li>React</li>
    <li>Active Directory</li>
    <li>Backup and Recovery</li>
    <li>Microsoft Azure</li>
    <li>Office 365</li>
    <li>Ticketing systems (Jira, ServiceNow)</li>
    <li>Server management</li>
    <li>Microsoft Teams and software</li>
    <li>Desktop Apps (Excel, Word, PowerPoint)</li>
  </ul>
</div>

<div className="education" style={styles.sectionSpacing}>
  <h2 className="text-primary" style={styles.color}>Education</h2>
  <ul style={styles.color}>
    <li>Bachelor of Information Technology, Sydney International School of Technology and Commerce (01/07/2021 - 30/06/2023), Sydney, Australia</li>
    <li>Bootcamp certification from the University of Sydney. Commenced a certification in bootcamp from University of Sydney</li>
  </ul>
</div>
</div>
  );
}
