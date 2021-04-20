import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init } from './billingCyclesActions'
import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './summary'



class BillingCyclesForm extends Component {

    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            //transformo um array de objetos em array de numeros e depois faço a soma
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        const {sumOfCredits, sumOfDebts} = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} label='Nome' cols='12 4' placeholder='infrome o nome' readOnly={readOnly} />
                    <Field name='month' component={LabelAndInput} label='Mês' cols='12 4' placeholder='infrome o mês' readOnly={readOnly} />
                    <Field name='year' component={LabelAndInput} label='Ano' cols='12 4' placeholder='infrome o nao' readOnly={readOnly} />
                    <Summary credit={sumOfCredits} debt={sumOfDebts}></Summary>
                    <ItemList cols='12 6' list={credits} readOnly={readOnly} field='credits' legend='Créditos'></ItemList>
                    <ItemList cols='12 6' list={debts} readOnly={readOnly} field='debts' legend='Débitos' showStatus={true}></ItemList>
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCyclesForm = reduxForm({ form: 'billingCyclesForm', destroyOnUnmount: false })(BillingCyclesForm)
const selector = formValueSelector('billingCyclesForm')
const mapStateToProps = state => ({ credits: selector(state, 'credits'), debts: selector(state, 'debts') })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCyclesForm)