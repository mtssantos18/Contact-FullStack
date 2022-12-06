import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1001;
  position: fixed;
  inset: 0;

  .modal {
    max-width: 400px;
    width: 95%;
    height: 150px;

    background-color: var(--grey-1);
    position: absolute;
    border-radius: 10px;
    inset: 0;
    margin: auto;
    animation: fadeInModalChat 1s ease-in-out backwards;

    padding: 1rem;

    p {
      margin-bottom: 1rem;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;

    .buttonYes {
      width: 50px;
      height: 30px;

      color: var(--white);

      background-color: var(--orange-1);
      border-radius: 5px;

      border: none;

      &:hover {
        background-color: var(--orange-2);
      }
    }

    .buttonNo {
      width: 50px;

      border: none;

      color: var(--grey-1);
      background-color: var(--grey-3);
      border-radius: 5px;

      border: none;

      &:hover {
        background-color: var(--grey-4);
      }
    }
  }

  @keyframes fadeInModalChat {
    from {
      opacity: 0;
      transform: translateY(-30%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
    width: 100%;

    margin-top: 0.2rem;
    margin-bottom: 1rem;

    h2 {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: var(--blue-3);
    }

    svg {
      font-size: 20px;
      color: var(--grey-3);
      cursor: pointer;

      &:hover {
        color: var(--grey-4);
      }
    }
  }
`;
