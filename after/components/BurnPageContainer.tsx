// BurnPageContainer.tsx

import React from 'react';
import styled from 'styled-components';

const DashboardLayoutStyled = styled.div``; // Define your styled components as needed

interface BurnPageContainerProps {
  children: React.ReactNode;
}

export const BurnPageContainer: React.FC<BurnPageContainerProps> = ({ children }) => {
  return (
    <DashboardLayoutStyled className="burnpage">
      {children}
    </DashboardLayoutStyled>
  );
};
