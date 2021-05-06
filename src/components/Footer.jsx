import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
        <div>
          <img className="icons-footer" src="images/instagram.png" alt="instagram" />
          <img className="icons-footer" src="images/twitter.png" alt="twitter" />
          <img className="icons-footer" src="images/whatsapp.png" alt="whatsapp" />
        </div>
        <div>
          <img className="icons-footer" src="images/computador-portatil.png" alt="Pc" />
        </div>
      </footer>
    );
  }
}

export default Footer;
