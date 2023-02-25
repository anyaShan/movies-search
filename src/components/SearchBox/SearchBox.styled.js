import styled from 'styled-components';

import { Form, Field } from 'formik';
import search from '../../images/search.svg';

export const Wrapper = styled.div`
  margin-bottom: 25px;
`;

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormInput = styled(Field)`
  display: flex;
  width: 100%;
  max-width: 400px;

  font: inherit;
  font-size: 18px;

  outline: none;

  padding: 10px;
  border: 1px solid rgb(241, 188, 90);
  border-radius: 4px;
  background-color: white;

  &::placeholder {
    color: rgba(52, 162, 212, 0.5);

    font-size: 16px;
    line-height: 1.25px;
  }

  :focus {
    outline: 1px solid rgb(52, 162, 212);
    border: 1px solid transparent;
  }
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  margin-left: 5px;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 4px;
  background-image: url('${search}');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchFormLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
