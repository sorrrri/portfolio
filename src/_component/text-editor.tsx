/* eslint-disable no-shadow */
import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export const TextEditor = (props: any) => {
  const { editorState, onEditorStateChange } = props;

  return (
    <>
      <Editor
        toolbar={{
          options: [
            'inline',
            'colorPicker',
            // 'blockType',
            // 'fontSize',
            // 'fontFamily',
            // 'list',
            // 'textAlign',
            // 'emoji',
            // 'history',
          ],
        }}
        placeholder="내용을 작성해주세요."
        localization={{
          locale: 'ko',
        }}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />
    </>
  );
};
