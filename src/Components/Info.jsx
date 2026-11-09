import myProfile from "../assets/my-profile.png";
import emailLogo from "../assets/email-logo.png";

export default function Info() {
  return (
    <>
      <header>
        <img src={myProfile} alt="profile-picture" />
        <h1 className="name">Pemba Gurung</h1>
        <h4 className="title developer">Full Stack Developer</h4>
        <h4 className="title engineer">Software Engineer</h4>

        <button className="email-btn">
          <a href="mailto:yourname@example.com" class="email-tag">
            <img src={emailLogo} alt="Email Logo" />
            <p>Email</p>
          </a>
        </button>
      </header>
    </>
  );
}
