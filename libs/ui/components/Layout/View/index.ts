import React, { ReactNode } from 'react';
import styled from 'styled-components';

type IView = {
  name?: string;
  component?: string;
  children: ReactNode;
};

const View = styled(({ component = 'div', children, ...props }: IView) =>
  React.createElement(component, props, children)
)`
  ${''}
`;

export default View;
