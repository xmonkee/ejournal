// @flow
import type {Model} from './../model';
import type {EDate, Record} from './../types/etypes';
import React, {Component} from 'react';
import RecordsBrowser from './records-browser';
import { model } from './../fixtures';

type Props = {};
type State = {model: Model};

export default class App extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {model: model};
    }

    updateModel(model: Model) {
        this.setState({model})
    }

    handleAddRecord(date: EDate, record: Record) {
        this.updateModel(this.state.model.addRecord(date, record))
    }

    handleUpdateRecord(date: EDate, idx: number, record: Record) {
        this.updateModel(this.state.model.withRecord(date, idx, record));
    }

    render() {
        return (
            <div>
                <RecordsBrowser 
                records={this.state.model.records} 
                handleAddRecord={this.handleAddRecord.bind(this)}
                handleUpdateRecord={this.handleUpdateRecord.bind(this)}
                />
            </div>
        );
    }
}