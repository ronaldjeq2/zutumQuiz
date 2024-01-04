import {describe, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App'

const firstErrorMessage = "Los inputs no deben estar vacios y deben ser solo números enteros positivos separados por ',', no tener espacios en blanco";
const secondErrorMessage = "Los inputs deben tener la misma cantidad de elementos y deben tener una longitud mayor o igual a 2";

describe('App', ()=> {
    it('Renders elementes', () => {
        render(<App/>);
        const infoElement = screen.getByText(/Agregar numeros/i);
        expect(infoElement).toBeInTheDocument()
    })
    it('Error cuando escribes una letra', async() => {
        render(<App/>);
        const grifoInputText = "a";
        await userEvent.type(screen.getByTestId("grifoList"), grifoInputText)
        const infoElement = screen.getByText(firstErrorMessage);
        expect(infoElement).toBeInTheDocument()
    })
    it('Error cuando escribes un numero empezando con 0', async() => {
        render(<App/>);
        const grifoInputText = "1,0";
        await userEvent.type(screen.getByTestId("grifoList"), grifoInputText)
        const infoElement = screen.getByText(firstErrorMessage);
        expect(infoElement).toBeInTheDocument()
    })
    it('Error cuando los inputs tienen diferente longitud', async() => {
        render(<App/>);
        const grifoInputText = "1,10";
        const costoInputText = "1";
        await userEvent.type(screen.getByTestId("grifoList"), grifoInputText)
        await userEvent.type(screen.getByTestId("costoList"), costoInputText)
        const infoElement = screen.getByText(secondErrorMessage);
        expect(infoElement).toBeInTheDocument()
    })
    it('Get -1', async() => {
        const container = render(<App/>);
        const grifoInputText = "2,3,4";
        const costoInputText = "3,4,3";
        const message = container.getByTestId('result')
        await userEvent.type(screen.getByTestId("grifoList"), grifoInputText)
        await userEvent.type(screen.getByTestId("costoList"), costoInputText)
        await userEvent.click(screen.getByRole('button', {name: /Calcular resultado/i}))
        expect(message).toBeInTheDocument();
        expect(message.textContent).toContain('-1');
    })
    it('Get -1', async() => {
        const container = render(<App/>);
        const grifoInputText = "2,3,4";
        const costoInputText = "3,4,3";
        const message = container.getByTestId('result')
        await userEvent.type(screen.getByTestId("grifoList"), grifoInputText)
        await userEvent.type(screen.getByTestId("costoList"), costoInputText)
        await userEvent.click(screen.getByRole('button', {name: /Calcular resultado/i}))
        expect(message).toBeInTheDocument();
        expect(message.textContent).toContain('-1');
    })
    it('Get 3', async() => {
        const container = render(<App/>);
        const grifoInputText = "1,2,3,4,5";
        const costoInputText = "3,4,5,1,2";
        const message = container.getByTestId('result')
        await userEvent.type(screen.getByTestId("grifoList"), grifoInputText)
        await userEvent.type(screen.getByTestId("costoList"), costoInputText)
        await userEvent.click(screen.getByRole('button', {name: /Calcular resultado/i}))
        expect(message).toBeInTheDocument();
        expect(message.textContent).toContain('3');
    })
})