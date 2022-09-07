import styled from "styled-components"

const Heading = styled.h1`
  margin-bottom: 8px;
  user-select: none;
  letter-spacing: -1px;
  line-height: var(--lineHeights-40);
  font-size: var(--fontSizes-32);
  font-family: var(--fonts-head);
  font-weight: 600;
  color: rgb(var(--colors-gray12);
`

const Subheading = styled.p`
  line-height: 28px;
  font-weight: 400;
  font-family: var(--fonts-body);
  font-size: 15px;
  color: rgb(var(--colors-gray11);
  border-bottom: 2px dotted rgb(var(--colors-gray6);
  padding-bottom: 24px;
  margin-bottom: 24px;
`

const SharedStyles = {
  Heading,
  Subheading,
}

export default SharedStyles
