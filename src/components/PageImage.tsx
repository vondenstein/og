const PageImage = ({ title }: ImageParams) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flexWrap: "nowrap",
        backgroundColor: "#111111",
        backgroundImage:
          "radial-gradient(circle at 25px 25px, #242424 2%, transparent 0%), radial-gradient(circle at 75px 75px, #242424 2%, transparent 0%)",
        backgroundSize: "100px 100px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="120"
          height="72px"
          viewBox="0 0 38 23"
          version="1.1"
          fill="#f"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="matrix(1,0,0,1,-22.713,-4045.39)">
            <g
              id="Dark--Small-"
              transform="matrix(0.0112237,0,0,0.00934928,23.9671,4044)"
            >
              <rect
                x="-111.738"
                y="148.378"
                width="3323.09"
                height="2460.08"
                fill="none"
              />
              <clipPath id="_clip1">
                <rect
                  x="-111.738"
                  y="148.378"
                  width="3323.09"
                  height="2460.08"
                />
              </clipPath>
              <g clipPath="url(#_clip1)">
                <g transform="matrix(1.34224,0,0,1.61135,-274.802,-1176.86)">
                  <g transform="matrix(1,0,0,1,-58.633,50.4241)">
                    <g transform="matrix(1,0,0,1,-206.068,-108.011)">
                      <g transform="matrix(-0.7071,0.707113,-0.707113,-0.7071,3360.32,2404.66)">
                        <path
                          d="M1985.53,2220.66L692.093,2220.66L1083.67,1829.09L1593.95,1829.09L1985.53,2220.66Z"
                          fill="#fdf9f2"
                        />
                      </g>
                      <g transform="matrix(0.707107,-0.707107,0.707107,0.707107,-1346.7,718.63)">
                        <path
                          d="M1985.53,2220.66L692.093,2220.66L1083.67,1829.09L1593.95,1829.09L1985.53,2220.66Z"
                          fill="#fdf9f2"
                        />
                      </g>
                    </g>
                    <g transform="matrix(1,0,0,1,-12.2995,13.7489)">
                      <g transform="matrix(-0.542485,-1.19713,0.81587,-0.369716,1441.36,5019.22)">
                        <path
                          d="M2920.45,2045.96L1790.62,2045.96L1917.42,1644.24L2813.9,1644.24L2920.45,2045.96Z"
                          fill="#fdf9f2"
                        />
                      </g>
                      <g transform="matrix(0.392563,-1.19322,0.880541,0.289694,-279.736,3656.36)">
                        <path
                          d="M2920.45,2045.96L1790.62,2045.96L2109.2,1644.24L2822.77,1644.24L2920.45,2045.96Z"
                          fill="#fdf9f2"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 60,
          fontStyle: "normal",
          color: "#fdf9f2",
          marginTop: 30,
          lineHeight: 1.4,
          whiteSpace: "pre-wrap",
          backgroundColor: "#1b1b1b",
          borderRadius: "20px",
          padding: "20px 50px",
          boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.25)",
        }}
      >
        <b>{title}</b>
      </div>
    </div>
  )
}

export default PageImage
