import PropTypes from 'prop-types';

type BaseProps = {
  id: string;
  readOnly?: boolean;
  disabled?: boolean;
  className?: string;
};

const BasePropTypes = {
  id: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

const BaseDefaultProps = {
  readOnly: false,
  disabled: false,
};

export type { BaseProps };
export { BasePropTypes, BaseDefaultProps };
