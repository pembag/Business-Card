import myProfile from "../assets/my-profile.png"

export default function Info() {
  return (
    <>
      <header>
        <img src={myProfile} alt="profile-picture" />
        <h1>Pemba Gurung (Penn)</h1>
        <span>Full Stack Developer</span>
        <span>Software Engineer</span>
        <button className="email-btn"> Email </button>
      </header>
    </>
  );
}
