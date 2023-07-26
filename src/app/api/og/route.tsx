import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

const InterMedium = fetch(
  new URL("./fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const InterBold = fetch(
  new URL("./fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const InterMediumData = await InterMedium;
  const InterBoldData = await InterBold;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          color: "rgb(41 37 36)",
          background: "rgb(28,25,23)",
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundImage:
              "radial-gradient(3100px at 0px 0px,rgb(194 65 12 / .6),transparent 80%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              marginTop: "-26px",
              marginBottom: "36px",
              color: "transparent",
              background: "linear-gradient(to left, #e7e5e4, #d6d3d1)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Inter",
              fontSize: "192px",
              fontWeight: 700,
            }}
          >
            Vlad Cuciureanu
          </div>
          <div
            style={{
              paddingTop: "38px",
              paddingBottom: "38px",
              paddingLeft: "95px",
              paddingRight: "95px",
              borderRadius: "9999px",
              color: "rgb(253 186 116)",
              backgroundColor: "rgb(253 186 116 / .1)",
              fontFamily: "Inter",
              fontSize: "94px",
              fontWeight: 500,
              letterSpacing: -2,
            }}
          >
            Full-Stack Developer
          </div>
        </div>
      </div>
    ),
    {
      width: 2400,
      height: 1260,
      fonts: [
        { name: "Inter", weight: 500, style: "normal", data: InterMediumData },
        { name: "Inter", weight: 700, style: "normal", data: InterBoldData },
      ],
    }
  );
}
