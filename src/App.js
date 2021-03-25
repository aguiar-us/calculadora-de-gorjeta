import React, { useState } from 'react';
import styled from 'styled-components';

const AppDiv = styled.div`
    display: inline-block;
    margin: 20px;
    width: 30%;
    border-radius: 12px;
    background-color: #202225;
    transition: 0.5s;
`;

const Container = styled.div`
    display: inline-block;
    margin: 15px;
`;

const TituloCalculadora = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    margin-top: 15px;
    margin-bottom: 0px;
    padding: 3px;
    border: 1px solid #37393E;
    border-radius: 4px;
    background-color: #37393E;
    color: rgba(255, 255, 255, 0.9);
    font-family: 'Roboto', sans-serif;
    font-size: 27px;
`;

const Input = styled.input`
    transition: 0.5s;
    width: 50%;
    color: rgba(255, 255, 255, 0.5);
    padding: 5px;
    margin-top: 5px;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.3);

    &:focus {
        width: 80%;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.5);
        outline: none;
    }
`;

const TituloFunção = styled.h2`
    margin-top: 20px;
    margin-bottom: 0;
    padding: 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
`;

const DivValores = styled.div`
    display: inline-block;
`;

const DivTitleInputs = styled.div`
    float: left;
`;

const ResultadoDiv = styled.div`
    margin-top: 20px;
`;

const CustomTitle = styled.span`
    color: white;
    padding: 4px;
    border: 1px solid ${props => props.color};
    border-radius: 3px;
    background-color: ${props => props.color};
    font-family: sans-serif;
    font-size: ${props => props.fontsize};
`;

const CustomResult = styled.span`
    margin: 10px;
    padding: 4px;
    font-family: sans-serif;
    color: white;
    border-radius: 4px;
    border: 1px solid ${props => props.bordercolor};
    background-color: ${props => props.backgroundcolor};
`;


function App() {

    const [ CONTA_VALOR, setCONTA_VALOR ] = useState('');
    const [ CONTA_GORJETA, setCONTA_GORJETA ] = useState('5');
    const [ CONTA_PESSOAS, setCONTA_PESSOAS ] = useState('1');

    const LIVE_CONTA_VALOR = (e) => {
        setCONTA_VALOR(e.target.value);
    }

    const LIVE_CONTA_GORJETA = (e) => {
        setCONTA_GORJETA(e.target.value);
    }

    const LIVE_CONTA_PESSOAS = (e) => {
        setCONTA_PESSOAS(e.target.value);
    }

    function VALOR_POR_PESSOA(total, pessoas) {
        return (total / pessoas)
    }

    function CONTA_TOTAL(valor1, valor2) {
        return parseInt(valor1) + valor2;
    }

    const CONTA_GORJETA_VALOR = (CONTA_GORJETA * CONTA_VALOR /100);

    return (
    <>
        <AppDiv>
            <Container>
                <TituloCalculadora>Calculadora de Gorjeta</TituloCalculadora>

                <DivValores>
                    <DivTitleInputs>
                        <TituloFunção>Conta:</TituloFunção>
                        <Input placeholder="100,00" onChange={LIVE_CONTA_VALOR}/>
                    </DivTitleInputs>
                    <DivTitleInputs>
                        <TituloFunção>Gorjeta (%):</TituloFunção>
                        <Input value={CONTA_GORJETA} placeholder="5%" onChange={LIVE_CONTA_GORJETA} />
                    </DivTitleInputs>
                    <DivTitleInputs>
                        <TituloFunção>Pessoas na mesa:</TituloFunção>
                        <Input value={CONTA_PESSOAS} placeholder="1" onChange={LIVE_CONTA_PESSOAS} />
                    </DivTitleInputs>
                </DivValores>

                {CONTA_VALOR > 0 && <TituloCalculadora>Resultado:</TituloCalculadora>}

                {CONTA_VALOR > 0 &&
                    <ResultadoDiv>
                        <CustomTitle fontsize="16px" color="blue">Conta:</CustomTitle>
                            <CustomResult backgroundcolor="#3ebf2a" bordercolor="#3ebf2a">{CONTA_VALOR} R$</CustomResult>
                        <br />
                        <br />
                        <CustomTitle fontsize="16px" color="#843c96">Gorjeta:</CustomTitle>
                            <CustomResult backgroundcolor="#2abf92" bordercolor="#2abf92">{CONTA_GORJETA} %</CustomResult> 
                            <CustomResult backgroundcolor="#3ebf2a" bordercolor="#3ebf2a">{CONTA_GORJETA_VALOR} R$</CustomResult>
                        <br />
                        <br />
                        <CustomTitle fontsize="16px" color="#ffbf00">Valor por pessoa:</CustomTitle>
                            <CustomResult backgroundcolor="#3ebf2a" bordercolor="#3ebf2a">{VALOR_POR_PESSOA(CONTA_TOTAL(CONTA_VALOR, CONTA_GORJETA_VALOR), CONTA_PESSOAS)} R$</CustomResult>
                        <br />
                        <br />
                        <CustomTitle fontsize="18px" color="#333333">Total:</CustomTitle>
                            <CustomResult backgroundcolor="#3ebf2a" bordercolor="#3ebf2a">{CONTA_TOTAL(CONTA_VALOR, CONTA_GORJETA_VALOR)} R$</CustomResult>
                    </ResultadoDiv>
                }
            </Container>
        </AppDiv>

    </>
    );
}

export default App;
