import styled from "styled-components";

interface RowButtonProps {
  readonly danger?: boolean;
}

interface ButtonsContainerProps {
  readonly row?: boolean;
}

interface SubmitButtonProps {
  readonly register?: boolean;
}

export const Button = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.primary5};
  border: transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  padding: 0.5rem 1rem;
  box-shadow: ${({ theme }) => theme.shadow2};
  transition: ${({ theme }) => theme.transition};
  text-transform: capitalize;
  display: inline-block;

  &:hover {
    background: ${({ theme }) => theme.primary7};
    box-shadow: ${({ theme }) => theme.shadow3};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const RowButton = styled(Button)<RowButtonProps>`
  width: 4rem;
  height: 2rem;
  display: grid;
  place-items: center;
  box-shadow: none;
  transition: none;
  padding: 0;
  background: ${({ danger, theme }) => danger && theme.lightRed};

  &:hover {
    border: ${({ theme }) => `1px solid ${theme.white}`};
    background: ${({ danger, theme }) =>
      danger ? theme.lightRed : theme.primary5};
  }
`;

export const SubmitButton = styled(Button)<SubmitButtonProps>`
  width: ${({ register }) => register && "100%"};
  margin-top: ${({ register }) => register && "1.5rem"};
`;

export const MemberButton = styled.button`
  background: transparent;
  border: transparent;
  color: ${({ theme }) => theme.primary5};
  cursor: pointer;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
`;

export const ButtonsContainer = styled.div<ButtonsContainerProps>`
  display: flex;
  gap: 0.75rem;
  margin: ${({ row }) => !row && "1rem 0"};
  justify-content: ${({ row }) => row && "center"};
`;
