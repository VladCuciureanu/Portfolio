import { Fragment, useState } from "react"
import DockStructure from "./constants"
import DockItem from "./item"
import { default as Styles } from "./styles"
import ThemeSwitcher from "./theme-switcher"

export default function FooterDock() {
  const [mouseX, setMouseX] = useState<number | undefined>(undefined)

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    setMouseX(event.clientX)
  }

  return (
    <Container
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        setMouseX(undefined)
      }}
      key="footer-dock"
    >
      {DockStructure.map((group, groupIndex) => {
        return (
          <Fragment key={groupIndex}>
            {group.items.map((item, itemIndex) => {
              return (
                <DockItem
                  key={itemIndex}
                  dataKey={itemIndex}
                  mouseX={mouseX}
                  icon={item.icon}
                  href={item.href}
                  onClick={item.onClick}
                />
              )
            })}
            <Divider key={"d-" + groupIndex} />
          </Fragment>
        )
      })}
      <ThemeSwitcher key={"dock-theme-switcher"} mouseX={mouseX} />
    </Container>
  )
}

export interface DockGroup {
  name?: string
  items: DockItem[]
}

export interface DockItem {
  icon: React.ReactNode
  label: string
  href?: string
  onClick?: Function
}

const Container = Styles.Container
const Divider = Styles.Divider
