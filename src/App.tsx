import { createRef, useEffect, useState } from 'react'
import './App.css'
import AppView from './AppView'
import { arrayItemsAreMajorToZero, arraysHaveTheSameLength, arraysLengthsAreIqualOrMajorTo, reverseArraySinceKey } from './shared/utils/arrayFunctions';
import { convertStringToArrayNumbers } from './shared/utils/stringFunctions';

function App() {
  const grifoRef = createRef<HTMLInputElement>();
  const costoRef = createRef<HTMLInputElement>();
  const [resultText, setResultText] = useState("")
  const [isValid, setIsValid] = useState(false)

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
   const grifoRefValue =  grifoRef?.current?.value ?? '';
   const costoRefValue =  costoRef?.current?.value ?? '';
   const indexResult = getIndexResult(convertStringToArrayNumbers(costoRefValue), convertStringToArrayNumbers(grifoRefValue))
   setResultText(`el resultado es: ${indexResult}`)
  }

  const validateValue = (inputValue: string)=> {
    const regexInfo = /^[1-9]\d*(,\d+)*$/
    return inputValue.length> 0 && regexInfo.test(inputValue) && arrayItemsAreMajorToZero(convertStringToArrayNumbers(inputValue))
  }

  useEffect(() => {
    const grifoRefCurrentValue = grifoRef?.current
    const costoRefCurrentValue = costoRef?.current

    const handleInputChange = () => {
      const grifoRefValue = grifoRefCurrentValue?.value?? '';
      const costoRefValue = costoRefCurrentValue?.value?? '';
      const isCorrectFormat = validateValue(grifoRefValue) && validateValue(costoRefValue)
      let textInfo = ""
      if(isCorrectFormat) {
        const grifoArray = grifoRefValue.split(",");
        const costoArray = costoRefValue.split(",");
       const itemsHaveTheSameLenght = arraysHaveTheSameLength(grifoArray, costoArray)
       const itemsHaveLengthMajorToTwo = arraysLengthsAreIqualOrMajorTo(2, grifoArray, costoArray)
       if(!itemsHaveTheSameLenght || !itemsHaveLengthMajorToTwo){
        textInfo = "Los inputs deben tener la misma cantidad de elementos y deben tener una longitud mayor o igual a 2"
       }
      } else {
        textInfo = "Los inputs no deben estar vacios y deben ser solo números enteros positivos separados por ',', no tener espacios en blanco"
      }
      setResultText(textInfo)
      setIsValid(!textInfo)
    };

    grifoRefCurrentValue?.addEventListener('input', handleInputChange);
    costoRefCurrentValue?.addEventListener('input', handleInputChange);

    return () => {
      
      grifoRefCurrentValue?.removeEventListener('input', handleInputChange);
      costoRefCurrentValue?.removeEventListener('input', handleInputChange);
    };
  }, [grifoRef, costoRef]);

  return (
    <AppView isValid={isValid} resultText={resultText} onCalculatePress={onHandlePress} grifoRef={grifoRef} costoRef={costoRef} />
  )
}

export default App
