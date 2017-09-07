// @flow
import type {Record} from './../types/etypes';
import type {Exercises} from './../model';
import type {List } from 'immutable';
import React from 'react';
import RecordLine from './record-line';
import {Row} from './elements/grid';

type Props = {
    exercises: Exercises,
    records: List<Record>,
    handleAddRecord: (Record) => void,
    handleUpdateRecord: (number, Record) => void
};

export default function DayBrowser(props: Props) {
    const { records, exercises, handleAddRecord, handleUpdateRecord } = props;
    return (
        <div>
            {records.map((record: Record, idx: number) =>
                (<Row key={idx}>
                    <RecordLine
                        idx={idx}
                        record={record}
                        exercise={exercises.get(record[0])}
                        handleAddRecord={handleAddRecord}
                        handleUpdateRecord={handleUpdateRecord}
                    />
                </Row>)
            )}
        </div>
    );
}