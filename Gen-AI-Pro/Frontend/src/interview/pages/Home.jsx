import React from "react";
import '../style/Home.scss';

const Home = () => {
    return (

        <main className="home">
            <div className="interview-input-group" >
            <div className="left">
                <textarea name= "jobDescription" id= "jobDescription" placeholder="Enter job Description"></textarea>
                <div className="right"> 
                    <div className="input-group">
                        <label className="file-label" htmlFor="resume">Upload Resume</label>
                        <input hidden type="file" name="resume" accept=".pdf, .doc, .docx" />
                
                    </div>
                    <div className="input-group">
                        <label htmlFor="SelfDescription">Self Description</label>
                        <textarea name="selfDescription" id="selfDescription" placeholder="Describe yourself in few sentences..."></textarea>
                    </div>
                    <button className="generate-btn">Generate Interview Report </button>
                </div>


            </div>
        </div>
        </main>

    )
}

export default Home;