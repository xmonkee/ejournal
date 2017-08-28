// @flow

import type { Exercise, FieldName, FieldType } from './../types/etypes';
import React from 'react';
import { Container, Row, Column } from './elements/grid';
import Input from './elements/input';
import NumberInput from './elements/number-input';

type Props = {
    exercise: Exercise,
}

function InvalidType(fieldName: FieldName, fieldType: FieldType) {
    this.message = `Invalid type for ${fieldName}: ${fieldType}`;
    this.name = 'InvalidType';
}

export default function ExerciseInput({ exercise }: Props) {
    const [_, schema] = exercise;
    return (
        <Container>
            <Row>
                {schema.map(([fieldName, fieldType], idx) =>
                    <Column key={idx}>
                        <RenderField fieldName={fieldName} fieldType={fieldType}/>
                    </Column>
                )}
            </Row>
        </Container>
    );
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