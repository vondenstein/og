const OGImage = ({ children }: any) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        letterSpacing: "-.02em",
        fontWeight: 700,
        background: "#111111",
      }}
    >
      <div
        style={{
          left: 42,
          top: 42,
          position: "absolute",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            width: 24,
            height: 24,
            background: "#fdf9f2",
          }}
        />
        <span
          style={{
            marginLeft: 8,
            fontSize: 20,
            color: "#fdf9f2",
          }}
        >
          vondenstein.com
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "20px 50px",
          margin: "0 42px",
          fontSize: 40,
          width: "auto",
          maxWidth: 550,
          textAlign: "center",
          backgroundColor: "#1b1b1b",
          color: "#fdf9f2",
          lineHeight: 1.4,
          borderRadius: "20px",
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default OGImage
