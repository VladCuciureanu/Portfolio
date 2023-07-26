import Link from "next/link";
import MainLayout from "./(main)/layout";
import MainTemplate from "./(main)/template";

export default function NotFound() {
  return (
    <MainLayout>
      <MainTemplate>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "calc(50vh - 24px)",
          }}
        >
          <h1
            style={{
              display: "inline-block",
              margin: "0 20px 0 0",
              paddingRight: "23px",
              fontSize: "24px",
              fontWeight: 500,
              verticalAlign: "top",
              lineHeight: "49px",
              borderRight: "1px solid rgb(var(--foreground-color) / .1)",
            }}
          >
            404
          </h1>
          <div style={{ display: "inline-block", textAlign: "left" }}>
            <h2
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "49px",
                margin: 0,
              }}
            >
              This page could not be found.
            </h2>
          </div>
        </div>
      </MainTemplate>
    </MainLayout>
  );
}
