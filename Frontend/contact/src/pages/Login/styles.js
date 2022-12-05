import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--blue-3);
`;

export const FormBox = styled.div`
  background-color: var(--grey-2);
  color: var(--blue-3);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.6rem;

  width: 400px;

  padding: 2rem;

  border-radius: 4px;

  h2 {
    margin-top: 1rem;
    font-weight: 700;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    fieldset {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.4rem;

      border: none;
    }

    label {
      font-size: 18px;
      width: 100%;

      display: inline-flex;
      justify-content: space-between;

      span {
        color: red;
      }
    }

    input {
      width: 100%;
      height: 38.38px;

      background-color: var(--grey-1);

      border: none;
      border-radius: 4px;

      padding-left: 1rem;

      ::placeholder {
        color: var(--blue-3);
        font-size: 14px;
      }
    }

    button {
      background-color: var(--blue-3);

      border: none;
      border-radius: 4px;

      font-size: 18px;
      color: var(--white);

      width: 100%;
      height: 38.5px;

      margin-top: 0.6rem;

      &:hover {
        background-color: var(--blue-2);
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    small {
      margin-top: 1rem;
      font-size: 16px;
      color: var(--blue-3);
    }

    button {
      background-color: var(--blue-3);

      height: 38.5px;

      border: none;
      border-radius: 4px;

      font-size: 18px;
      color: var(--white);

      &:hover {
        background-color: var(--blue-2);
      }
    }
  }
`;
