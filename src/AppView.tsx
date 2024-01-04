import { FC } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import InputComponent from './components/inputComponent'

interface IAppViewtProps {
    grifoRef: React.Ref<HTMLInputElement> | null;
    costoRef: React.Ref<HTMLInputElement> | null;
    onCalculatePress: () => void;
    resultText?: string
    isValid: boolean
}


export const AppView: FC<IAppViewtProps> = ({grifoRef, costoRef, onCalculatePress, resultText="", isValid}) => {
   
  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>Dev-quiz</h1>
      <h2>Agregar numeros separados por ,</h2>
      <InputComponent ref={grifoRef} id='grifoList' label='grifo' type='text'/>
      <InputComponent ref={costoRef} id='costoList' label='costo' type='text'/>
      <div className="card">
        <button disabled={!isValid} onClick={onCalculatePress}>
          Calcular resultado
        </button>
      </div>
      <h3>
        {resultText}
      </h3>
    </>
  )
}

export default AppView
