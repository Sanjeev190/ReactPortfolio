const styles={
  header:{
    marginTop:'10px',
    color: '#000000', // Text color
      // fontFamily: "cursive", 
      // Example font family
      fontFamily: '"Dancing Script", cursive',
      fontStyle: 'italic', 
      fontWeight: 'bold', // Font weight
      fontSize: '35px'
    
  }

}

export default function Contact() {
  return (
    <div>

      <h1 style={styles.header}>Contact Page</h1>
      <div className="container mt-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                rows="5"
                                placeholder="Type your message here"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
  )
}
  


    
   