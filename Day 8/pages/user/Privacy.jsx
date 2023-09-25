import React from 'react';
import Footer from '../../assets/components/home/Footer';


const PrivacyPolicy = () => {
  return (
    <div className='main-policy'>
<div class="privacy-policy-container">
    <div className='policy-container'>
        <div class="privacy-policy-text">
            <h2>Privacy Policy</h2>
            <p>
                This Privacy Policy outlines the types of personal information we collect and how it is used
                when you use our school admission website.
            </p>
            <h3>Information We Collect</h3>
            <p>
                We may collect personal information including, but not limited to, your name, contact information,
                and application details when you submit an admission application through our website.
            </p>
            <h3>How We Use Your Information</h3>
            <p>
                We use the information collected for the purpose of processing your admission application and
                communicating with you regarding your application status. Your information may also be used for
                statistical analysis and reporting.
            </p>
            <h3>Disclosure of Your Information</h3>
            <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties. Your
                information may be shared with relevant school personnel for the purpose of processing your
                admission application.
            </p>
            <h3>Security</h3>
            <p>
                We take reasonable precautions to protect your personal information. However, we cannot guarantee
                the security of information transmitted over the internet.
            </p>
            <h3>Changes to this Privacy Policy</h3>
            <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page.
            </p>
            <p>
                For any questions or concerns regarding this Privacy Policy, please contact us.
            </p>
        </div>
        </div>
    </div>
    <div className="privacy-title">
        <h1 className='titlee'>Privacy<br/>& Policy</h1>
    </div>
    <Footer className='footer-privacy'/>
    </div>
  );
};

export default PrivacyPolicy;
