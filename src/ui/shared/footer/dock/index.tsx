import { Fragment, useState } from "react"
import DockStructure from "./constants"
import DockItem from "./item"
import { default as Styles } from "./styles"
import ThemeSwitcher from "./theme-switcher"

export default function FooterDock() {
  const [mouseX, setMouseX] = useState<number | undefined>(undefined)

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    if (matchMedia("(hover: none)").matches) {
      return
    }
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
      <Slider>
        {DockStructure.map((group, groupIndex) => {
          return (
            <Fragment key={groupIndex}>
              {group.items.map((item, itemIndex) => {
                return (
                  <DockItem
                    key={itemIndex}
                    dataKey={itemIndex}
                    mouseX={mouseX}
                    tooltip={item.label}
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
      </Slider>
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
const Slider = Styles.Slider
const Divider = Styles.Divider
