import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AppWrap = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;

  background-color: rgb(241, 188, 90);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavWrap = styled.nav`
  display: flex;
  gap: 25px;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  color: #fff;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.06em;

  &.active {
    color: rgb(52, 162, 212);
    background-color: rgb(255, 255, 255);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: rgb(52, 162, 212);
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
