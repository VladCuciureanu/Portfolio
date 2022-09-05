import styled from "styled-components"

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column-start: 2;
  margin-top: 9rem;
  padding-bottom: 9rem;
  width: 100%;
  @media (min-width: 1280px) {
    grid-column-start: 3;
  }
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const Group = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  align-items: center;
`

const Footnote = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--colors-gray7);
  margin-top: 1rem;
  margin-right: auto;
  font-size: small;
`

const VercelConteiner = styled.div`
  flex-shrink: 0;
  white-space: nowrap;
`
const Vercel = () => <VercelConteiner>Powered by ▲Vercel</VercelConteiner>

const FooterStyles = { Container, Group, Footnote, Navigation, Vercel }
export default FooterStyles
