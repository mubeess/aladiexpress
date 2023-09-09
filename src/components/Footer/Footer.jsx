import {
  CreditCardOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { styled } from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <div className="box-one">
        <div className="header">
          <img src="logo.jpeg" />
        </div>
        <div className="list">
          <p>
            We are a team of designers and developers that create high quality
            HTML Template & Woocommerce, Shopify Theme.
          </p>

          <p>
            <strong>ADDRESS:</strong> 6688Princess Road, London, Greater London
            BAS 23JK, UK
          </p>
          <p>
            <strong>PHONE:</strong>(+123) 123 321 345
          </p>
          <p>
            <strong>EMAIL:</strong> info@yourdomain.com
          </p>
        </div>
      </div>
      <div className="box-two">
        <div className="header">
          <h3>Products</h3>
        </div>
        <div className="list">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="box-three">
        <div className="header">
          <h3>Our Company</h3>
        </div>
        <div className="list">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="box-four">
        <div className="header">
          <h3>Follow Us</h3>
          <div className="icons">
            <div>
              <FacebookOutlined />
            </div>
            <div>
              <InstagramOutlined />
            </div>
            <div>
              <TwitterOutlined />
            </div>
            <div>
              <YoutubeOutlined />
            </div>
          </div>
        </div>
        <div className="list">
          <h3>Sign Up To Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <input type="submit" />
          </form>
        </div>
      </div>
      <div className="box-five">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          unde tenetur consequuntur, mollitia, error molestias harum assumenda
          porro delectus sit vel fugit quasi quis sint at dolor quibusdam qui
          odit?
        </p>

        <div className="icons">
          <div>
            <CreditCardOutlined />
          </div>
          <div>
            <CreditCardOutlined />
          </div>
          <div>
            <CreditCardOutlined />
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 5px;
  background: #f7f7f7;
  padding-top: 40px;
  div {
    padding: 0px 0.5rem;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  ul li {
    list-style: none;
    margin: 10px 0px;
  }
  li a {
    text-decoration: none;
    color: #888888;
  }
  li a:hover {
    text-decoration: underline;
    color: #000;
  }
  .box-five {
    grid-column: span 4; /* This will make .box-five span three columns */
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icons {
    display: flex;
    padding: 0;
    margin: 0;
    font-size: 1.3rem;
  }
  @media screen and (max-width: 977px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    .box-four {
      grid-column: 1/4;
    }
  }

  @media screen and (max-width: 730px) {
    grid-template-columns: repeat(2, 1fr);
    .box-one {
      grid-column: span 4;
    }
    .box-four {
      grid-column: 1/3;
    }
  }

  @media screen and (max-width: 570px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    .box-two {
      grid-column: span 4;
    }
  }
`;
