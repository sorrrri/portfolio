import React, { useRef, useImperativeHandle, useState } from 'react';
import PropTypes from 'prop-types';
import DxFileUploader from 'devextreme-react/file-uploader';
import { BaseProps, BasePropTypes, BaseDefaultProps } from './jms.all';

type Props = BaseProps & {
  multiple?: boolean;
  uploadMode?: 'useForm' | 'instantly' | 'useButtons';
};

const FileUploader = React.forwardRef((props: Props, ref) => {
  const { readOnly, disabled, className, multiple, uploadMode } = props;
  const [value, setValue] = useState<File[]>([]);
  const dxFileUploader = useRef(null);

  useImperativeHandle(ref, () => ({
    getValue: () => value,
    clear: () => setValue([]),
  }));

  return (
    <DxFileUploader
      width="100%"
      multiple={multiple}
      accept="*"
      allowCanceling
      uploadMode={uploadMode}
      readOnly={readOnly}
      disabled={disabled}
      className={className}
      value={value}
      onValueChanged={(event: any) => {
        setValue(event.value);
      }}
      ref={dxFileUploader}
    />
  );
});

FileUploader.propTypes = {
  ...BasePropTypes,
  multiple: PropTypes.bool,
  uploadMode: PropTypes.oneOf(['useForm', 'instantly', 'useButtons']),
};

FileUploader.defaultProps = {
  ...BaseDefaultProps,
  multiple: false,
  uploadMode: 'useForm',
};

export default FileUploader;
