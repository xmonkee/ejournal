import type {Record} from './../types/etypes';
import type {List} from 'immutable';
import React from 'react';
import {RecordLine} from './record-line';

type Props = {
    records: List<Records>,
    handleAddRecord: (Record) => void,
    handleUpdateRecord: (number, Record) => void
};

export default function DayBrowser(props: Props) {
    const {records, handleAddRecords, handleUpdateRecords} = props;
    return (
        records.map((record: Record, idx: number) => 
        (<RecordLine key={idx}/>)
    )
    );
}