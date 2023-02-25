import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AditionalCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  gap: 15px;
  border-bottom: 3px solid rgb(52, 162, 212);
`;

export const List = styled.ul`
  display: inline-flex;
  flex-direction: column;
  gap: 15px;

  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: grey;
`;

export const Item = styled.li`
  max-width: 200px;
  align-items: center;
  display: inline-flex;
  /* padding: 15px; */
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  ::before {
    display: flex;
    margin-left: 15px;
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: grey;
  }
`;

export const AditionLink = styled(NavLink)`
  display: flex;
  width: 100%;
  padding: 15px;
  text-decoration: none;
  color: inherit;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: rgb(52, 162, 212);
  }
`;
