import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
  padding-right: 50px;
  padding-left: 50px;
`;

export const SectionTitle = styled.h2`
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 5px;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;

export const List = styled.ul`
  list-style: disc;
  color: #008001;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  color: #008001;
  border-bottom: 2px solid #008001;
  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: #008001;
    border-bottom: 2px solid #ADFF2F;
  }
`;