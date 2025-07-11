import styled from 'styled-components'

export const StyledForm = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    content: '';
    opacity: 0.7;
  }

  div {
    position: relative;
    color: ${({ theme }) => theme.colors.light};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: auto;
    padding: ${({ theme }) => theme.spacing.lg} 0;
  }
`

export const HeroTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.spacing.xl};
  }
`
