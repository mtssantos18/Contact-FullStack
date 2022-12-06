import styled from "styled-components";

export const MyInfo = styled.div`
  width: 450px;

  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem;

  background-color: var(--white);

  border-radius: 5px;

  h2 {
    color: var(--blue-3);
    text-align: center;
  }

  p {
    font-size: 16px;
    font-weight: bold;

    span {
      font-size: 18px;
      font-weight: normal;
    }
  }

  .buttonDel {
    background-color: var(--orange-1);
    color: var(--grey-1);
    font-size: 18px;
    font-weight: bold;

    margin-top: 0.7rem;
    margin-left: 4rem;
    margin-bottom: 0.2rem;

    width: 70%;
    height: 38.5px;

    border: none;
    border-radius: 5px;

    &:hover {
      background-color: var(--orange-2);
    }
  }
`;
