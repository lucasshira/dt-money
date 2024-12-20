import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  padding: 2.5rem 3rem;
  border-radius: 6px;
  background: ${props => props.theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      background: ${props => props.theme["gray-900"]};
      color: ${props => props.theme["gray-300"]};
      border: 0;
      padding: 1rem;
      border-radius: 6px;

      &::placeholder {
        color: ${props => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 58px;
      background: ${props => props.theme["green-500"]};
      color: ${props => props.theme["white"]};
      padding: 0 1.25rem;
      font-weight: bold;
      margin-top: 1.5rem;
      border-radius: 6px;
      border: 0;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${props => props.theme["green-300"]};
        transition: background-color 0.2s
      }
    }
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`
interface TransactionTypeButtonProps {
  variant?: 'income' | 'outcome';
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background: ${props => props.theme["gray-700"]};
  color: ${props => props.theme["gray-300"]};
  padding: 1rem;
  border: 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  svg {
    color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]}
  }

  &[data-state='unchecked']:hover {
    background: ${props => props.theme["gray-600"]};
    transition: background-color 0.2s;
  }

  &[data-state='checked'] {
    color: ${props => props.theme.white};
    background: ${props => props.variant === 'income' ? props.theme["green-500"] : props.theme["red-500"]};

    svg {
      color: ${props => props.theme.white};
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  background-color: transparent;
  border: 0;
  color: ${props => props.theme["gray-500"]};

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
`