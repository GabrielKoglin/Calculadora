import { useCalculator } from '../hooks/useCalculator';
import { Button } from './Button';
import { Display } from './Display';

export const Calculator = () => {
    const { displayValue, inputDigit, inputDot, clear, deleteLast, performOperation, handleEquals } = useCalculator();

    return (
        <div className="w-full max-w-sm bg-gradient-to-b from-gray-900 to-black rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_0_4px_rgba(60,60,60,1)] border-t border-gray-700 relative overflow-hidden">
            {/* Scale pattern background for the calculator body */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30 pointer-events-none mix-blend-soft-light"></div>

            <div className="relative z-10">
                <Display value={displayValue} />

                <div className="grid grid-cols-4 gap-4">
                    {/* Row 1 */}
                    <Button label="AC" onClick={clear} variant="action" />
                    <Button label="DEL" onClick={deleteLast} variant="action" />
                    <Button label="%" onClick={() => performOperation(null)} variant="action" /> {/* Placeholder handling for % if needed or just remove */}
                    <Button label="/" onClick={() => performOperation('/')} variant="operator" />

                    {/* Row 2 */}
                    <Button label="7" onClick={() => inputDigit('7')} />
                    <Button label="8" onClick={() => inputDigit('8')} />
                    <Button label="9" onClick={() => inputDigit('9')} />
                    <Button label="*" onClick={() => performOperation('*')} variant="operator" />

                    {/* Row 3 */}
                    <Button label="4" onClick={() => inputDigit('4')} />
                    <Button label="5" onClick={() => inputDigit('5')} />
                    <Button label="6" onClick={() => inputDigit('6')} />
                    <Button label="-" onClick={() => performOperation('-')} variant="operator" />

                    {/* Row 4 */}
                    <Button label="1" onClick={() => inputDigit('1')} />
                    <Button label="2" onClick={() => inputDigit('2')} />
                    <Button label="3" onClick={() => inputDigit('3')} />
                    <Button label="+" onClick={() => performOperation('+')} variant="operator" />

                    {/* Row 5 */}
                    <Button label="0" onClick={() => inputDigit('0')} className="col-span-2 w-full rounded-2xl" />
                    <Button label="." onClick={inputDot} />
                    <Button label="=" onClick={handleEquals} variant="operator" />
                </div>
            </div>
        </div>
    );
};
