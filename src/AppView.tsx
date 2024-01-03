import reactLogo from './assets/react.svg'
import './App.css'
import InputComponent from './components/inputComponent'

export const AppView = () => {

  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>Dev-quiz</h1>
      <InputComponent id='grifoList' label='grifo' type='text'/>
    </>
  )
}

export default AppView
