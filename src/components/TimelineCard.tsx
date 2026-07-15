import styles from "./TimelineCard.module.css";
interface TimelineCardProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}
const TimelineCard: React.FC<TimelineCardProps> = ({
  year,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className={styles.card}>
      <h2>
        {year} ({title})
      </h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TimelineCard;
