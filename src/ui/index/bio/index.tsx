import fetcher from "@/lib/fetcher"
import { Artist } from "@/lib/spotify/types"
import Styles from "@/ui/shared/styles"
import useSWR from "swr"

export default function Biography() {
  // const { data } = useSWR<{ artists: Artist[] }>(
  //   "/api/spotify/top-artists",
  //   fetcher,
  // )
  // const topArtists = data ? data.artists : []
  // const artists = topArtists.map((artist) => (
  //   <Link
  //     key={artist.url}
  //     label={artist.name}
  //     href={artist.url}
  //     target={"_blank"}
  //   />
  // ))
  return (
    <>
      <Text style={{ marginTop: "2.45rem" }}>
        {`
          Exploring audio streaming with `}
        <Link label="Lyra" href="/lyra" target={"_blank"} />
        {` and experimenting on collaboration tools at `}
        <Link label="Hymn" href="/hymn" target={"_blank"} />
        {`.
          Blessed husband of a `}
        <i>brilliant</i>
        {` woman. `}
        <Underline>Full-stack Software Developer</Underline>
        {` at `}
        <Link
          label="Vladinski Technologies"
          href="https://vladinski.md"
          target={"_blank"}
        />
        {`.
        `}
      </Text>
      {/* <Text>
        {`
        Passionate about building polished software and web products. Working methodically and carefully.
        Mindfully spending my time and attention so that I can produce quality work and feel productive.
        In pursuit of aiding towards the betterment of humanity.`}
      </Text> */}
      {/* <Text>
        {`Aficionado of many genres of music, from `}
        <Underline>Pop</Underline>
        {`, to `}
        <Underline>Death Metal</Underline>
        {` to `}
        <Underline>Nedal</Underline>
        {`.
        Have been listening to a lot of `}
        {artists[0]}
        {`, `}
        {artists[1]}
        {` and `}
        {artists[2]}
        {` these days.`}
      </Text> */}
    </>
  )
}

const Text = Styles.Text
const Link = Styles.Link
const Underline = Styles.Underline
