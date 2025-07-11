import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg} 0;
`
