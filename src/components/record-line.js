// @flow

import type { Exercise, Record, FieldName, FieldType, FieldValue } from './../types/etypes';
import React from 'react';
import { Container, Row, Column } from './elements/grid';
import Input from './elements/input';
import NumberInput from './elements/number-input';

type Props = {
    idx: number,
    exercise: Exercise,
    record: Record,
    handleUpdateRecord: (number, Record) => void,
    handleAddRecord: (Record) => void
}

type State = {
    record: Record
}

function InvalidType(fieldName: FieldName, fieldType: FieldType) {
    this.message = `Invalid type for ${fieldName}: ${fieldType}`;
    this.name = 'InvalidType';
}

export default class RecordLine extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const {record} = this.props;
        this.state = {record: record};
    }

    setFieldValue(idx: number, fieldName: FieldName, fieldValue: FieldValue) {
        const [recordName, recordData] = this.state.record;
        const newRecord = [
            recordName,
            recordData.set(idx, [fieldName, fieldValue])
        ];
        this.setState({ record: newRecord});
    }

    render() {
        const {exercise, idx, handleUpdateRecord} = this.props;
        const {record} = this.state;
        const [_, recordData] = record;
        const [exerciseName, schema] = exercise;
        return (
            <Container>
                <Row>{exerciseName}</Row>
                <Row>
                    <Column>
                        <Row>
                            {recordData.map(([fieldName, fieldValue], n) =>
                                <Column key={n}>
                                    <RenderField
                                        fieldName={fieldName}
                                        fieldType={schema.get(n)[1]}
                                        value={fieldValue}
                                        onChange={(value: FieldValue) => 
                                            this.setFieldValue(n, fieldName, value)}
                                    />
                                </Column>
                            )}
                        </Row>
                    </Column>
                    <Column>
                        <button onClick={() => handleUpdateRecord(idx, record)}>Save</button>
                    </Column>
                </Row>
            </Container>
        );
    }
}


function RenderField({ fieldName, fieldType, ...otherProps }) {
    switch (fieldType) {
        case 'string':
            return <Input label={fieldName} {...otherProps} />;
        case 'number':
            return <NumberInput label={fieldName} {...otherProps} />;
        default:
            throw new InvalidType(fieldName, fieldType);
    }
}