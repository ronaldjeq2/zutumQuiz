import {FC} from 'react';

interface IInputComponent {
    id: string;
    type?: string;
    label: string;
}

const InputComponent: FC<IInputComponent> = ({id, type="text", label}) => {

  return (
    <div>
        <label>{label}: </label>
        <input id={id} type={type} />
    </div>

  )
}

export default InputComponent
