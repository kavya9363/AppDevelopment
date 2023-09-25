import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions1">
      <header className="header1">
        <h1> Terms and Conditions</h1>
      </header>
      <div className="content1">
        <section className="section1">
          <h2>Introduction</h2>
          <p>
            Welcome to the Student Admission Portal. By accessing or using this portal, you agree to
            comply with and be bound by the following terms and conditions.
          </p>
        </section>

        <section className="section1">
          <h2>Registration</h2>
          <p>
            To access certain features of the portal, you may be required to register for an account.
            You agree to provide accurate and complete information during the registration process.
          </p>
        </section>

        <section className="section1">
          <h2>Usage Guidelines</h2>
          <p>
            - You are solely responsible for maintaining the confidentiality of your account
            information.
          </p>
          <p>
            - You agree not to use the portal for any unlawful purposes or in any way that could
            damage, disable, overburden, or impair the portal's functionality.
          </p>
          <p>
            - You may use the portal for the sole purpose of seeking admission to educational
            institutions and for no other purpose.
          </p>
        </section>

        <section className="section1">
          <h2>Content Submission</h2>
          <p>
            - You may be able to submit various types of content, including personal information,
            documents, and application materials. You grant the portal the right to use and store
            this information in accordance with our privacy policy.
          </p>
          <p>
            - You are responsible for the accuracy and legality of the content you submit.
          </p>
        </section>

        <section className="section1">
          <h2>Privacy</h2>
          <p>
            - Your use of the portal is also governed by our Privacy Policy, which can be found at
            [link to privacy policy].
          </p>
        </section>

        <section className="section1">
          <h2>Security</h2>
          <p>
            - We take reasonable measures to protect your personal information; however, we cannot
            guarantee the security of data transmitted over the internet.
          </p>
        </section>

        <section className="section1">
          <h2>Termination</h2>
          <p>
            - We reserve the right to terminate or suspend your account and access to the portal at
            our discretion.
          </p>
        </section>

        <section className="section1">
          <h2>Modifications</h2>
          <p>
            - We may update or modify these terms and conditions from time to time. It is your
            responsibility to review them periodically.
          </p>
        </section>

        <section className="section1">
          <h2>Contact Information</h2>
          <p>
            - If you have any questions or concerns about these terms and conditions, you can
            contact us at [contact email].
          </p>
        </section>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default TermsAndConditions;