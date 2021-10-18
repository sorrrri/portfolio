import React, { useState } from 'react';
import HtmlEditor, { Toolbar, MediaResizing, Item } from 'devextreme-react/html-editor';
import CheckBox from 'devextreme-react/check-box';
import DateBox from 'devextreme-react/date-box';
import './html-editor.css';

export const TextEditor = (props: any) => {
  const sizeValues = ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'];
  const fontValues = [
    'Arial',
    'Courier New',
    'Georgia',
    'Impact',
    'Lucida Console',
    'Tahoma',
    'Times New Roman',
    'Verdana',
  ];
  const headerValues = [false, 1, 2, 3, 4, 5];

  const [isMultiline, setIsMultiline] = useState();

  const multilineChanged = (e: any) => {
    setIsMultiline(e.value);
  };

  return (
    <HtmlEditor>
      <Toolbar multiline items={['separator', 'bold', 'italic', 'strike', 'underline']}>
        {/* <Item name="" /> */}
      </Toolbar>
    </HtmlEditor>
    // <>
    //   <DateBox defaultValue={new Date()} pickerType="rollers" />
    // </>
  );
};
