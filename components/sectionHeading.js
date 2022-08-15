import styles from "@/styles/components/sectionHeading.module.css";
const Heading = (props) => {
  return (
    <div className={styles.introText}>
      <h2>{props.text}</h2>
    </div>
  );
};

export default Heading;
