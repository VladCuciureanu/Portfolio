import { default as Clock } from "./clock"
import { default as Country } from "./country"
import { default as NowPlaying } from "./now-playing"
import { default as Styles } from "./styles"

type HeaderDisplayProps = {
  id?: string
  key?: string
  tabIndex?: number
  onChange?: Function
}

export default function HeaderDisplay(props: HeaderDisplayProps) {
  return (
    <Container id={props.id} tabIndex={props.tabIndex} key={props.key}>
      <Clock />
      <Divider />
      <Country />
      <Divider />
      <NowPlaying onChange={props.onChange} />
    </Container>
  )
}

const Container = Styles.Container
const Divider = Styles.Divider
