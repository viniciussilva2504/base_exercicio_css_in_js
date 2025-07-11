import styled from 'styled-components'

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 12px;
  margin-top: 40px;
`

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  height: 40px;
  padding: 0 ${({ theme }) => theme.spacing.md};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export const SearchField = styled.input`
  padding: 0 ${({ theme }) => theme.spacing.md};
  outline-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 40px;
  font-size: 16px;
`
