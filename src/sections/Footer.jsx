const Footer = () => {
  return (
    <section
      className="
      c-space 
      pt-7 
      pb-3 
      border-t 
      border-black-300 
      flex 
      justify-between 
      items-center 
      flex-wrap 
      gap-5"
    >
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a href="https://www.linkedin.com/in/priyanshu-vyas" target="_blank">
          <div className="social-icon">
            <img
              src="/assets/linkedin.svg"
              alt="linkedin"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a href="https://www.github.com/priyanshu-vyas" target="_blank">
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a href="https://www.x.com/_priyanshuvyas_" target="_blank">
          <div className="social-icon">
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a href="https://www.instagram.com/_priyanshuvyas_" target="_blank">
          <div className="social-icon">
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
      </div>
      <p className="text-white-500">
        <a href="#">© 2024 Priyanshu Vyas. All rights reserved.</a>
      </p>
    </section>
  );
};

export default Footer;
