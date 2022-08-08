import Layout from "@/ui/shared/layout"
import { default as Styles } from "@/ui/index/styles"
import { default as Constants } from "@/ui/index/constants"
import { Artist } from "@/lib/spotify/types"
import { default as LinkWrapper } from "@/ui/index/link-wrapper"
import fetcher from "@/lib/fetcher"
import Header from "@/ui/shared/header"
import useSWR from "swr"

export default function Home() {
  const { data } = useSWR<{ artists: Artist[] }>(
    "/api/spotify/top-artists",
    fetcher,
  )
  const topArtists = data ? data.artists : []

  return (
    <Layout>
      <Container id="main-container">
        <Header />
        <Heading>Vlad Cuciureanu</Heading>
        <Text>
          JavaScript Enthusiast, Audio-Video Tinkerer, Green Haribo Bear.
        </Text>
        <Divider />
        <Text>
          {`Exploring audio streaming with `}
          {Lyra}
          {` and experimenting on collaboration tools at `}
          {Hymn}
          {`.`}
          <br />
          {`Blessed husband of a `}
          <i>brilliant</i>
          {` woman. `}
          <Emphasis>Full-stack Software Developer</Emphasis>
          {` at `}
          {Cloudflight}
          {`.`}
        </Text>
        <Subheading>Ethos</Subheading>
        <Text>
          {`When life gives you `}
          <Emphasis>lemonade</Emphasis>
          {`, make `}
          <Emphasis>lemons</Emphasis>
          {`. Life will be all like `}
          <Emphasis>{`'What?!'`}</Emphasis>
          {`... Just kidding!`}
        </Text>
        <Text style={{ paddingRight: "25px" }}>
          {`
          Passionate about building polished software and web products. Working
          carefully and methodically. Mindfully spending my time and attention
          so that I can produce quality work and feel productive. In pursuit of
          aiding towards the betterment of humanity.
          `}
        </Text>
        <Text>
          {`Aficionado of many genres of music, from `}
          <Emphasis>Pop</Emphasis>
          {`, to `}
          <Emphasis>Death Metal</Emphasis>
          {` to `}
          <Emphasis>Gregorian chanting</Emphasis>
          {`. `}
          <br />
          {`Have been listening to a lot of `}
          <ArtistLink artist={topArtists.at(0)} />
          {`, `}
          <ArtistLink artist={topArtists.at(1)} />
          {` and `}
          <ArtistLink artist={topArtists.at(2)} />
          {` these days.`}
        </Text>
      </Container>
    </Layout>
  )
}

function ArtistLink(props: { artist: Artist | undefined }) {
  if (props.artist === undefined) {
    return <>Error</>
  }

  return (
    <LinkWrapper
      label={props.artist.name}
      href={props.artist.url}
      target="_blank"
    />
  )
}

const Container = Styles.Container
const Heading = Styles.Heading
const Subheading = Styles.Subheading
const Emphasis = Styles.Emphasis
const Anchor = Styles.Anchor
const Text = Styles.Text
const Divider = Styles.Divider

const Hymn = Constants.HymnLink
const Lyra = Constants.LyraLink
const Cloudflight = Constants.CloudflightLink
