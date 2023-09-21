import React from 'react';
import styled from 'styled-components';
import Input from '../../components/Input/Input';
import { Select } from 'antd';

function RegistrationPage() {
  return (
    <SellerCont>
      <div>
        <section className="main ">
          <div className="grid">
            <Input
              label={'First Name'}
              placeholder={'Enter First Name'}
              outlined
            />
            <Input
              label={'Last Name'}
              placeholder={'Enter First Lastname'}
              outlined
            />
          </div>
          <div className="grid">
            <Input label={'Gender'} placeholder={'Gender'} outlined />
            <Input label={'Phone Number'} placeholder={'Phone'} outlined />
          </div>
          <div className="grid">
            <Input
              label={'Email'}
              type="email"
              placeholder={'Enter Email'}
              outlined
            />
            <Input
              label={'Password'}
              type="password"
              placeholder={'Enter Password'}
              outlined
            />
          </div>
          <Input
            label={'Address'}
            type="text"
            placeholder={'Enter street Address'}
            outlined
          />
          <label className="label">Country</label>
          <CustomeSelect
            defaultValue="lucy"
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />

          <div className="grid">
            <Input
              label={'Town/City'}
              type="text"
              placeholder={'Enter town or city'}
              outlined
            />
            <Input
              label={'Town/City'}
              type="text"
              placeholder={'Enter town or city'}
              outlined
            />

            <Input
              label={'Postal Code'}
              type="text"
              placeholder={'Enter postal code'}
              outlined
            />
          </div>
          <div>
            <h4>Bank Details</h4>
            <div className="grid">
              <Input
                label={'Bank Name'}
                type="text"
                placeholder={'Enter bank name'}
                outlined
              />
              <Input
                label={'Account Name'}
                type="text"
                placeholder={'Enter account name'}
                outlined
              />
            </div>
            <div className="grid">
              <Input
                label={'Account Number'}
                type="text"
                placeholder={'Enter account number'}
                outlined
              />
              <Input
                label={'Routing Number'}
                type="text"
                placeholder={'Enter routing number'}
                outlined
              />
            </div>
            <div className="grid">
              <Input
                label={'IBAN Number'}
                type="text"
                placeholder={'Enter IBAN number'}
                outlined
              />
              <Input
                label={'Bank Location'}
                type="text"
                placeholder={'Enter bank location'}
                outlined
              />
            </div>

            <h4>Experience and References</h4>
            <div className="grid">
              <div>
                <p className="file-label">Upload company certificate</p>
                <label htmlFor="certificate" className="file-box">
                  Click to <strong>attach</strong> file
                </label>
                <input
                  id="certificate"
                  type="file"
                  style={{ display: 'none' }}
                />
              </div>
              <div>
                <p className="file-label">Upload tax certificate</p>
                <label htmlFor="certificate" className="file-box">
                  Click to <strong>attach</strong> file
                </label>
                <input
                  id="certificate"
                  type="file"
                  style={{ display: 'none' }}
                />
              </div>
            </div>

            <div>
              <p className="file-label">Upload bank recommendation</p>
              <label htmlFor="certificate" className="file-box">
                Click to <strong>attach</strong> file
              </label>
              <input id="certificate" type="file" style={{ display: 'none' }} />
            </div>

            <label className="label">Seller category</label>
            <CustomeSelect
              placeholder="Select"
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
            <div className="grid">
              <div>
                <p className="label">Subscription cost</p>
                <p className="price">NGN 2,000</p>
              </div>
              <div>
                <p className="label">Registration fee </p>
                <p className="price">NGN 5,000</p>
              </div>
            </div>
          </div>
          <div className="btnCont">
            <button className="signup">Sign up</button>
            <button className="login">Already have an account? Login</button>
          </div>
        </section>
      </div>
      <section className="imageCont">
        <img src="1.jpg" width={'60%'} />
      </section>
    </SellerCont>
  );
}

export default RegistrationPage;

const SellerCont = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;

  section {
    margin: 10px;
  }
  .header {
    font-size: larger;
    margin: 0;
    padding: 0;
    line-height: 10px;
  }
  .info {
    font-size: 13px;
    margin-bottom: 0;
    color: #989898;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .label {
    font-size: 13px;
    font-weight: 500;
    margin: 10px 0px;
    display: block;
    color: #514f4f;
    text-transform: 'uppercase';
    height: 20;
  }
  button {
    border: none;
    padding: 8px;
    width: 100%;
    margin: 10px 0px;
    border-radius: 5px;
  }
  .signup {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background: var(--yellow);
  }
  .login {
    background: none;
    border: 1px solid var(--border);
  }
  .btnCont {
    margin: 50px auto;
    width: 90%;
  }

  .price {
    background: var(--border);
    padding: 10;
    padding: 5px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid lightgray;
  }
  .file-label {
    font-size: 13px;
    font-weight: 500;
    margin: 5px 0px;
    display: block;
    color: #514f4f;
    text-transform: 'uppercase';
  }
  .file-box {
    width: 80%;
    display: block;
    text-align: center;
    border-radius: 6px;
    border: 1px dashed lightgrey;
    padding: 14px;
    font-size: x-small;
    cursor: pointer;
    color: grey;
  }

  @media screen and (max-width: 768px) {
    .btnCont {
      width: 90%;
    }
    .imageCont {
      display: none;
    }
  }
`;

const CustomeSelect = styled(Select)`
  width: 100%;
  background: #fff;
  border-radius: 15px;
  height: 35;
`;
