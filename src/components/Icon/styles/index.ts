import styled from 'styled-components';
import { StyledIconProps } from '..';

export const StyledIcon = styled.img<StyledIconProps>`
  cursor: ${(props) => props.cursor};
`;
