import linkedInLogo from "../assets/linkedIn-logo.png"
import gitHubLogo from "../assets/github-logo.png";


export default function Footer() {
  return (
    <>
      <footer>
        <img src={linkedInLogo} alt="linkedIn logo" />
        <img src={gitHubLogo} alt="github logo" />
      </footer>
    </>
  );
}
