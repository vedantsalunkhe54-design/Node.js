import { useState } from "react";
import "../style/Home.scss";

const Home = () => {
  const [resumeName, setResumeName] = useState("");

  return (
    <main className="home">
      <div className="studio-shell">
        <header className="studio-header">
          <a className="studio-brand" href="/" aria-label="Prepwise home">
            <span className="brand-mark" aria-hidden="true">
              p.
            </span>
            <span>prepwise</span>
          </a>
          <span className="header-note">
            <span className="status-dot" aria-hidden="true" />
            Your personal interview studio
          </span>
        </header>

        <section className="studio-intro" aria-labelledby="page-title">
          <div className="intro-copy">
            <p className="eyebrow">A little preparation goes a long way</p>
            <h1 id="page-title">
              Make your next
              <br />
              <span>“you’re hired.”</span>
            </h1>
            <p className="intro-description">
              Tell us about the role and the person behind the resume. We’ll
              help you walk in feeling ready.
            </p>
          </div>
          <div className="intro-aside" aria-label="Preparation tip">
            <span className="aside-sparkle" aria-hidden="true">
              ✳
            </span>
            <p className="aside-label">A good place to start</p>
            <p className="aside-tip">
              The more context you share, the more personal your interview prep
              can be.
            </p>
            <span className="aside-caption">YOUR STORY, YOUR ADVANTAGE</span>
          </div>
        </section>

        <section className="interview-workspace" aria-label="Interview details">
          <div className="workspace-heading">
            <div>
              <p className="eyebrow">First, the details</p>
              <h2>Let’s get to know the opportunity.</h2>
            </div>
            <span className="step-indicator">
              <span>01</span> / 01
            </span>
          </div>

          <div className="interview-input-group">
            <div className="input-group job-description-group">
              <label htmlFor="jobDescription">
                <span className="field-number">01</span>
                Job description
                <span className="field-optional">Paste the role you’re after</span>
              </label>
              <textarea
                name="jobDescription"
                id="jobDescription"
                placeholder="Paste the job description here — responsibilities, requirements, all of it."
              />
            </div>

            <div className="input-group resume-group">
              <label className="field-label" htmlFor="resume">
                <span className="field-number">02</span>
                Your resume
              </label>
              <label className="file-dropzone" htmlFor="resume">
                <span className="upload-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 14.5v4A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5v-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="upload-copy">
                  <strong>{resumeName || "Add your resume"}</strong>
                  <span>
                    {resumeName ? "Ready to go" : "Choose a file from your device"}
                  </span>
                </span>
                <span className="browse-button">Browse</span>
              </label>
              <input
                className="resume-input"
                type="file"
                name="resume"
                id="resume"
                accept=".pdf,.doc,.docx"
                onChange={(event) =>
                  setResumeName(event.target.files?.[0]?.name ?? "")
                }
                aria-describedby="resume-hint"
              />
              <p className="field-hint" id="resume-hint" aria-live="polite">
                {resumeName || "PDF, DOC, or DOCX · Optional, but recommended"}
              </p>
            </div>

            <div className="input-group self-description-group">
              <label htmlFor="selfDescription">
                <span className="field-number">03</span>
                A little about you
                <span className="field-optional">What makes you, you?</span>
              </label>
              <textarea
                name="selfDescription"
                id="selfDescription"
                placeholder="Share your strengths, the work you love, or anything you’d like us to know."
              />
              <p className="field-hint">
                Your resume and a few words about yourself work best together.
              </p>
            </div>
          </div>

          <footer className="workspace-footer">
            <p>
              <span aria-hidden="true">✳</span> Made for your next big thing.
            </p>
            <button className="button primary-button" type="button">
              Create my interview report
              <span aria-hidden="true">↗</span>
            </button>
          </footer>
        </section>

        <p className="studio-footnote">
          Thoughtful prep. A little more confidence. A lot more you.
        </p>
      </div>
    </main>
  );
};

export default Home;
