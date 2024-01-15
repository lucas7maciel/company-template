export const SocialMedia = (props) => (
  <div className={props.style}>
    <img
      src={require("../../../assets/social-media/linkedin-icon.png")}
      onClick={() =>
        window.open(
          "https://www.linkedin.com/in/lucas-maciel-618930236/",
          "_blank"
        )
      }
      alt="LinkedIn"
    />
    <img
      src={require("../../../assets/social-media/whatsapp-icon.png")}
      onClick={() => window.open("https://google.com", "_blank")}
      alt="WhatsApp"
    />
    <img
      src={require("../../../assets/social-media/facebook-icon.png")}
      onClick={() => window.open("https://google.com", "_blank")}
      alt="Facebook"
    />
    <img
      src={require("../../../assets/social-media/instagram-icon.png")}
      onClick={() => window.open("https://google.com", "_blank")}
      alt="Instagram"
    />
  </div>
);
