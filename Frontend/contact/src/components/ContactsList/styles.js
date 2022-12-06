import styled from "styled-components";

export const ContactInfo = styled.div`
  width: 550px;

  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem;

  background-color: var(--white);

  border-radius: 5px;

  h2 {
    color: var(--blue-3);
    text-align: center;
  }

  .quantityPara {
    font-size: 18px;
    font-weight: bold;

    color: var(--blue-3);

    margin-bottom: 0.5rem;

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

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`;
