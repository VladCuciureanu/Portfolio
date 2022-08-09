import styled from "styled-components"

const Container = styled.footer`
  display: flex;
  align-items: flex-end;
  width: auto;
  height: 70px;
  padding-left: 10px;
  padding-right: 10px;
  position: fixed;
  bottom: -8px;
  background: var(--colors-dock-bg);
  box-shadow: var(--shadows-large);
  backdrop-filter: blur(100px) saturate(400%) brightness(100%);
  border: 1px solid var(--colors-grayA4);
  left: 50%;
  border-radius: 20px;
  opacity: 0;
  z-index: 10;
  transform: translate(-50%, -50%) translateY(64px);
  animation: 500ms ease 200ms 1 normal forwards running dock;

  @keyframes dock {
    0% {
      transform: translate(-50%, -50%) translateY(64px);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, -50%) translateY(0);
      opacity: 1;
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
`

const Divider = styled.div`
  margin: 0px 4px;
  border: 0px;
  width: 1px;
  height: 48px;
  background: var(--colors-grayA4);
  flex-shrink: 0;
`

const FooterElement = styled.div`
  transform: none;
  cursor: pointer;
  flex-shrink: 0;
  background-image: linear-gradient(
    45deg,
    var(--colors-dock-button-color-1),
    var(--colors-dock-button-color-2),
    var(--colors-dock-button-color-1),
    var(--colors-dock-button-color-2)
  );
  background-size: 200% 100%;
  border: 0px;
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 23%;
  position: relative;
  color: var(--colors-gray10);
  ---focusColor: var(--colors-gray7);
  font-family: var(--fonts-body);
  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.075);
  }

  & svg {
    width: 24px;
    height: 24px;
    stroke: var(--colors-gray10);
    stroke-width: 1.25;
  }
`

const FooterStyles = {
  FooterElement,
  Divider,
  Container,
  Wrapper,
}

export default FooterStyles

const LyraIcon = () => {
  return <>Lyra</>
}
const HymnIcon = () => {
  return <>Hymn</>
}

const HomeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="inherit"
      strokeWidth="inherit"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
const ProjectsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="inherit"
      strokeWidth="inherit"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
      <path d="m7 16.5-4.74-2.85"></path>
      <path d="m7 16.5 5-3"></path>
      <path d="M7 16.5v5.17"></path>
      <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
      <path d="m17 16.5-5-3"></path>
      <path d="m17 16.5 4.74-2.85"></path>
      <path d="M17 16.5v5.17"></path>
      <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
      <path d="M12 8 7.26 5.15"></path>
      <path d="m12 8 4.74-2.85"></path>
      <path d="M12 13.5V8"></path>
    </svg>
  )
}

const GithubIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="inherit"
      strokeWidth="inherit"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}
const MailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="inherit"
      strokeWidth="inherit"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
const TwitterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="inherit"
      strokeWidth="inherit"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
const LinkedInIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="inherit"
      strokeWidth="inherit"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
const LightThemeIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="inherit"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      data-projection-id="107"
    >
      <circle
        cx="12"
        cy="12"
        r="5"
        data-projection-id="108"
        transform-origin="12px 12px"
        transform="none"
      ></circle>
      <g data-projection-id="109" transform-origin="12px 12px" transform="none">
        <line x1="12" y1="1" x2="12" y2="3" data-projection-id="110"></line>
        <line x1="12" y1="21" x2="12" y2="23" data-projection-id="111"></line>
        <line
          x1="4.2"
          y1="4.2"
          x2="5.6"
          y2="5.6"
          data-projection-id="112"
        ></line>
        <line
          x1="18.4"
          y1="18.4"
          x2="19.8"
          y2="19.8"
          data-projection-id="113"
        ></line>
        <line x1="1" y1="12" x2="3" y2="12" data-projection-id="114"></line>
        <line x1="21" y1="12" x2="23" y2="12" data-projection-id="115"></line>
        <line
          x1="4.2"
          y1="19.8"
          x2="5.6"
          y2="18.4"
          data-projection-id="116"
        ></line>
        <line
          x1="18.4"
          y1="5.6"
          x2="19.8"
          y2="4.2"
          data-projection-id="117"
        ></line>
      </g>
    </svg>
  )
}
const DarkThemeIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="inherit"
      strokeWidth="inherit"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        transform-origin="12.019092798233032px 11.98090648651123px"
        transform="none"
      ></path>
    </svg>
  )
}

const FooterIcons = {
  LyraIcon,
  HymnIcon,
  HomeIcon,
  ProjectsIcon,
  GithubIcon,
  MailIcon,
  TwitterIcon,
  LinkedInIcon,
  LightThemeIcon,
  DarkThemeIcon,
}

export { FooterIcons }
