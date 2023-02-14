import styles from "@/styles/OGImage.module.css"

const OGImage = ({ children }: any) => {
  return (
    <div
      style={{
        fontSize: 128,
        background: "#1b1b1b",
        color: "#fdf9f2",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>vondenstein.com</div>
      <div>{children}</div>
    </div>
  )
}

export default OGImage
