import * as React from 'react'
import { Form, Text } from 'react-form'
import { database } from 'firebase'

export default class CreateVideo extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(data) {
        database().ref(`videos/${data.id}`).set({
            id: data.id,
            tags: []
        })
    }

    render() {
        return <Form onSubmit={this.handleSubmit}>
        {
            formApi => (
                <form onSubmit={formApi.submitForm} id="CreateVideoForm">
                    <label htmlFor="youtubeId">YouTube ID</label>
                    <Text field="id" id="youtubeId" />
                    <button type="submit">Submit</button>
                </form>
            )
        }
        </Form>
    }
}