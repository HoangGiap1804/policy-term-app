import React from 'react';

const Policy = () => {
    return (
        <div className="section">
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last Updated: 2026-01-20</p>

            <section className="introduction">
                <h2>Introduction</h2>
                <p>
                    Welcome to <strong>Constellation Finder</strong> ("Application", "Service", "App"). Electronic usage of this Application constitutes your acceptance of these Terms of Service ("Terms") and Privacy Policy ("Policy"). If you do not agree with any part of these Terms or Policy, you are prohibited from using the Application.
                </p>
                <p>
                    This Agreement applies to all visitors, users, and others who access or use the Service.
                </p>
            </section>

            <hr />

            <section className="policy-part">
                <h1>PART 1: PRIVACY POLICY</h1>

                <h2>1. Information Collection and Use</h2>
                <p>We are committed to protecting your privacy. This section details the types of information we collect and how it is used to provide and improve our Service.</p>

                <h3>1.1 Personal Data</h3>
                <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:</p>
                <ul>
                    <li>Email address (for support or account management).</li>
                    <li>First name and last name (optional, only if you create a user profile).</li>
                    <li>Usage Data.</li>
                </ul>

                <h3>1.2 Usage Data</h3>
                <p>Usage Data is collected automatically when using the Service. usage Data may include information such as your device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                <p>When you access the Service by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.</p>

                <h3>1.3 Permissions</h3>
                <p>The Application requires specific permissions to function correctly:</p>
                <ul>
                    <li><strong>Location Permission (GPS/Network):</strong> Crucial for the core functionality. We use your precise location to calculate the azimuth and elevation of celestial bodies relative to your position on Earth. This ensures the star map you see aligns with the actual sky above you.</li>
                    <li><strong>Camera Permission:</strong> Required for the Augmented Reality (AR) feature. This allows the App to overlay constellation lines and names onto the live feed from your camera. <strong>We do not record, store, or transmit video or images from your camera</strong> to our servers unless you explicitly use a "Share" or "Screenshot" feature provided within the App.</li>
                    <li><strong>Storage/Photos Permission:</strong> May be requested if you wish to save screenshots of the star map or AR view to your device's gallery.</li>
                </ul>

                <h2>2. Retention of Your Personal Data</h2>
                <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
                <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>

                <h2>3. Transfer of Your Personal Data</h2>
                <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
                <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer. Application will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.</p>

                <h2>4. Service Providers</h2>
                <p>We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
                <ul>
                    <li><strong>Google Firebase:</strong> Used for authentication, database (Firestore), cloud storage, and crash reporting (Crashlytics).</li>
                    <li><strong>AdMob / Advertising Partners (if applicable):</strong> If the free version of the App serves ads, these partners may use identifiers like the Advertising ID to serve personalized ads.</li>
                </ul>

                <h2>5. Security of Your Personal Data</h2>
                <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>

                <h2>6. Children's Privacy</h2>
                <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>

                <h2>7. Links to Other Websites</h2>
                <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy and Terms of these sites. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                
                <h2>9. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy or these Terms of Service, You can contact us:</p>
                <ul>
                    <li>By email: <strong>[Enter Your Support Email Here]</strong></li>
                </ul>
            </section>
        </div>
    );
};

export default Policy;
