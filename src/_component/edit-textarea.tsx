/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export const EditTextarea = (props: any) => {
  const { content } = props;
  const showEditTextarea = () => {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    const editTextarea = document.querySelector('.edit-textarea') as HTMLUListElement;

    if (textarea.value !== '') {
      console.log(textarea.value);
      editTextarea.classList.add('active');
    } else {
      editTextarea.classList.remove('active');
    }
  };

  return (
    <>
      <ul className="edit-textarea">
        <li className="checkbox text-bold">
          <input id="text-bold" type="checkbox" />
          <label htmlFor="text-bold">B</label>
        </li>
        <li className="checkbox text-italic">
          <input id="text-italic" type="checkbox" />
          <label htmlFor="text-italic">I</label>
        </li>
        <li className="checkbox text-underline">
          <input id="text-underline" type="checkbox" />
          <label htmlFor="text-underline">U</label>
        </li>
        <li className="checkbox text-color">
          <input id="text-color" type="checkbox" />
          <label htmlFor="text-color">C</label>
        </li>
        <li className="checkbox text-highlight">
          <input id="text-highlight" type="checkbox" />
          <label htmlFor="text-highlight">H</label>
        </li>
      </ul>
      <textarea name="" id="" onInput={showEditTextarea} onChange={content} />
    </>
  );
};
