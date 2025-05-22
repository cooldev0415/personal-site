import frontend_img from '../../public/assets/frontend-engineer.gif';
import backend_img from '../../public/assets/backend-engineer.gif';
import fullstack_img from '../../public/assets/fullstack-engineer.gif';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export interface ICertification {
  title: string;
  credentialId: string;
  credentialUrl: string;
  embedCode: string;
  ranking: string;
}

export const certifications: ICertification[] = [
  {
    title: "JavaScript Certification",
    credentialId: "16e990f2d5f34f2c897a9d44fd0c3286",
    credentialUrl: "https://www.testdome.com/certificates/16e990f2d5f34f2c897a9d44fd0c3286",
    ranking: "TOP 10%",
    embedCode: `
      <a href="https://www.testdome.com/certificates/16e990f2d5f34f2c897a9d44fd0c3286" class="testdome-certificate-stamp gold">
        <span class="testdome-certificate-name">Joseph Lingad</span>
        <span class="testdome-certificate-test-name">JavaScript</span>
        <span class="testdome-certificate-card-logo">TestDome<br>Certificate</span>
      </a>
    `
  },
  {
    title: "PHP Certification",
    credentialId: "bb276c918d5548be9648b0730e2bca26",
    credentialUrl: "https://www.testdome.com/certificates/bb276c918d5548be9648b0730e2bca26",
    ranking: "TOP 20%",
    embedCode: `
      <a href="https://www.testdome.com/certificates/bb276c918d5548be9648b0730e2bca26" class="testdome-certificate-stamp silver">
        <span class="testdome-certificate-name">Joseph Lingad</span>
        <span class="testdome-certificate-test-name">PHP</span>
        <span class="testdome-certificate-card-logo">TestDome<br>Certificate</span>
      </a>
    `
  },
  {
    title: "React Certification",
    credentialId: "d027e70f98654f4ca67fc3c4ae4ec794",
    credentialUrl: "https://www.testdome.com/certificates/d027e70f98654f4ca67fc3c4ae4ec794",
    ranking: "TOP 10%",
    embedCode: `
      <a href="https://www.testdome.com/certificates/d027e70f98654f4ca67fc3c4ae4ec794" class="testdome-certificate-stamp gold">
        <span class="testdome-certificate-name">Joseph Lingad</span>
        <span class="testdome-certificate-test-name">React</span>
        <span class="testdome-certificate-card-logo">TestDome<br>Certificate</span>
      </a>
    `
  },
  {
    title: "MySQL Certification",
    credentialId: "0375e646808745c484c3324f2b897f97",
    credentialUrl: "https://www.testdome.com/certificates/0375e646808745c484c3324f2b897f97",
    ranking: "TOP 10%",
    embedCode: `
      <a href="https://www.testdome.com/certificates/0375e646808745c484c3324f2b897f97" class="testdome-certificate-stamp gold">
        <span class="testdome-certificate-name">Joseph Lingad</span>
        <span class="testdome-certificate-test-name">MySQL</span>
        <span class="testdome-certificate-card-logo">TestDome<br>Certificate</span>
      </a>
    `
  },
  {
    title: "Java Certification",
    credentialId: "eb4af1f93aa347eebaf588de8dd038a6",
    credentialUrl: "https://www.testdome.com/certificates/eb4af1f93aa347eebaf588de8dd038a6",
    ranking: "TOP 10%",
    embedCode: `
      <a href="https://www.testdome.com/certificates/eb4af1f93aa347eebaf588de8dd038a6" class="testdome-certificate-stamp gold">
        <span class="testdome-certificate-name">Joseph Lingad</span>
        <span class="testdome-certificate-test-name">Java</span>
        <span class="testdome-certificate-card-logo">TestDome<br>Certificate</span>
      </a>
    `
  },
];

export const services = [
  {
    title: "Frontend Engineer",
    icon: frontend_img,
  },
  {
    title: "Backend Engineer",
    icon: backend_img,
  },
  {
    title: "Full Stack Engineer",
    icon: fullstack_img,
  },
];