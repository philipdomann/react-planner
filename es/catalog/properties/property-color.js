import React, { PropTypes } from 'react';
import FormLabel from '../../components/style/form-label';
import FormColorInput from '../../components/style/form-color-input';

var firstTdStyle = {
  width: '6em'
};

export default function PropertyColor(_ref) {
  var value = _ref.value,
      onUpdate = _ref.onUpdate,
      configs = _ref.configs;

  return React.createElement(
    'table',
    { className: 'PropertyColor', style: { width: "100%", borderSpacing: "2px 0", marginBottom: "2px" } },
    React.createElement(
      'tbody',
      null,
      React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          { style: firstTdStyle },
          React.createElement(
            FormLabel,
            null,
            configs.label
          )
        ),
        React.createElement(
          'td',
          null,
          React.createElement(FormColorInput, { value: value, onChange: function onChange(event) {
              return onUpdate(event.target.value);
            } })
        )
      )
    )
  );
}

PropertyColor.propTypes = {
  value: PropTypes.any.isRequired,
  onUpdate: PropTypes.func.isRequired,
  configs: PropTypes.object.isRequired
};