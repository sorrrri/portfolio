import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertToRaw, convertFromHTML } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export const EditTextarea = (props: any) => {
  // const blocks = convertFromHTML(`${props.value}`);
  // const contentDataState = ContentState.createFromBlockArray(blocks.contentBlocks);
  // const editorDataState = EditorState.createWithContent(contentDataState);
  // const [editorState, setEditorState] = useState(editorDataState);

  // const onEditorStateChange = (editorStateData: any) => {
  //   setEditorState(editorStateData);
  //   const data = draftToHtml(convertToRaw(editorStateData.getCurrentContent()));
  //   props.onDataChange(data);
  // };
  return (
    <>
      <Editor
        toolbar={{
          options: [
            'inline',
            'blockType',
            'fontSize',
            'fontFamily',
            'list',
            'textAlign',
            'colorPicker',
            'emoji',
            'history',
          ],
        }}
        placeholder="내용을 작성해주세요."
        localization={{
          locale: 'ko',
        }}
        // editorState={editorState}
        // onEditorStateChange={onEditorStateChange}
      />
    </>
  );
};
