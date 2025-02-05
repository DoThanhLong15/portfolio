import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer pos-relative">
        <div className="line pos-absolute"></div>
        <div className="content flex">
          <div className="description-area">
            <div className="flex">
              <h3 className="title">Long</h3>
              <div className="email">longd8833@gmail.com</div>
            </div>
            <p className="description">Backend developer</p>
          </div>

          <div className="media">
            <h3 className="title">Media</h3>
            <p>Icon</p>
          </div>
        </div>

        <div className="copy-right"></div>
      </div>
    </>
  );
};

export default Footer;
