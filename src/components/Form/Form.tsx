import { ReactNode, SyntheticEvent, useState } from "react";
import FormProps from "../../types/Form-types";
import './Form.css';
import RecordType from '../../types/Record-type.ts';

function Form({getInput}: FormProps): ReactNode {
  const [input, setInput] = useState('');

  function onInput(event: SyntheticEvent): void {
    const target = event.target as HTMLInputElement;

    setInput(target.value);
  }

  function onPush() {
    const data: RecordType = {
      id: Date.now(),
      data: input,
    };
    getInput({type: 'add', payload: data});
    setInput('');
  }

  return (
    <form className="form" action="#">
      <label className="form__label" htmlFor="textField">Input here to add</label>
      <input className="form__input" type="text" name="textInput" id="textField" onInput={onInput} value={input}/>
      <button type="button" className="form__button" onClick={onPush}>Add</button>
    </form>
  );
}

export default Form;