// @flow

import type { Exercise, Record, FieldName, FieldType, FieldValue } from './../types/etypes';
import React from 'react';
import {List} from 'immutable';
import { Container, Row, Column } from './elements/grid';
import Input from './elements/input';
import NumberInput from './elements/number-input';

type Props = {
    exercise: Exercise,
    record: Record,
    handleUpdateRecord: (Record) => void
}

type State = {
    recordData: List<[FieldName, FieldValue]>
}

function InvalidType(fieldName: FieldName, fieldType: FieldType) {
    this.message = `Invalid type for ${fieldName}: ${fieldType}`;
    this.name = 'InvalidType';
}

export default class RecordLine extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const [_, recordData] = this.props.record;
        this.state = {recordData: recordData};
    }

    setFieldValue(idx: number, fieldName: FieldName, fieldValue: FieldValue) {
        const newRecordData = this.state.recordData.set(idx, [fieldName, fieldValue]);
        this.setState({recordData: newRecordData});
    }

    render() {
        const [exerciseName, schema] = this.props.exercise;
        const recordData = this.state.recordData;
        return (
            <Container>
            <Row>{exerciseName}</Row>
                <Row>
                    {recordData.map(([fieldName, fieldValue], idx) =>
                        <Column key={idx}>
                            <RenderField
                                fieldName={fieldName}
                                fieldType={schema.get(idx)[1]}
                                value={fieldValue}
                                onChange={(value: FieldValue) => this.setFieldValue(idx, fieldName, value)}
                            />
                        </Column>
                    )}
                </Row>
            </Container>
        );
    }
}


function RenderField({ fieldName, fieldType }) {
    switch (fieldType) {
        case 'string':
            return <Input label={fieldName} />;
        case 'number':
            return <NumberInput label={fieldName} />;
        default:
            throw new InvalidType(fieldName, fieldType);
    }
}