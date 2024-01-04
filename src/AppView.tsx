import { FC } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import InputComponent from './components/inputComponent'

interface IAppViewtProps {
    grifoRef: React.Ref<HTMLInputElement> | null;
    costoRef: React.Ref<HTMLInputElement> | null;
}


export const AppView: FC<IAppViewtProps> = ({grifoRef, costoRef}) => {
   

  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>Dev-quiz</h1>
      <InputComponent ref={grifoRef} id='grifoList' label='grifo' type='text'/>
      <InputComponent ref={costoRef} id='costoList' label='costo' type='text'/>
    </>
  )
}

export default AppView
