import React, { useEffect, useState, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import DxDataGrid, {
  Column as DxColumn,
  Pager,
  Paging,
  Sorting,
  Scrolling,
  Selection,
  FilterRow,
  ColumnChooser,
  ColumnFixing,
  StateStoring,
  HeaderFilter,
  Button,
  Editing,
  RequiredRule,
} from 'devextreme-react/data-grid';
import { BaseProps, BasePropTypes, BaseDefaultProps } from './jms.all';
import './jms.grid.css';

type Props = BaseProps & {
  dataSource: any[];
  keyExpr: string;
  autoSaveState?: boolean;
  selectedKeys?: any[];
  selection?: any;
  appearance?: any;
  editing?: boolean;
  columns?: Column[];
  pager?: any;
  onEdit?: (data: any) => void;
  onRemove?: (data: any) => void;
  onSelectionChange?: (data: any) => void;
  onRowModifying?: (data: any) => any;
  onChange?: (data: any) => void;
};

export type Column = {
  dataField: string;
  calculateCellValue?: (data: any) => any;
  cellRender?: (row: any) => any;
  caption: string;
  dataType?: 'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime';
  width?: number | string;
  alignment?: 'center' | 'left' | 'right';
  visible?: boolean;
  validations?: {
    rule: 'required' | 'numeric' | 'range';
  }[];
  lookup?: {
    dataSource: any[];
    valueExpr: string;
    displayExpr: string;
  };
  [key: string]: any;
};

const Grid = React.forwardRef((props: Props, ref) => {
  const {
    id,
    disabled,
    dataSource,
    keyExpr,
    autoSaveState,
    selectedKeys,
    selection,
    appearance,
    editing,
    columns,
    pager,
    onEdit,
    onRemove,
    onSelectionChange,
    onRowModifying,
    onChange,
  } = props;
  const dxDataGrid = useRef<any>(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState<any>();
  const [removedRows, setRemovedRows] = useState<any[]>([]);
  const storageKey = `Grid${id}`;

  useImperativeHandle(ref, () => ({
    instance: dxDataGrid.current.instance,
    clearState: () => {
      window.localStorage.removeItem(storageKey);
    },
    clearSelection: () => dxDataGrid.current.instance.clearSelection(),
    getItems: (includeRemoved: boolean = false) => {
      const items = dxDataGrid.current.instance.getDataSource().items();
      return includeRemoved ? items.concat(removedRows) : items;
    },
    getSelectedItems: () => dxDataGrid.current.instance.getSelectedRowsData(),
  }));

  useEffect(() => {
    /*
     * componentDidMount or componentDidUpdate
     */
    if (selectedKeys && selectedKeys.length > 0) {
      setSelectedRowKeys(selectedKeys);
    }

    return () => {
      /*
       * componentWillUnmount
       */
    };
  }, []);

  const onContentReady = () => {
    // setLoadPanelEnabled(false);
  };

  const onSelectionChanged = (event: any) => {
    const { selectedRowsData } = event;

    if (Array.isArray(selectedRowsData)) {
      setSelectedRowKeys(selectedRowsData.map((data) => data[keyExpr]));
    } else {
      setSelectedRowKeys(selectedRowsData[keyExpr]);
    }

    if (onSelectionChange) {
      onSelectionChange(selectedRowsData);
    }
  };

  const onClickEdit = (event: any) => {
    if (onEdit) {
      const { data } = event.row;
      onEdit(data);
    }
  };

  const onClickRemove = (event: any) => {
    if (onRemove) {
      const { data } = event.row;
      onRemove(data);
    }
  };

  const onRowInserting = (event: any) => {
    if (onRowModifying) {
      const { data } = event;
      event.data = {
        ...onRowModifying(data),
        mode: 'inserting',
      };
    }
  };

  const onRowUpdating = (event: any) => {
    if (onRowModifying) {
      const { oldData, newData } = event;
      const data = {
        ...oldData,
        ...newData,
      };
      event.newData = {
        ...onRowModifying(data),
        mode: data.mode === 'inserting' ? 'inserting' : 'updating',
      };
    }
  };

  const onRowRemoving = (event: any) => {
    const { mode } = event.data;

    if (!mode || mode === 'updating') {
      setRemovedRows(removedRows.concat({ ...event.data, mode: 'removing' }));
    }
  };

  const onExporting = (event: any) => {
    console.log(event);
    // event.component.beginUpdate();
    // event.component.columnOption('id', 'visible', true);
  };

  const onExported = (event: any) => {
    console.log(event);
    // event.component.columnOption('id', 'visible', false);
    // event.component.endUpdate();
  };

  const onSaved = (event: any) => {
    if (onChange) {
      onChange(event.component.getDataSource().items());
    }
  };

  return (
    <div className={editing ? 'jms-grid-editting' : 'jms-grid'}>
      <DxDataGrid
        dataSource={dataSource}
        onContentReady={onContentReady}
        selectedRowKeys={selectedRowKeys}
        showColumnLines={appearance.showColumnLines}
        showRowLines={appearance.showRowLines}
        showBorders={appearance.showBorders}
        rowAlternationEnabled={appearance.showAlternatingRowColor}
        columnAutoWidth={appearance.columnAutoWidth}
        allowColumnReordering={appearance.allowColumnReordering}
        allowColumnResizing={appearance.allowColumnResizing}
        columnResizingMode="widget"
        hoverStateEnabled={appearance.hoverStateEnabled}
        keyExpr={keyExpr}
        disabled={disabled}
        ref={dxDataGrid}
        height={appearance.height}
        width="100%"
        // columnHidingEnabled={!editing}
        onSelectionChanged={onSelectionChanged}
        onRowInserting={onRowInserting}
        onRowUpdating={onRowUpdating}
        onRowRemoving={onRowRemoving}
        onExporting={onExporting}
        onExported={onExported}
        onSaved={onSaved}
      >
        {autoSaveState && <StateStoring enabled type="localStorage" storageKey={storageKey} />}
        <ColumnChooser mode="select" width={350} height={500} allowSearch enabled={!editing} />
        <ColumnFixing enabled />
        <Selection
          mode={selection.mode}
          selectAllMode={selection.selectAllMode}
          showCheckBoxesMode={selection.showCheckBoxesMode}
        />
        {pager.mode === 'paging' && <Paging defaultPageSize={pager.defaultPageSize} />}
        {pager.mode === 'paging' && (
          <Pager
            allowedPageSizes={pager.allowedPageSizes}
            showPageSizeSelector={pager.showPageSizeSelector}
            showInfo={pager.showInfo}
          />
        )}
        {pager.mode !== 'paging' && (
          <Scrolling
            mode={pager.mode}
            showScrollbar="always"
            useNative={false}
            scrollByThumb
            columnRenderingMode="virtual"
          />
        )}
        {!editing && <Sorting mode="multiple" />}
        {!editing && <FilterRow visible />}
        {!editing && <HeaderFilter visible />}
        {editing && <Editing mode="batch" allowAdding allowUpdating allowDeleting />}
        {columns?.map((column) => (
          <DxColumn {...column} key={column.dataField}>
            {column.validations?.map(
              (validation) =>
                validation.rule === 'required' && <RequiredRule key={validation.rule} />
            )}
          </DxColumn>
        ))}
        {(onEdit || onRemove) && (
          <DxColumn type="buttons" width={110} hidingPriority={99}>
            <Button text="edit" icon="bx bx-edit" onClick={onClickEdit} />
            <Button text="remove" icon="bx bx-trash" onClick={onClickRemove} />
          </DxColumn>
        )}
      </DxDataGrid>
    </div>
  );
});

Grid.propTypes = {
  ...BasePropTypes,
  dataSource: PropTypes.arrayOf(PropTypes.any).isRequired,
  keyExpr: PropTypes.string.isRequired,
  autoSaveState: PropTypes.bool,
  appearance: PropTypes.shape({
    height: PropTypes.any,
    showColumnLines: PropTypes.bool,
    showRowLines: PropTypes.bool,
    showBorders: PropTypes.bool,
    showAlternatingRowColor: PropTypes.bool,
    columnAutoWidth: PropTypes.bool,
    allowColumnReordering: PropTypes.bool,
    allowColumnResizing: PropTypes.bool,
    hoverStateEnabled: PropTypes.bool,
  }),
  selectedKeys: PropTypes.arrayOf(PropTypes.any),
  selection: PropTypes.shape({
    mode: PropTypes.oneOf(['none', 'single', 'multiple']),
    selectAllMode: PropTypes.oneOf(['page', 'allPages']),
    showCheckBoxesMode: PropTypes.oneOf(['none', 'onClick', 'onLongTap', 'always']),
  }),
  editing: PropTypes.bool,
  columns: PropTypes.arrayOf(PropTypes.any),
  pager: PropTypes.shape({
    mode: PropTypes.oneOf(['paging', 'standard', 'infinite', 'virtual']),
    defaultPageSize: PropTypes.number,
    allowedPageSizes: PropTypes.arrayOf(PropTypes.number),
    showPageSizeSelector: PropTypes.bool,
    showInfo: PropTypes.bool,
  }),
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
  onSelectionChange: PropTypes.func,
  onRowModifying: PropTypes.func,
  onChange: PropTypes.func,
};

Grid.defaultProps = {
  ...BaseDefaultProps,
  autoSaveState: true,
  appearance: {
    height: '100%',
    showColumnLines: true,
    showRowLines: true,
    showBorders: true,
    showAlternatingRowColor: false,
    columnAutoWidth: false,
    allowColumnReordering: true,
    allowColumnResizing: true,
    hoverStateEnabled: true,
  },
  selectedKeys: [],
  selection: {
    using: true,
    mode: 'none',
    selectAllMode: 'page',
    showCheckBoxesMode: 'onClick',
  },
  editing: false,
  columns: undefined,
  pager: {
    mode: 'paging',
    defaultPageSize: 10,
    allowedPageSizes: [10, 20, 50],
    showPageSizeSelector: true,
    showInfo: true,
  },
};

export default Grid;
