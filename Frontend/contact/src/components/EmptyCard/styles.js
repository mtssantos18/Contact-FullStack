import styled from "styled-components";

export const EmptyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  margin-top: 1rem;

  h2 {
    color: var(--black);

    font-size: 20px;
  }

  p {
    font-size: 18px;

    button {
      background-color: var(--white);

      border: 2px solid var(--blue-3);
      border-radius: 5px;

      width: 100px;
      height: 28.5px;

      &:hover {
        background-color: var(--blue-3);
        color: var(--white);
      }
    }
  }
`;
