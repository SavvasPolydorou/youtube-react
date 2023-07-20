import '../Styles/Header.css';

export const Header = () => {
    const blur = () => {
        document.documentElement.style.setProperty('--opacityPercentage', '0');
    };
    const focus = () => {
        document.documentElement.style.setProperty('--opacityPercentage', '1');
    };

    return (
        <>
            <div className='topLevelContainer'>
                <div className='logoAndPremiumContainer'>
                    <span id='country'>CY</span>
                    <div className='logoAndPremium'>
                        <img
                            id='youtubeLogo'
                            src='https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg'
                            alt='Youtube'
                        />
                        <span id='premium'>Premium</span>
                    </div>
                </div>
                <div className='searchBarContainer'>
                    <div style={{ display: 'flex' }}>
                        <div id='searchIcon' className='searchIcon'></div>
                        <input
                            id='searchBox'
                            type='text'
                            placeholder='Search'
                            onFocus={focus}
                            onBlur={blur}
                        />
                        <button title='Search' id='searchBtn'></button>
                    </div>
                    <div>
                        <button
                            title='Search with your voice'
                            id='voiceBtn'
                            style={{
                                background: `url(https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=voice-search)
                                    no-repeat`,
                            }}
                        ></button>
                    </div>
                </div>
                <div id='controlsContainer'>
                    <button
                        title='Create'
                        id='createBtn'
                        style={{
                            background:
                                'url(https://www.citypng.com/public/uploads/preview/video-camera-white-icon-11637047301lqkuqvbbwy.png) no-repeat',
                        }}
                    ></button>
                    <button
                        title='Notifications'
                        id='notificationsBtn'
                        style={{
                            background:
                                'url(https://www.citypng.com/public/uploads/preview/white-notification-bell-icon-transparent-background-11638985030nycenfyruw.png) no-repeat',
                        }}
                    ></button>
                    <button id='user'>S</button>
                </div>
            </div>
        </>
    );
};
