import React, { Component } from 'react'
import { reduxForm, field, Field } from 'redux-form'


class BillingCyclesForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-doby'>
                    <Field name='name' component='input' />
                    <Field name='month' component='input' />
                    <Field name='year' component='input' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'billingCycleForm' })(BillingCyclesForm)