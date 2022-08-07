import styled from "styled-components"

const Container = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 5;
`
const Heading = styled.h1`
  letter-spacing: -0.5px;
  font-size: var(--fontSizes-20);
  font-family: var(--fonts-head);
  font-weight: 600;
  color: var(--colors-gray12);
  line-height: 28px;
  display: block;
  margin: 0px;
`

const Text = styled.p`
  margin: 0px;
  margin-top: 18px;
  color: var(--colors-gray11);
  font-size: 15px;
  font-family: var(--fonts-body);
  font-weight: 400;
  line-height: 28px;
  display: block;
`

const Subheading = styled.h2`
  margin: 0px;
  margin-top: 16px;
  color: var(--colors-gray12);
  font-weight: 500;
  font-size: 15px;
  font-family: var(--fonts-body);
  line-height: 28px;
  display: block;
`

const Anchor = styled.a`
  text-decoration: none;
  color: var(--colors-gray12);
  font-weight: 500;
  border-bottom: 1px solid var(--colors-gray6);
  padding-bottom: 4px;
  transition: border-color 150ms ease;
  display: inline-block;
  line-height: 1em;
  display: inline-flex;
  flex-direction: row;
  margin-left: 1px;
  margin-right: 1px;

  &:hover {
    border-color: var(--colors-gray8);
  }
`

const Emphasis = styled.span`
  border-bottom: 1px solid var(--colors-gray6);
  padding-bottom: 4px;
`

const Svg = styled.svg`
  width: 95%;
  height: 16px;
  stroke: var(--colors-gray6);
  margin-top: 1rem;
  margin-bottom: 1.15rem;
`

function Divider() {
  return (
    <Svg>
      <defs>
        <pattern
          id="bg"
          patternUnits="userSpaceOnUse"
          width="21.25"
          height="16"
          style={{
            fill: "none",
            stroke: "inherit",
            strokeWidth: "1",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
          }}
        >
          <path d="M0,8c1.3-1.5,2.7-3,5.3-3c5.3,0,5.3,6.1,10.6,6.1c2.7,0,4-1.5,5.3-3" />
        </pattern>
      </defs>
      <rect width="100%" height="16px" fill="url(#bg)" stroke="none" />
    </Svg>
  )
}

const IndexStyles = {
  Container: Container,
  Divider: Divider,
  Emphasis: Emphasis,
  Heading: Heading,
  Subheading: Subheading,
  Text: Text,
  Anchor: Anchor,
}

export default IndexStyles
