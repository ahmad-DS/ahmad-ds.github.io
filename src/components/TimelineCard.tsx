// import styles from "./TimelineCard.module.css";
// interface TimelineCardProps {
//   year: string;
//   title: string;
//   subtitle: string;
//   description: string;
// }
// const TimelineCard: React.FC<TimelineCardProps> = ({
//   year,
//   title,
//   subtitle,
//   description,
// }) => {
//   return (
//     <div className={styles.card}>
//       <h2>
//         {year} ({title})
//       </h2>
//       <h3>{subtitle}</h3>
//       <p>{description}</p>
//     </div>
//   );
// };

// export default TimelineCard;

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
      {/* Visual Indicator: The Year Tag */}
      <div className={styles.yearBadge}>{year}</div>

      {/* Main Content Info */}
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
};

export default TimelineCard;
