import React from 'react';
import classes from './PlaceCard.module.css'
import {BankOutlined, CalendarOutlined, EnvironmentOutlined} from '@ant-design/icons';

type OwnProps = {
    title: string;
    type: string;
    office: string;
    geo: string;
    period: string;
}

const PlaceCard: React.FC<OwnProps> = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.upper}>
                <div className={classes.title}>{props.title}</div>
                <div className={classes.type}>{props.type}</div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.location}>
                    <div className={classes.geo}>
                        <span className={classes.icon}><BankOutlined/> </span>
                        <span className={classes.text}>{props.office}</span>
                    </div>
                    <div className={classes.geo}>
                        <span className={classes.icon}><EnvironmentOutlined/> </span>
                        <span className={classes.text}>{props.geo}</span>
                    </div>
                </div>
                <div className={classes.period}>
                    <span className={classes.icon}><CalendarOutlined/> </span>
                    <span className={classes.text}>{props.period}</span>
                </div>
            </div>
        </div>
    );
};

export default PlaceCard;
