import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';

import style from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengeContext);

    return (
        <div className={style.profileContainer}>
            <img src="https://github.com/pozatti.png" alt="Andre Pozatti" />
            <div>
                <strong>André Pozatti</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}