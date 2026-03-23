import { useRef, useState } from 'react';
import arrowdown from '@/assets/images/products/card/arrow_down.svg';
import arrowup from '@/assets/images/products/card/arrow_up.svg';

const SortSelect = ({
    value,
    onChange,
    options,
    className = '',
    selectClassName = '',
    iconClassName = '',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    const handleClick = () => {
        if (!selectRef.current) return;
        selectRef.current.focus();
        selectRef.current.click();
        setIsOpen(true);
    };

    return (
        <div
            className={`product__array ${isOpen ? 'is-open' : ''} ${className}`}
            onClick={handleClick}
        >
            <select
                ref={selectRef}
                className={`product__sort-select ${selectClassName}`}
                value={value}
                onChange={onChange}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <img
                src={isOpen ? arrowup : arrowdown}
                alt=""
                className={`product__array-icon ${iconClassName}`}
            />
        </div>
    );
};

export default SortSelect;