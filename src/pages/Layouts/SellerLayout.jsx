import { Outlet } from 'react-router-dom';
import { SideMenu } from '../../seller/components/SideMenu';
import { styled } from 'styled-components';
import {
  BellOutlined,
  CloseOutlined,
  DownOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { Drawer } from 'antd';
import { useState } from 'react';

function SellerLayout() {
  const [open, setOpen] = useState(false);

  return (
    <Cont>
      <header>
        <div className="menuIcon" onClick={() => setOpen(!open)}>
          {open ? <CloseOutlined /> : <MenuOutlined />}
        </div>
        <div>
          <p>
            <BellOutlined />
            Notification
          </p>
          <div className="userCard">MU</div>
          <DownOutlined />
        </div>
      </header>
      <aside>
        <SideMenu />
      </aside>
      <section>
        <Drawer
          placement={'left'}
          closable={false}
          onClose={() => setOpen(!open)}
          open={open}
          key={'left'}>
          <SideMenu />
        </Drawer>
      </section>
      <main>
        <Outlet />
      </main>
    </Cont>
  );
}

export default SellerLayout;

export const Cont = styled.div`
  display: grid;
  grid-template-columns: 200px calc(100% - 200px);
  grid-template-rows: 2rem auto;
  gap: 0;
  background: #f4f4f4;
  main {
    margin: 5px;
    width: 95%;
    margin: auto;
    min-height: 95%;
  }
  header {
    grid-column: 2/4;
    grid-row: 1/2;
    border-bottom: 1px solid lightgray;
    background: #fff;
    height: 40px;
    padding-right: 10px;
    display: flex;
    justify-content: flex-end;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    p {
      margin-right: 15px;
      font-size: small;
    }
    .userCard {
      background: #c6f2cf;
      padding: 3px;
      height: 25px;
      width: 25px;
      border-radius: 100px;
      margin: 7px;
      font-size: small;
    }
    .menuIcon {
      display: none;
    }
  }
  aside {
    grid-column: 1/2;
    grid-row: 1/3;
  }
  section {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    section {
      display: block;
    }
    aside {
      display: none;
    }
    header {
      grid-column: 1/2;
      justify-content: space-between;
      .menuIcon {
        display: flex;
        margin: 10px;
      }
    }
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
`;
