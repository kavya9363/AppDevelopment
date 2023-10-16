import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions1">
      <header className="header1">
        <h1> Terms and Conditions</h1>
      </header>
      <br />
      <div className="content1">
        <section className="section1">
          <h2>Introduction</h2>
          <p>
          Welcome to Admission Box. We are committed to protecting the privacy and personal information of our users, especially students. This Privacy Policy outlines our practices concerning the collection, use, and protection of your personal information. By using Admission Box, you consent to the terms described in this Privacy Policy.
          </p>
        </section>

        <section className="section1">
          <h2>Information We Collect</h2>
         <p>

        <p><strong>a. Personal Information:</strong> This may include your name, email address, contact information, and other information you provide when using our admission portal.</p>

        <p><strong>b. Academic and Application Data:</strong> We may collect information related to your academic history, application materials, transcripts, test scores, and other application-related data.</p>

        <p><strong>c. Usage Information:</strong> We may collect information about how you use our portal, such as log data, device information, and analytics.</p>

        <p><strong>d. Communication Data:</strong> If you contact us through our portal or other means, we may collect and store that communication.</p>
         </p>
        </section>

        <section className="section1">
          <h2>How We Use Your Information</h2>
          <p>
          <strong>a. Admissions Processing:</strong> We use your data to facilitate the admissions process, including reviewing applications, communicating with you, and providing admission decisions.
          </p>
          <p>
          <strong>b. Improving Our Services:</strong> We may use data to enhance our portal's functionality, user experience, and customer support.
          </p>
        </section>

        <section className="section1">
          <h2>Data Security</h2>
          <p>
          We implement security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. While we make every effort to protect your data, no method of online transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="section1">
          <h2>Changes to this Privacy Policy</h2>
          <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will provide notice of any material changes.
          </p>
        </section>

        <section className="section1">
          <h2>Termination</h2>
          <p>
            - We reserve the right to terminate or suspend your account and access to the portal at
            our discretion.
          </p>
        </section>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default TermsAndConditions;