import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import DxDropDownBox from 'devextreme-react/drop-down-box';
import { SelectBox as DxSelectBox } from 'devextreme-react/select-box';
import { BaseProps, BasePropTypes, BaseDefaultProps } from './jms.all';
import Grid, { Column } from './jms.grid';

type Props = BaseProps & {
  dataSource: any;
  valueExpr: string;
  displayExpr: string;
  mode?: 'list' | 'grid' | 'tree';
  selectedKeys?: any[];
  gridColumns?: Column[];
  onChange?: (data: any) => void;
};

const SelectBox = React.forwardRef((props: Props, ref) => {
  const {
    id,
    readOnly,
    disabled,
    className,
    dataSource,
    valueExpr,
    displayExpr,
    mode,
    selectedKeys,
    gridColumns,
    onChange,
  } = props;
  const [isGridBoxOpened, setGridBoxOpened] = useState<boolean>(false);
  const [selectedKey, setSelectedKey] = useState<any>();
  const dataGrid = useRef<any>(null);
  const dxDropDownBox = useRef<any>(null);
  const dxSelectBox = useRef<any>(null);

  useEffect(() => {
    /*
     * componentDidMount or componentDidUpdate
     */
    // if (selectedKeys && selectedKeys.length > 0) {
    //   setSelectedKey(selectedKeys[0]);
    // }

    return () => {
      /*
       * componentWillUnmount
       */
    };
  }, []);

  useEffect(() => {
    if (selectedKeys && selectedKeys.length > 0) {
      if (selectedKeys[0] !== selectedKey) {
        setSelectedKey(selectedKeys[0]);
      }
    }
  }, [selectedKeys]);

  useImperativeHandle(ref, () => {
    switch (mode) {
      case 'grid':
        return dxDropDownBox.current;
      default:
        return dxSelectBox.current;
    }
  });

  const onChangeGridSelected = (data: any[]) => {
    setGridBoxOpened(false);
    if (data.length > 0) {
      const key = data[0][valueExpr];
      setSelectedKey(key);

      if (onChange) {
        onChange({
          value: key,
        });
      }
    }
  };

  const dataGridRender = () => (
    <Grid
      id={`SelectBox${id}`}
      keyExpr={valueExpr}
      dataSource={dataSource}
      columns={gridColumns}
      autoSaveState={false}
      pager={{ mode: 'virtual' }}
      selection={{ mode: 'single' }}
      onSelectionChange={onChangeGridSelected}
      selectedKeys={[selectedKey]}
      readOnly={readOnly}
      disabled={disabled}
      className={className}
      ref={dataGrid}
    />
  );

  const onGridBoxOpened = (event: any) => {
    if (event.name === 'opened') {
      setGridBoxOpened(event.value);
    }
  };

  const onValueChanged = (event: any) => {
    setSelectedKey(event.value);
    if (onChange) {
      onChange(event);
    }
  };

  const onCustomItemCreating = (event: any) => {
    if (!event.customItem) {
      const item: { [key: string]: any } = {};
      item[valueExpr] = event.text;
      item[displayExpr] = event.text;
      event.customItem = item;
    }
  };

  return (
    <>
      {mode === 'grid' && (
        <DxDropDownBox
          dataSource={dataSource}
          value={selectedKey}
          valueExpr={valueExpr}
          displayExpr={displayExpr}
          onValueChanged={onValueChanged}
          contentRender={dataGridRender}
          deferRendering={false}
          opened={isGridBoxOpened}
          onOptionChanged={onGridBoxOpened}
          showClearButton
          className={className}
          ref={dxDropDownBox}
        />
      )}
      {mode === 'list' && (
        <DxSelectBox
          dataSource={dataSource}
          value={selectedKey}
          valueExpr={valueExpr}
          displayExpr={displayExpr}
          onValueChanged={onValueChanged}
          placeholder=""
          acceptCustomValue
          showClearButton
          disabled={disabled}
          readOnly={readOnly}
          className={className}
          onCustomItemCreating={onCustomItemCreating}
          ref={dxSelectBox}
        />
      )}
    </>
  );
});

SelectBox.propTypes = {
  ...BasePropTypes,
  dataSource: PropTypes.any.isRequired,
  valueExpr: PropTypes.string.isRequired,
  displayExpr: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['list', 'grid', 'tree']),
  selectedKeys: PropTypes.arrayOf(PropTypes.any),
  gridColumns: PropTypes.arrayOf(PropTypes.any),
  onChange: PropTypes.func,
};

SelectBox.defaultProps = {
  ...BaseDefaultProps,
  mode: 'list',
  selectedKeys: [],
  gridColumns: undefined,
};

export default SelectBox;
