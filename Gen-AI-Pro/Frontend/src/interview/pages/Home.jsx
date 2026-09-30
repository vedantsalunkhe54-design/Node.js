import React from "react";

const Home = () => {
    return (

        <main className="home">
            <div className="left">
                <textarea name= "jobDescription" id= "jobDescription" placeholder="Enter job Description"></textarea>
                <div className="right"> 
                    <div className="input-group">
                        <label htmlFor="resume">Upload Resume</label>
                        <input type="file" name="resume" accept=".pdf, .doc, .docx" />
                
                    </div>
                    <div className="input-group">
                        <label htmlFor="SelfDescription">Self Description</label>
                        <textarea name="selfDescription" id="selfDescription" placeholder="Describe yourself in few sentences..."></textarea>
                    </div>
                    <button className="generate-btn">Genetrate Interview Report </button>
                </div>


            </div>

        </main>

    )
}

export default Home;