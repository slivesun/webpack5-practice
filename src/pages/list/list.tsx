import type { BadgeProps } from 'antd';
import { Badge, Calendar } from 'antd';
import type { Moment } from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from '@/redux/reducers/counter'
import './list.scss'

const getListData = (value: Moment) => {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
            ];
            break;
        case 10:
            listData = [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
                { type: 'error', content: 'This is error event.' },
            ];
            break;
        case 15:
            listData = [
                { type: 'warning', content: 'This is warning event' },
                { type: 'success', content: 'This is very long usual event。。....' },
                { type: 'error', content: 'This is error event 1.' },
                { type: 'error', content: 'This is error event 2.' },
                { type: 'error', content: 'This is error event 3.' },
                { type: 'error', content: 'This is error event 4.' },
            ];
            break;
        default:
    }
    return listData || [];
};

const getMonthData = (value: Moment) => {
    if (value.month() === 8) {
        return 1394;
    }
};

const List: React.FC = () => {
    const count = useSelector(selectCount)
    const monthCellRender = (value: Moment) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value: Moment) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item.content}>
                        <Badge status={item.type as BadgeProps['status']} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    return <div className='list'>
        {/* <div>{count}</div> */}
        <div className='list_top'>吸顶块</div>
        <div className='false_content'>假装有内容</div>
        <div className='list_top2'>吸顶块2</div>
        <div className='false_content'>假装有内容2</div>
        <div className='list_top3'>吸顶块3</div>
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
    </div>;
};

export default List;