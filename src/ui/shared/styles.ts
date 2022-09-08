import styled from "styled-components"

const Heading = styled.h1`
  font-weight: 800;
  font-size: 2.25rem;
`

const Subheading = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.85rem;
  color: rgb(var(--colors-gray-11));
`

const Section = styled.section`
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const SharedStyles = {
  Heading,
  Subheading,
  Section,
}

export default SharedStyles
