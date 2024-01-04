import {forwardRef} from 'react';

interface IInputComponentProps {
    id: string;
    type?: string;
    label: string;
}

type Ref = HTMLInputElement;

const InputComponent = forwardRef<Ref, IInputComponentProps>((props, ref) => {
        const {id, type="text", label} = props
        return (
        <div>
            <label>{label}: </label>
            <input id={id} type={type} ref={ref} />
        </div>
    )}
)


export default InputComponent
