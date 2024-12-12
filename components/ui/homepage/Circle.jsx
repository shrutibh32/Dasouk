import styles from "./Circle.module.css";

const Circle = ({ top, left, diameter, objects }) => {
  const translatex = diameter / 2;
  objects = Object.values(objects);

  return (
    <div
      className={styles.circleContainer}
      style={{
        top: top,
        left: left,
        "--translatex": `${translatex}px`,
        "--diameter": `${diameter}px`,
      }}
    >
      <div className={styles.circle}>
        {objects.map((object, index) => (
          <div
            key={index}
            className={styles.object}
            style={{ "--start": object.start, "--end": object.end }}
          >
            <object.Object />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Circle;
