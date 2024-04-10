/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import BANNER_PROFILE_PICTURE from '../../assets/images/gillian_banner.jpg';
import PRONUNCIATION_AUDIO_FILE from '../../assets/audio/gillian_pronunciation.mp3';
import MiddleDot from '../../components/MiddleDot/MiddleDot';
import { ReactComponent as VolumeIcon } from '../../assets/icons/volume_up.svg';
import { useEffect, useRef, useState } from 'react';

const CSS_BANNER = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: '23vw',
    width: '100%',
});

const CSS_BANNER_TEXT = css({
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    margin: '0 8vw',
});

const CSS_NAME = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    gap: '2vw',
});

const CSS_VOLUME_ICON = css({
    cursor: 'pointer',
    height: '4.5vw',
    width: '4.5vw',
});

const CSS_TITLE = css({
    fontSize: '5vw',
});

const CSS_SUBTITLE = css({
    fontSize: '2.5vw',
    marginTop: '-0.7vw',
});

const CSS_PROFILE_PICTURE = css({
    height: '23vw',
    width: '23vw',
    objectFit: 'cover',
    objectPosition: '0 100%',
    clipPath: 'polygon(30% 0, 0 100%, 100% 100%, 100% 0)',
});

function Banner() {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const theme = useTheme();

    useEffect(() => {
        const cleanups: (() => void)[] = [];
        const deactivate = (): void => setIsAudioPlaying(false);

        if (audioRef.current) {
            const current = audioRef.current;
            current.addEventListener('ended', deactivate);
            cleanups.push(() =>
                current.removeEventListener('ended', deactivate),
            );
        }

        return () => cleanups.forEach((c) => c());
    });

    return (
        <div
            css={CSS_BANNER}
            style={{
                backgroundImage: `linear-gradient(to right, ${theme.colors.background.header_left} , ${theme.colors.background.header_right})`,
                color: theme.colors.text.light,
            }}
        >
            <div css={CSS_BANNER_TEXT}>
                <div css={CSS_NAME}>
                    <h1 css={CSS_TITLE}>
                        gil
                        <MiddleDot />
                        li
                        <MiddleDot />
                        an bras
                        <MiddleDot />
                        sil
                    </h1>
                    <VolumeIcon
                        css={CSS_VOLUME_ICON}
                        fill={theme.colors.text.light}
                        onClick={() => setIsAudioPlaying(true)}
                    />
                    {isAudioPlaying && (
                        <audio
                            src={PRONUNCIATION_AUDIO_FILE}
                            autoPlay={true}
                            ref={audioRef}
                        />
                    )}
                </div>
                <h2 css={CSS_SUBTITLE}>
                    writer, multimedia reporter, political correspondant
                </h2>
            </div>
            <img
                src={BANNER_PROFILE_PICTURE}
                alt="Gillian Brassil"
                css={CSS_PROFILE_PICTURE}
            />
        </div>
    );
}

export default Banner;
