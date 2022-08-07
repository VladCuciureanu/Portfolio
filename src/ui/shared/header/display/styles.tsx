import styled from "styled-components"

const Container = styled.span`
  gap: var(--space-1);
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-start;
  flex-direction: row;
  display: flex;
  box-sizing: border-box;
`

const Divider = styled.div`
  width: 2px;
  height: 2px;
  border-radius: 9999px;
  background: var(--colors-gray10);
`

const Text = styled.div`
  color: var(--colors-gray10);
  font-weight: 400;
  line-height: 28px;
  font-size: 11px;
  font-family: var(--fonts-mono);
  display: block;
  margin: 0px;
  white-space: nowrap;
`

const Gray = styled(Text)`
  filter: grayscale(1);
  transition: filter 150ms ease 0s;
  cursor: pointer;

  &:hover {
    color: var(--colors-gray12);
    filter: grayscale(0);
  }
`

const HeaderDisplayStyles = {
  Gray,
  Text,
  Divider,
  Container,
}

export default HeaderDisplayStyles
