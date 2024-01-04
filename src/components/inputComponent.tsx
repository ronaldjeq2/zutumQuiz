import {forwardRef} from 'react';
import './inputComponent.css'

interface IInputComponentProps {
    id: string;
    type?: string;
    label: string;
}

type Ref = HTMLInputElement;

const InputComponent = forwardRef<Ref, IInputComponentProps>((props, ref) => {
        const {id, type="text", label} = props
        return (
        <div className="input-container">
            <h4>{label}: </h4>
            <input data-testid={id} id={id} type={type} ref={ref} />
        </div>
    )}
)


export default InputComponent
