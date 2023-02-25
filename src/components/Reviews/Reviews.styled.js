import styled from 'styled-components';

export const ReviewsCard = styled.div`
  padding-top: 15px;
  border-top: 3px solid rgb(52, 162, 212);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;

export const Item = styled.li`
  padding: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Thumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  line-height: 1.2;
  b {
    font-size: 18px;
  }

  p {
    font-weight: 600;
    font-size: 16px;

    color: grey;
  }
`;

export const Error = styled.div`
  text-align: center;
`;
