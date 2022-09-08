import styled from "styled-components"

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column-start: 2;
  border-top: 1px solid rgb(var(--colors-gray-5));
  margin-top: 1.5rem;
  padding: 0.25rem;
  padding-top: 3.4rem;
  padding-bottom: 3.2rem;
  width: 100%;
  @media (min-width: 1280px) {
    grid-column-start: 3;
  }

  @media (max-width: 720px) {
    padding-bottom: 3.5rem;
  }
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

const Group = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  align-items: center;
  @media (max-width: 720px) {
    gap: 2rem;
  }
`

const Footnote = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: rgb(var(--colors-lowContrast));
  margin-top: 1rem;
  margin-right: auto;
  font-size: small;
  @media (max-width: 720px) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }
`

const VercelContainer = styled.div`
  flex-shrink: 0;
  white-space: nowrap;
`
const Vercel = () => <VercelContainer>Powered by ▲Vercel</VercelContainer>

const FooterStyles = { Container, Group, Footnote, Navigation, Vercel }
export default FooterStyles
