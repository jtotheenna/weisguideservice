export default function Gallery() {
  const images = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
    "/gallery/9.jpg",
    "/gallery/10.jpg",
    "/gallery/11.jpg",
    "/gallery/12.jpg",
    "/gallery/13.jpg",
    "/gallery/14.jpg",
    "/gallery/15.jpg",
    "/gallery/16.jpg",
    "/gallery/17.jpg",
    "/gallery/18.jpg",
    "/gallery/19.jpg",
    "/gallery/20.jpg",
    "/gallery/21.jpg",
    "/gallery/22.jpg",
    "/gallery/23.jpg",
    "/gallery/25.jpg",
    "/gallery/26.jpg",
    "/gallery/27.jpg",
    "/gallery/28.jpg",
    "/gallery/29.jpg",
    "/gallery/30.jpg",
    "/gallery/31.jpg",
    "/gallery/32.jpg",
    "/gallery/33.jpg",
    "/gallery/34.jpg"
  ];

  return (
    <section
      id="gallery"
      style={{
        padding: "100px 20px",
        background: "#f6f7f8"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <h2
          style={{
            color: "#0b1117",
            marginBottom: "40px",
            textAlign: "center"
          }}
        >
          Gallery
        </h2>

        <div
          style={{
            columnCount: 3,
            columnGap: "18px"
          }}
        >
          {images.map((src) => (
            <img
              key={src}
              src={src}
              alt="Guided fishing trip in the Driftless Region"
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                marginBottom: "18px",
                borderRadius: "12px",
                breakInside: "avoid"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}