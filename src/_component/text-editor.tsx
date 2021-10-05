/* eslint-disable no-shadow */
import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export const TextEditor = (props: any) => {
  // const blocks = convertFromHTML(`${props.value}`);
  // const contentDataState = ContentState.createFromBlockArray(blocks.contentBlocks);
  // const editorDataState = EditorState.createWithContent(contentDataState);
  // const [editorState, setEditorState] = useState(editorDataState);

  // const onEditorStateChange = (editorStateData: any) => {
  //   setEditorState(editorStateData);
  //   const data = draftToHtml(convertToRaw(editorStateData.getCurrentContent()));
  //   props.onDataChange(data);
  // };

  // 참고링크 https://jpuri.github.io/react-draft-wysiwyg/#/docs
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
