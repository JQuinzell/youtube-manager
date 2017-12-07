import * as React from 'react'
import { Form, Text } from 'react-form'
import { database } from 'firebase'
import VideoStore from '../models/VideoStore'

export default class FilterTags extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(data) {
        VideoStore.filter = data.filter
    }

    render() {
        return <Form onSubmit={this.handleSubmit}>
            {
                formApi => (
                    <form onSubmit={formApi.submitForm}>
                        <label htmlFor="filter">Filter Tag</label>
                        <Text field="filter" id="filter" />
                        <button type="submit">Submit</button>
                    </form>
                )
            }
        </Form>
    }
}