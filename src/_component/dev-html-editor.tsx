import React from 'react';
import HtmlEditor, { Toolbar, Item } from 'devextreme-react/html-editor';

export const DevHtmlEditor = (props: any) => {
  const { value, onValueChange } = props;

  return (
    <div className="widget-container">
      <HtmlEditor
        height="250px"
        value={value}
        valueType="html"
        onValueChange={onValueChange}
        // placeholder="내용을 작성해주세요"
      >
        <Toolbar>
          <Item formatName="undo" />
          <Item formatName="redo" />
          <Item formatName="separator" />
          <Item formatName="bold" />
          <Item formatName="italic" />
          <Item formatName="strike" />
          <Item formatName="underline" />
        </Toolbar>
      </HtmlEditor>
    </div>
  );
};
