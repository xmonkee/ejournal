// @flow
import React, { Component } from 'react';
import type {Records, Exercises } from './../model';
import type {EDate, Record } from './../types/etypes';
import { DateFormat } from './../types/etypes';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { Container, Row } from './elements/grid';
import DayBrowser from './day-browser';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
    records: Records,
    exercises: Exercises,
    handleAddRecord: (EDate, Record) => void,
    handleUpdateRecord: (EDate, number, Record) => void
};
type State = { selectedDate: EDate };

export default class RecordsBrowser extends Component<Props, State> {
    componentWillMount() {
        this.state = { selectedDate: '20170101' };
    }

    setSelectedDate(selectedDate: EDate) {
        this.setState({ selectedDate });
    }

    render() {
        const { selectedDate } = this.state;
        const { records, exercises, handleAddRecord, handleUpdateRecord } = this.props;
        return (
            <Container>
                <Row>
                    <DatePicker
                        selected={moment(selectedDate)}
                        onChange={date => this.setSelectedDate(date.format(DateFormat))}
                    />
                </Row>
                <Row>
                    {records.get(selectedDate) ? <DayBrowser
                        records={records.get(selectedDate)}
                        exercises={exercises}
                        handleAddRecord={record => handleAddRecord(selectedDate, record)}
                        handleUpdateRecord={(idx, record) => handleUpdateRecord(selectedDate, idx, record)}
                    /> : null}
                </Row>
            </Container>
        );
    }
}
