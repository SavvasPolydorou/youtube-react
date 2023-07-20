import { useEffect, useState } from 'react';
import { Header } from '../Components/Header';
import { MockVideos } from '../Data/MockVideos';
import { IVideoCard } from '../Interfaces/IVideoCard';
import { VideoCard } from '../Components/VideoCard';
import styles from '../Styles/Youtube.module.css';
export const Youtube = () => {
    const [data, setData] = useState<IVideoCard[]>([]);
    useEffect(() => {
        setData(MockVideos);
    }, []);

    return (
        <>
            <Header />
            <div className={styles.videos}>
                {data &&
                    data.map((video, index) => (
                        <VideoCard
                            key={index}
                            thumbnailUrl={video.thumbnailUrl}
                            length={video.length}
                            userImageUrl={video.userImageUrl}
                            title={video.title}
                            userName={video.userName}
                            views={video.views}
                            added={video.added}
                        />
                    ))}
            </div>
            <hr className={styles.seperator} />
        </>
    );
};
