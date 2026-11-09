import linkedInLogo from "../assets/linkedIn-logo.png";
import gitHubLogo from "../assets/github-logo.png";

export default function Footer() {
  return (
    <>
      <footer>
        <a href="https://www.linkedin.com/in/pembag/" class="link linkedIn">
          <img src={linkedInLogo} alt="linkedIn logo" />
        </a>
        <a href="https://github.com/pembag" class="link github">
          <img src={gitHubLogo} alt="github logo" />
        </a>
      </footer>
    </>
  );
}
