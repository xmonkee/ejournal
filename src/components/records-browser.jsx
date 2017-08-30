// @flow
import React, { Component } from 'react';
import type {Records} from './../model';
import type {EDate, Record } from './../types/etypes';
import {DateFormat} from './../types/etypes';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { Container, Row } from './elements/grid';
import DayBrowser from './day-browser';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
    records: Records,
    handleAddRecord: (EDate, Record) => void,
    handleUpdateRecord: (EDate, number, Record) => void
};
type State = { selectedDate: EDate };

export default class RecordsBrowser extends Component<Props, State> {
    componentWillMount() {
        this.state = { selectedDate: moment() };
    }

    setSelectedDate(selectedDate: EDate) {
        this.setState({selectedDate});
    }

    render() {
        const { selectedDate } = this.state;
        const { records, handleAddRecord, handleUpdateRecord } = this.props;
        return (
            <Container>
                <Row>
                    <DatePicker
                        selected={moment(selectedDate)}
                        onChange={date => this.setSelectedDate(date.format(DateFormat))}
                    />
                </Row>
                <DayBrowser 
                    records={records.get(selectedDate)}
                    handleAddRecord={record => handleAddRecord(selectedDate, record)}
                    handleUpdateRecord={(idx, record) => handleUpdateRecord(selectedDate, idx, record)}
                    />
            </Container>
        );
    }
}