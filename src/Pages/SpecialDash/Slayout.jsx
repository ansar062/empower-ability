// Layout.js

import React from 'react';
import Sheader from './Sheader';
import Ssidebar from './Ssidebar';
import Sfooter from './Sfooter';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Ssidebar />
      <Content>
        <Sheader />
        <div style={{ marginLeft: '250px' }}>{children}</div>
        <Sfooter />
      </Content>
    </Container>
  );
};

export default Layout;
