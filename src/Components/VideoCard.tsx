import { IVideoCard } from '../Interfaces/IVideoCard';
import styles from '../Styles/VideoCard.module.css';

export const VideoCard = (props: IVideoCard) => {
    return (
        <>
            <div className={styles.topLevelContainer}>
                <div className={styles.thumbnailContainer}>
                    <img src={props.thumbnailUrl} alt={props.title} />
                    <div className={styles.bottom_right}>{props.length}</div>
                </div>
                <div className={styles.userAndInfoContainer}>
                    <img src={props.userImageUrl} alt={props.userName} />
                    <div className={styles.infoContainer}>
                        <h4>{props.title}</h4>
                        <p>{props.userName}</p>
                        <p>{`${props.views} views • ${props.added}`}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
