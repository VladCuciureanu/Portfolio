// double escape for commas and slashes
const e = (str: string) => encodeURIComponent(encodeURIComponent(str))

export const createOgImage = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return [
    // Account prefix
    `https://res.cloudinary.com/vladinski-md/image/upload`,
    // Composed Image Transformations
    `w_1600,h_836,q_100`,

    // TITLE
    // Karla font in accent color
    `l_text:Karla_72_bold:${e(title)},co_rgb:ffe4e6,c_fit,w_1400,h_240`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_180`,

    // DESCRIPTION
    // Karla font, but smaller
    `l_text:Karla_48:${e(description)},co_rgb:ffe4e680,c_fit,w_1400`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_100`,

    // PROFILE IMAGE
    // Asset
    `l_avatar`,
    // Transformations
    `c_thumb,g_face,r_max,w_380,h_380,q_100`,
    // Positioning
    `fl_layer_apply,w_140,g_north_west,x_100,y_100`,

    // BACKGROUND
    // Asset
    `bg.png`,
  ].join("/")
}
