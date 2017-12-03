import * as React from 'react'
import { Form, Text } from 'react-form'
import { database } from 'firebase'

export default class CreateVideo extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(data) {
        this.props.video.addTag(data.tagdata)
    }

    render() {
        return <Form onSubmit={this.handleSubmit}>
            {
                formApi => (
                    <form onSubmit={formApi.submitForm}>
                        <label htmlFor="tagdata">Tag</label>
                        <Text field="tagdata" id="tagdata" />
                        <button type="submit">Submit</button>
                    </form>
                )
            }
        </Form>
    }
}