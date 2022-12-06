import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--grey-2);
`;

export const Header = styled.header`
  width: 100%;
  height: 5rem;

  background-color: var(--blue-3);
  color: var(--grey-2);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;

  h1 {
    font-size: 22px;
  }

  div {
    display: flex;
    gap: 1rem;

    button {
      border: none;
      border-radius: 4px;

      background-color: var(--grey-2);
      color: var(--black);
      font-size: 20px;

      width: 150px;
      height: 38.5px;

      padding: 0.1rem;

      &:hover {
        background-color: var(--grey-4);
        color: var(--white);
      }
    }
  }
`;
