import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import style from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const { challengeCompleted } = useContext(ChallengeContext);

    return (
        <div className={style.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengeCompleted}</span>
        </div>
    )
}