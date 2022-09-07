import Glass from "@/ui/shared/glass"
import Layout from "@/ui/shared/layout"
import styled from "styled-components"
import Tilt from "react-parallax-tilt"
import { useTheme } from "next-themes"
import { useState } from "react"

export default function SandboxPage() {
  const { theme, setTheme } = useTheme()
  const [hovering, setHovering] = useState(false)
  return (
    <Layout>
      <MainColumn>
        <div
          style={{
            width: "300px",
            height: "300px",
            paddingTop: "30px",
          }}
        >
          <Tilt
            tiltMaxAngleX={12.5}
            tiltMaxAngleY={12.5}
            style={{ width: "200px", height: "200px" }}
            tiltReverse
            glareEnable
            glarePosition="all"
            glareMaxOpacity={0.1}
            glareColor={theme === "dark" ? "#fff" : "#000"}
            onEnter={() => setHovering(true)}
            onLeave={() => setHovering(false)}
          >
            <Glass enableStaticGlare={!hovering} />
          </Tilt>
        </div>
      </MainColumn>
    </Layout>
  )
}

const MainColumn = styled.div`
  grid-column-start: 2;
  @media (min-width: 1280px) {
    grid-column-start: 3;
  }
`
