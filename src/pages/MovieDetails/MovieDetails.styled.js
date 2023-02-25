import { NavLink } from 'react-router-dom';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import styled from 'styled-components';

export const BackLink = styled(NavLink)`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
  justify-content: center;
  align-items: flex-end;
  width: 200px;
  /* width: 100%; */
  padding: 10px;
  border-radius: 5px;

  text-align: center;
  text-decoration: none;
  color: inherit;

  background-color: transparent;
  color: rgb(52, 162, 212);
  box-shadow: transparent;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: white;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
      rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  }
`;

export const Icon = styled(AiOutlineDoubleLeft)`
  margin-right: 5px;
`;
