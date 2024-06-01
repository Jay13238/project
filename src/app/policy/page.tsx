import React from "react";
import { Metadata as NextMetadata } from "next";

export const metadata: NextMetadata = {
  title: "Privacy Policy | Creative Cate",
  description: "Creative Cate's Privacy Policy",
};

const PrivacyPolicyPage = () => {
  return (
    <div className="pt-[180px]">
      <div className="px-[2rem] md:px-[6rem] bg-white">
        <h1 className="text-secondary mb-7">Privacy Policy</h1>
        <h2 className="mb-4">Introduction</h2>
        <p className="mb-4">
          Creative Cate is committed to protecting and respecting your privacy.
          This Privacy Policy explains how we collect, use, and protect your
          personal information when you visit our website and use our services.
          By using our website and services, you agree to the collection and use
          of information in accordance with this policy.
        </p>
        <h2 className="mb-4">Information We Collect</h2>
        <p className="mb-4">
          We may collect and process the following types of personal
          information:
        </p>
        <ul className="mb-4 list-disc ml-4">
          <li>
            Personal Identification Information: Name, email address, phone
            number, and any other details you provide us with.
          </li>
          <li>
            Technical Data: IP address, browser type and version, time zone
            setting, browser plug-in types and versions, operating system and
            platform, and other technology on the devices you use to access this
            website.
          </li>
          <li>
            Usage Data: Information about how you use our website, products, and
            services.
          </li>
          <li>
            Marketing and Communications Data: Your preferences in receiving
            marketing from us and your communication preferences.
          </li>
        </ul>
        <h2 className="mb-4">How We Use Your Information</h2>
        <p className="mb-4">We may use the information we collect to:</p>
        <ul className="mb-4 list-disc ml-4">
          <li>
            To Provide and Maintain Our Services: Including web design and
            development, social media management, photoshoots, and brand
            identity and design services.
          </li>
          <li>
            To Improve Our Website and Services: Analysing how you use our
            website and services to improve them and develop new ones.
          </li>
          <li>
            To Communicate with You: Responding to your enquiries, providing
            customer support, and sending updates related to our services.
          </li>
          <li>
            Marketing: Providing you with information about other services we
            offer that are similar to those you have already enquired about or
            purchased.
          </li>
          <li>
            Legal Obligations: Complying with applicable laws and regulations.
          </li>
        </ul>
        <h2 className="mb-4">Sharing Your Information</h2>
        <p className="mb-4">
          We do not sell, trade, or otherwise transfer to outside parties your
          Personally Identifiable Information except under the following
          circumstances:
        </p>
        <ul className="mb-4 list-disc ml-4">
          <li>
            Service Providers: We may share your information with third-party
            service providers who perform services on our behalf.
          </li>
          <li>
            Legal Requirements: If required by law or in response to valid
            requests by public authorities (e.g., a court or a government
            agency).
          </li>
        </ul>
        <h2 className="mb-4">Data Security</h2>
        <p className="mb-4">
          We use appropriate security measures to protect your personal
          information from accidental loss, unauthorized access, use,
          alteration, and disclosure. However, no internet or email transmission
          is ever fully secure or error-free. Please take special care in
          deciding what information you send to us via email.
        </p>
        <h2 className="mb-4">Data Retention</h2>
        <p className="mb-4">
          We will only retain your personal information for as long as necessary
          to fulfill the purposes we collected it for, including for the
          purposes of satisfying any legal, accounting, or reporting
          requirements.
        </p>
        <h2 className="mb-4">Your Rights</h2>
        <p className="mb-4">
          Under certain circumstances, you have rights under data protection
          laws in relation to your personal data, including the right to:
        </p>
        <ul className="mb-4 list-disc ml-4">
          <li>Request access to your personal data.</li>
          <li>Request correction of your personal data.</li>
          <li>Request erasure of your personal data.</li>
          <li>Object to processing of your personal data.</li>
          <li>Request restriction of processing your personal data.</li>
          <li>Request transfer of your personal data.</li>
          <li>
            Withdraw consent at any time where we are relying on consent to
            process your personal data.
          </li>
        </ul>
        <p className="mb-4">
          If you wish to exercise any of the rights set out above, please
          contact us.
        </p>
        <h2 className="mb-4">Changes to Our Privacy Policy</h2>
        <p className="mb-[10rem]">
          We may update this Privacy Policy from time to time in order to
          reflect, for example, changes to our practices or for other
          operational, legal or regulatory reasons.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
