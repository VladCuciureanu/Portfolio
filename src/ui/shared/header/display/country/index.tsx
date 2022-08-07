import Link from "next/link"
import { default as Styles } from "../styles"

export default function HeaderCountry() {
  return (
    <Link href="https://en.wikipedia.org/wiki/Cluj-Napoca" passHref>
      <Gray as="a" target="_blank">
        🇷🇴 Cluj-Napoca, Romania
      </Gray>
    </Link>
  )
}

const Gray = Styles.Gray
