import { css } from "styled-components"

export const lightTheme = css`
  --colors-gray1: hsl(0 0% 99%);
  --colors-gray2: hsl(0 0% 97.3%);
  --colors-gray3: hsl(0 0% 95.1%);
  --colors-gray4: hsl(0 0% 93%);
  --colors-gray5: hsl(0 0% 90.9%);
  --colors-gray6: hsl(0 0% 88.7%);
  --colors-gray7: hsl(0 0% 85.8%);
  --colors-gray8: hsl(0 0% 78%);
  --colors-gray9: hsl(0 0% 56.1%);
  --colors-gray10: hsl(0 0% 52.3%);
  --colors-gray11: hsl(0 0% 43.5%);
  --colors-gray12: hsl(0 0% 9%);
  --colors-grayA1: hsl(0 0% 0% / 0.012);
  --colors-grayA2: hsl(0 0% 0% / 0.027);
  --colors-grayA3: hsl(0 0% 0% / 0.047);
  --colors-grayA4: hsl(0 0% 0% / 0.071);
  --colors-grayA5: hsl(0 0% 0% / 0.09);
  --colors-grayA6: hsl(0 0% 0% / 0.114);
  --colors-grayA7: hsl(0 0% 0% / 0.141);
  --colors-grayA8: hsl(0 0% 0% / 0.22);
  --colors-grayA9: hsl(0 0% 0% / 0.439);
  --colors-grayA10: hsl(0 0% 0% / 0.478);
  --colors-grayA11: hsl(0 0% 0% / 0.565);
  --colors-grayA12: hsl(0 0% 0% / 0.91);
  --colors-blue1: hsl(206 100% 99.2%);
  --colors-blue2: hsl(210 100% 98%);
  --colors-blue3: hsl(209 100% 96.5%);
  --colors-blue4: hsl(210 98.8% 94%);
  --colors-blue5: hsl(209 95% 90.1%);
  --colors-blue6: hsl(209 81.2% 84.5%);
  --colors-blue7: hsl(208 77.5% 76.9%);
  --colors-blue8: hsl(206 81.9% 65.3%);
  --colors-blue9: hsl(206 100% 50%);
  --colors-blue10: hsl(208 100% 47.3%);
  --colors-blue11: hsl(211 100% 43.2%);
  --colors-blue12: hsl(211 100% 15%);
  --colors-green1: hsl(136 50% 98.9%);
  --colors-green2: hsl(138 62.5% 96.9%);
  --colors-green3: hsl(139 55.2% 94.5%);
  --colors-green4: hsl(140 48.7% 91%);
  --colors-green5: hsl(141 43.7% 86%);
  --colors-green6: hsl(143 40.3% 79%);
  --colors-green7: hsl(146 38.5% 69%);
  --colors-green8: hsl(151 40.2% 54.1%);
  --colors-green9: hsl(151 55% 41.5%);
  --colors-green10: hsl(152 57.5% 37.6%);
  --colors-green11: hsl(153 67% 28.5%);
  --colors-green12: hsl(155 40% 14%);
  --colors-amber1: hsl(39 70% 99%);
  --colors-amber2: hsl(40 100% 96.5%);
  --colors-amber3: hsl(44 100% 91.7%);
  --colors-amber4: hsl(43 100% 86.8%);
  --colors-amber5: hsl(42 100% 81.8%);
  --colors-amber6: hsl(38 99.7% 76.3%);
  --colors-amber7: hsl(36 86.1% 67.1%);
  --colors-amber8: hsl(35 85.2% 55.1%);
  --colors-amber9: hsl(39 100% 57%);
  --colors-amber10: hsl(35 100% 55.5%);
  --colors-amber11: hsl(30 100% 34%);
  --colors-amber12: hsl(20 80% 17%);
  --colors-bg: #fff;
  --colors-lowContrast: var(--colors-gray8);
  --colors-highContrast: black;
`

export const darkTheme = css`
  --colors-gray1: hsl(0 0% 8.5%);
  --colors-gray2: hsl(0 0% 11%);
  --colors-gray3: hsl(0 0% 13.6%);
  --colors-gray4: hsl(0 0% 15.8%);
  --colors-gray5: hsl(0 0% 17.9%);
  --colors-gray6: hsl(0 0% 20.5%);
  --colors-gray7: hsl(0 0% 24.3%);
  --colors-gray8: hsl(0 0% 31.2%);
  --colors-gray9: hsl(0 0% 43.9%);
  --colors-gray10: hsl(0 0% 49.4%);
  --colors-gray11: hsl(0 0% 62.8%);
  --colors-gray12: hsl(0 0% 93%);
  --colors-grayA1: hsl(0 0% 100% / 0);
  --colors-grayA2: hsl(0 0% 100% / 0.026);
  --colors-grayA3: hsl(0 0% 100% / 0.056);
  --colors-grayA4: hsl(0 0% 100% / 0.077);
  --colors-grayA5: hsl(0 0% 100% / 0.103);
  --colors-grayA6: hsl(0 0% 100% / 0.129);
  --colors-grayA7: hsl(0 0% 100% / 0.172);
  --colors-grayA8: hsl(0 0% 100% / 0.249);
  --colors-grayA9: hsl(0 0% 100% / 0.386);
  --colors-grayA10: hsl(0 0% 100% / 0.446);
  --colors-grayA11: hsl(0 0% 100% / 0.592);
  --colors-grayA12: hsl(0 0% 100% / 0.923);
  --colors-blue1: hsl(212 35% 9.2%);
  --colors-blue2: hsl(216 50% 11.8%);
  --colors-blue3: hsl(214 59.4% 15.3%);
  --colors-blue4: hsl(214 65.8% 17.9%);
  --colors-blue5: hsl(213 71.2% 20.2%);
  --colors-blue6: hsl(212 77.4% 23.1%);
  --colors-blue7: hsl(211 85.1% 27.4%);
  --colors-blue8: hsl(211 89.7% 34.1%);
  --colors-blue9: hsl(206 100% 50%);
  --colors-blue10: hsl(209 100% 60.6%);
  --colors-blue11: hsl(210 100% 66.1%);
  --colors-blue12: hsl(206 98% 95.8%);
  --colors-green1: hsl(146 30% 7.4%);
  --colors-green2: hsl(155 44.2% 8.4%);
  --colors-green3: hsl(155 46.7% 10.9%);
  --colors-green4: hsl(154 48.4% 12.9%);
  --colors-green5: hsl(154 49.7% 14.9%);
  --colors-green6: hsl(154 50.9% 17.6%);
  --colors-green7: hsl(153 51.8% 21.8%);
  --colors-green8: hsl(151 51.7% 28.4%);
  --colors-green9: hsl(151 55% 41.5%);
  --colors-green10: hsl(151 49.3% 46.5%);
  --colors-green11: hsl(151 50% 53.2%);
  --colors-green12: hsl(137 72% 94%);
  --colors-amber1: hsl(36 100% 6.1%);
  --colors-amber2: hsl(35 100% 7.6%);
  --colors-amber3: hsl(32 100% 10.2%);
  --colors-amber4: hsl(32 100% 12.4%);
  --colors-amber5: hsl(33 100% 14.6%);
  --colors-amber6: hsl(35 100% 17.1%);
  --colors-amber7: hsl(35 91% 21.6%);
  --colors-amber8: hsl(36 100% 25.5%);
  --colors-amber9: hsl(39 100% 57%);
  --colors-amber10: hsl(43 100% 64%);
  --colors-amber11: hsl(39 90% 49.8%);
  --colors-amber12: hsl(39 97% 93.2%);
  --colors-bg: rgb(17, 17, 17);
  --colors-lowContrast: var(--colors-gray8);
  --colors-highContrast: white;
`
