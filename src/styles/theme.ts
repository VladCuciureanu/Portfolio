import { css } from "styled-components"
import {
  gray,
  grayDark,
  red,
  redDark,
  amber,
  amberDark,
  green,
  greenDark,
  blue,
  blueDark,
} from "@radix-ui/colors"
import hslToRgb from "@/utils/hslToRgb"

export const lightTheme = css`
  --colors-gray-1: ${convert(gray.gray1)};
  --colors-gray-2: ${convert(gray.gray2)};
  --colors-gray-3: ${convert(gray.gray3)};
  --colors-gray-4: ${convert(gray.gray4)};
  --colors-gray-5: ${convert(gray.gray5)};
  --colors-gray-6: ${convert(gray.gray6)};
  --colors-gray-7: ${convert(gray.gray7)};
  --colors-gray-8: ${convert(gray.gray8)};
  --colors-gray-9: ${convert(gray.gray9)};
  --colors-gray-10: ${convert(gray.gray10)};
  --colors-gray-11: ${convert(gray.gray11)};
  --colors-gray-12: ${convert(gray.gray12)};

  --colors-red-1: ${convert(red.red1)};
  --colors-red-2: ${convert(red.red2)};
  --colors-red-3: ${convert(red.red3)};
  --colors-red-4: ${convert(red.red4)};
  --colors-red-5: ${convert(red.red5)};
  --colors-red-6: ${convert(red.red6)};
  --colors-red-7: ${convert(red.red7)};
  --colors-red-8: ${convert(red.red8)};
  --colors-red-9: ${convert(red.red9)};
  --colors-red-10: ${convert(red.red10)};
  --colors-red-11: ${convert(red.red11)};
  --colors-red-12: ${convert(red.red12)};

  --colors-amber-1: ${convert(amber.amber1)};
  --colors-amber-2: ${convert(amber.amber2)};
  --colors-amber-3: ${convert(amber.amber3)};
  --colors-amber-4: ${convert(amber.amber4)};
  --colors-amber-5: ${convert(amber.amber5)};
  --colors-amber-6: ${convert(amber.amber6)};
  --colors-amber-7: ${convert(amber.amber7)};
  --colors-amber-8: ${convert(amber.amber8)};
  --colors-amber-9: ${convert(amber.amber9)};
  --colors-amber-10: ${convert(amber.amber10)};
  --colors-amber-11: ${convert(amber.amber11)};
  --colors-amber-12: ${convert(amber.amber12)};

  --colors-green-1: ${convert(green.green1)};
  --colors-green-2: ${convert(green.green2)};
  --colors-green-3: ${convert(green.green3)};
  --colors-green-4: ${convert(green.green4)};
  --colors-green-5: ${convert(green.green5)};
  --colors-green-6: ${convert(green.green6)};
  --colors-green-7: ${convert(green.green7)};
  --colors-green-8: ${convert(green.green8)};
  --colors-green-9: ${convert(green.green9)};
  --colors-green-10: ${convert(green.green10)};
  --colors-green-11: ${convert(green.green11)};
  --colors-green-12: ${convert(green.green12)};

  --colors-blue-1: ${convert(blue.blue1)};
  --colors-blue-2: ${convert(blue.blue2)};
  --colors-blue-3: ${convert(blue.blue3)};
  --colors-blue-4: ${convert(blue.blue4)};
  --colors-blue-5: ${convert(blue.blue5)};
  --colors-blue-6: ${convert(blue.blue6)};
  --colors-blue-7: ${convert(blue.blue7)};
  --colors-blue-8: ${convert(blue.blue8)};
  --colors-blue-9: ${convert(blue.blue9)};
  --colors-blue-10: ${convert(blue.blue10)};
  --colors-blue-11: ${convert(blue.blue11)};
  --colors-blue-12: ${convert(blue.blue12)};

  --colors-bg: var(--colors-gray-1);
  --colors-lowContrast: var(--colors-gray-11);
  --colors-highContrast: var(--colors-gray-12);
`

export const darkTheme = css`
  --colors-gray-1: ${convert(grayDark.gray1)};
  --colors-gray-2: ${convert(grayDark.gray2)};
  --colors-gray-3: ${convert(grayDark.gray3)};
  --colors-gray-4: ${convert(grayDark.gray4)};
  --colors-gray-5: ${convert(grayDark.gray5)};
  --colors-gray-6: ${convert(grayDark.gray6)};
  --colors-gray-7: ${convert(grayDark.gray7)};
  --colors-gray-8: ${convert(grayDark.gray8)};
  --colors-gray-9: ${convert(grayDark.gray9)};
  --colors-gray-10: ${convert(grayDark.gray10)};
  --colors-gray-11: ${convert(grayDark.gray11)};
  --colors-gray-12: ${convert(grayDark.gray12)};

  --colors-red-1: ${convert(redDark.red1)};
  --colors-red-2: ${convert(redDark.red2)};
  --colors-red-3: ${convert(redDark.red3)};
  --colors-red-4: ${convert(redDark.red4)};
  --colors-red-5: ${convert(redDark.red5)};
  --colors-red-6: ${convert(redDark.red6)};
  --colors-red-7: ${convert(redDark.red7)};
  --colors-red-8: ${convert(redDark.red8)};
  --colors-red-9: ${convert(redDark.red9)};
  --colors-red-10: ${convert(redDark.red10)};
  --colors-red-11: ${convert(redDark.red11)};
  --colors-red-12: ${convert(redDark.red12)};

  --colors-amber-1: ${convert(amberDark.amber1)};
  --colors-amber-2: ${convert(amberDark.amber2)};
  --colors-amber-3: ${convert(amberDark.amber3)};
  --colors-amber-4: ${convert(amberDark.amber4)};
  --colors-amber-5: ${convert(amberDark.amber5)};
  --colors-amber-6: ${convert(amberDark.amber6)};
  --colors-amber-7: ${convert(amberDark.amber7)};
  --colors-amber-8: ${convert(amberDark.amber8)};
  --colors-amber-9: ${convert(amberDark.amber9)};
  --colors-amber-10: ${convert(amberDark.amber10)};
  --colors-amber-11: ${convert(amberDark.amber11)};
  --colors-amber-12: ${convert(amberDark.amber12)};

  --colors-green-1: ${convert(greenDark.green1)};
  --colors-green-2: ${convert(greenDark.green2)};
  --colors-green-3: ${convert(greenDark.green3)};
  --colors-green-4: ${convert(greenDark.green4)};
  --colors-green-5: ${convert(greenDark.green5)};
  --colors-green-6: ${convert(greenDark.green6)};
  --colors-green-7: ${convert(greenDark.green7)};
  --colors-green-8: ${convert(greenDark.green8)};
  --colors-green-9: ${convert(greenDark.green9)};
  --colors-green-10: ${convert(greenDark.green10)};
  --colors-green-11: ${convert(greenDark.green11)};
  --colors-green-12: ${convert(greenDark.green12)};

  --colors-blue-1: ${convert(blueDark.blue1)};
  --colors-blue-2: ${convert(blueDark.blue2)};
  --colors-blue-3: ${convert(blueDark.blue3)};
  --colors-blue-4: ${convert(blueDark.blue4)};
  --colors-blue-5: ${convert(blueDark.blue5)};
  --colors-blue-6: ${convert(blueDark.blue6)};
  --colors-blue-7: ${convert(blueDark.blue7)};
  --colors-blue-8: ${convert(blueDark.blue8)};
  --colors-blue-9: ${convert(blueDark.blue9)};
  --colors-blue-10: ${convert(blueDark.blue10)};
  --colors-blue-11: ${convert(blueDark.blue11)};
  --colors-blue-12: ${convert(blueDark.blue12)};
  --colors-bg: var(--colors-gray-1);
  --colors-lowContrast: var(--colors-gray-7);
  --colors-highContrast: var(--colors-gray-12);
`

function convert(color: string): string {
  color = color.substring(4, color.length - 1)
  var [h, s, l] = color.split(",")
  h = h.replace("deg", "")
  s = s.replace("%", "")
  l = l.replace("%", "")
  const rgb = hslToRgb(parseInt(h), parseInt(s), parseInt(l)).flatMap((color) =>
    Math.round(color),
  )
  return `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`
}
