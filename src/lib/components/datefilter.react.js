import React, {Component,useState} from 'react';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class datefilter extends Component {
    constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
  }
    render() {
        const {id, label, setProps, value} = this.props;

        return (
            <div id={id}>
            <DatePicker selected={this.state.startDate} onChange={date => setProps({ value: date })} />
            </div>
        );
    }
}

datefilter.defaultProps = {};

datefilter.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.any,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
