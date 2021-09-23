/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import DxTextBox from 'devextreme-react/text-box';
import DxDateBox from 'devextreme-react/date-box';
import DxNumberBox from 'devextreme-react/number-box';
import { BaseProps, BasePropTypes, BaseDefaultProps } from './jms.all';

type Props = BaseProps & {
  appearance?: any;
  placeholder?: string;
  value?: any;
  valueChangeEvent?: 'keyup' | 'blur' | 'change' | 'input' | 'focusout';
  onChange?: (event: any) => void;
};

const TextBox = React.forwardRef((props: Props, ref) => {
  const {
    readOnly,
    disabled,
    className,
    appearance,
    placeholder,
    value,
    onChange,
    valueChangeEvent,
  } = props;
  const { mode, currencyChar } = appearance;
  const isDateBox = ['date', 'time', 'datetime'].includes(mode);
  const isNumberBox = ['currency', 'number'].includes(mode);
  const [elementValue, setElementValue] = useState<any>(value);

  const handleChange = (event: any) => {
    setElementValue(event.value);
    if (onChange) {
      onChange(event);
    }
  };

  useEffect(() => {
    setElementValue(value);
  }, [props]);

  useImperativeHandle(ref, () => ({}));

  return (
    <div className="form-input">
      {isDateBox ? (
        <DxDateBox
          type={mode}
          value={elementValue ?? new Date()}
          acceptCustomValue={false}
          displayFormat="yyyy/MM/dd"
          onValueChanged={handleChange}
          valueChangeEvent={valueChangeEvent}
          readOnly={readOnly}
          disabled={disabled}
        />
      ) : isNumberBox ? (
        <DxNumberBox
          format={`${mode === 'currency' ? `${currencyChar} ` : ''}#,##0.##`}
          value={elementValue}
          onValueChanged={handleChange}
          valueChangeEvent={valueChangeEvent}
          readOnly={readOnly}
          disabled={disabled}
        />
      ) : (
        <DxTextBox
          width="100%"
          mode={appearance.mode}
          placeholder={placeholder}
          value={elementValue}
          showClearButton
          readOnly={readOnly}
          disabled={disabled}
          className={className}
          onValueChanged={handleChange}
          valueChangeEvent={valueChangeEvent}
        />
      )}
    </div>
  );
});

TextBox.propTypes = {
  ...BasePropTypes,
  appearance: PropTypes.shape({
    mode: PropTypes.oneOf([
      'email',
      'password',
      'search',
      'tel',
      'text',
      'url',
      'date',
      'time',
      'datetime',
      'currency',
      'number',
    ]),
    currencyChar: PropTypes.string,
  }),
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  valueChangeEvent: PropTypes.oneOf(['keyup', 'blur', 'change', 'input', 'focusout']),
};

TextBox.defaultProps = {
  ...BaseDefaultProps,
  appearance: {
    mode: 'text',
  },
  placeholder: undefined,
  valueChangeEvent: 'change',
};

export default TextBox;
