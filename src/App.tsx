import { createRef, useState } from 'react'
import './App.css'
import AppView from './AppView'
import { reverseArraySinceKey } from './shared/utils/arrayFunctions';
import { convertStringToArrayNumbers } from './shared/utils/stringFunctions';

function App() {
  const grifoRef = createRef<HTMLInputElement>();
  const costoRef = createRef<HTMLInputElement>();
  const [resultText, setResultText] = useState("")


  const getIndexResult = (costoArray: number[], grifoArray: number[]) => {
    let indexResult = -1;
    for (let index = 0; index < costoArray.length; index++) {
      const grifoArrayList = reverseArraySinceKey(grifoArray, index);
      const costoArrayList = reverseArraySinceKey(costoArray, index);
      let gasValue = grifoArrayList[0]
      for (let index = 0; index < costoArray.length; index++) {
        gasValue -= costoArrayList[index];
        if(gasValue < 0) {
          break;
        }
        if(index < costoArray.length-1){
          gasValue += grifoArrayList[index+1]
        }
      }
      if(gasValue < 0) {
        continue;
      }
      else {
        indexResult = index;
        break;
      }
    }
    return indexResult;
  }


  const onHandlePress = ()=> {
   const grifoRefArrayValues =  grifoRef?.current?.value ?? '';
   const costoRefArrayValues =  costoRef?.current?.value ?? '';
   const indexResult = getIndexResult(convertStringToArrayNumbers(costoRefArrayValues), convertStringToArrayNumbers(grifoRefArrayValues))
   setResultText(`el resultado es: ${indexResult}`)
  }

  return (
    <AppView resultText={resultText} onCalculatePress={onHandlePress} grifoRef={grifoRef} costoRef={costoRef} />
  )
}

export default App
