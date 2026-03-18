import { useEffect, useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';

const HeaderSearch = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);
    const panelRef = useRef(null);

    useEffect(() => {
        if (!isOpen) {
            setQuery('');
            return;
        }

        inputRef.current?.focus();

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        const handleClickOutside = (e) => {
            if (panelRef.current && !panelRef.current.closest('.header')?.contains(e.target)) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="header-search" ref={panelRef}>
            <button className="header-search__close" type="button" aria-label="닫기" onClick={onClose}>
                <IoClose />
            </button>
            <div className="header-search__body">
                <div className="header-search__row">
                    <CiSearch className="header-search__icon" />
                    <input
                        ref={inputRef}
                        className="header-search__input"
                        type="text"
                        placeholder="검색어를 입력하세요."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderSearch;
