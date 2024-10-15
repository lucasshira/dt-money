import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${props => props.theme["gray-900"]};
    color: ${props => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background-color: transparent;
    border: 1px solid ${props => props.theme["green-300"]};
    color: ${props => props.theme["green-300"]};
    font-weight: bold;
    border-radius: 6px;
    padding: 1rem;
    cursor: pointer;

    &:hover {
      background-color: ${props => props.theme["green-500"]};
      border-color: ${props => props.theme["green-500"]};
      color: ${props => props.theme["white"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`