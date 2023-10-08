'use client';
import { useState, useEffect } from 'react'
import { intervalToDuration, addDays } from 'date-fns';

import styles from './Timer.module.scss';
import { Row, Col } from 'react-bootstrap';


interface TimerProps {
    deadlineInDays: number;
}

const Timer: React.FC<TimerProps> = ({ deadlineInDays }) => {
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const endTime = addDays(new Date, deadlineInDays);

    useEffect(() => {
        const calculateTimeRemaining = () => {
            const now = new Date();
            // Calculate the duration between the current time and the deadline
            const duration = intervalToDuration({
                start: now,
                end: endTime,
            });

            setTimeRemaining({
                days: duration.days || 0,
                hours: duration.hours || 0,
                minutes: duration.minutes || 0,
                seconds: duration.seconds || 0,
            });
        };

        // Set up an interval to call the calculation function every second
        const intervalId = setInterval(calculateTimeRemaining, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [deadlineInDays]);



    return (
        <div className='container'>
            <Row>

                <Col>
                    <div className='fw-bold'>Promoções</div>
                    <div className='custom-font-small'>Eletrônicos</div>
                </Col>
                <Col className='d-flex '>

                    <div className={`${styles.timerCard} text-center py-1 me-2`}>
                        <div className='fw-bold'>{timeRemaining.days}</div>
                        <div className='custom-font-small'>Dia(s)</div>
                    </div>
                    <div className={`${styles.timerCard} text-center py-1 me-2`}>
                        <div className='fw-bold'>{timeRemaining.hours}</div>
                        <div className='custom-font-small'>Hora(s)</div>
                    </div>
                    <div className={`${styles.timerCard} text-center py-1 me-2`}>
                        <div className='fw-bold'>{timeRemaining.minutes}</div>
                        <div className='custom-font-small'>Min</div>
                    </div>
                    <div className={`${styles.timerCard} text-center py-1`}>
                        <div className='fw-bold'>{timeRemaining.seconds}</div>
                        <div className='custom-font-small'>Seg</div>
                    </div>
                </Col>
            </Row>


        </div>
    );
}

export default Timer



