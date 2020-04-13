import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkCustom = styled(Link)`
  margin-bottom: 10px;
  color: #212121;
  &:hover {
    text-decoration: none;
    color: #8167a9;
  }
`;