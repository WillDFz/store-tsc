import styles from './Rating.module.scss';

const Rating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className={`${styles.starRating} text-center`}>
          <div className={`${styles.starsRating} m-auto`} style={{ width: `${rating * 20}%` }}>
            <div>★★★★★</div>
          </div>
        
        </div>
      );
}

export default Rating
