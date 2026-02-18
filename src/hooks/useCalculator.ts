import { useState } from 'react';

export type Operator = '+' | '-' | '*' | '/' | null;

export const useCalculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [firstOperand, setFirstOperand] = useState<number | null>(null);
    const [operator, setOperator] = useState<Operator>(null);
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

    const inputDigit = (digit: string) => {
        if (waitingForSecondOperand) {
            setDisplayValue(digit);
            setWaitingForSecondOperand(false);
        } else {
            setDisplayValue(displayValue === '0' ? digit : displayValue + digit);
        }
    };

    const inputDot = () => {
        if (waitingForSecondOperand) {
            setDisplayValue('0.');
            setWaitingForSecondOperand(false);
        } else if (!displayValue.includes('.')) {
            setDisplayValue(displayValue + '.');
        }
    };

    const clear = () => {
        setDisplayValue('0');
        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecondOperand(false);
    };

    const deleteLast = () => {
        if (waitingForSecondOperand) return;

        if (displayValue.length === 1) {
            setDisplayValue('0');
        } else {
            setDisplayValue(displayValue.slice(0, -1));
        }
    };

    const performOperation = (nextOperator: Operator) => {
        const inputValue = parseFloat(displayValue);

        if (firstOperand === null) {
            setFirstOperand(inputValue);
        } else if (operator) {
            const currentValue = firstOperand || 0;
            const newValue = calculate(currentValue, inputValue, operator);
            setDisplayValue(String(newValue));
            setFirstOperand(newValue);
        }

        setWaitingForSecondOperand(true);
        setOperator(nextOperator);
    };

    const calculate = (first: number, second: number, osc: Operator): number => {
        switch (osc) {
            case '+': return first + second;
            case '-': return first - second;
            case '*': return first * second;
            case '/': return first / second;
            default: return second;
        }
    };

    const handleEquals = () => {
        if (!operator || firstOperand === null) return;

        const inputValue = parseFloat(displayValue);
        const result = calculate(firstOperand, inputValue, operator);

        setDisplayValue(String(result));
        setFirstOperand(result);
        setOperator(null);
        setWaitingForSecondOperand(true); // Treat result as start of new calculation if needed, or wait for next input
    };

    return {
        displayValue,
        operator,
        inputDigit,
        inputDot,
        clear,
        deleteLast,
        performOperation,
        handleEquals
    };
};
