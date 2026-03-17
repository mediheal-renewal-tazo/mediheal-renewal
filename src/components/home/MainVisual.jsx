import { useState, useRef } from 'react';

const FADE_MS = 200;

const MainVisual = () => {
    const [leftKo, setLeftKo] = useState(false);
    const [leftVisible, setLeftVisible] = useState(true);
    const [rightKo, setRightKo] = useState(false);
    const [rightVisible, setRightVisible] = useState(true);
    const leftTimer = useRef(null);
    const rightTimer = useRef(null);

    const handleLeftEnter = () => {
        clearTimeout(leftTimer.current);
        setLeftVisible(false);
        leftTimer.current = setTimeout(() => {
            setLeftKo(true);
            setLeftVisible(true);
        }, FADE_MS);
    };

    const handleLeftLeave = () => {
        clearTimeout(leftTimer.current);
        setLeftVisible(false);
        leftTimer.current = setTimeout(() => {
            setLeftKo(false);
            setLeftVisible(true);
        }, FADE_MS);
    };

    const handleRightEnter = () => {
        clearTimeout(rightTimer.current);
        setRightVisible(false);
        rightTimer.current = setTimeout(() => {
            setRightKo(true);
            setRightVisible(true);
        }, FADE_MS);
    };

    const handleRightLeave = () => {
        clearTimeout(rightTimer.current);
        setRightVisible(false);
        rightTimer.current = setTimeout(() => {
            setRightKo(false);
            setRightVisible(true);
        }, FADE_MS);
    };

    return (
        <div className="main">
            <div className="main__inner">
                <div className="main__visual-text">
                    <h2
                        className="main__visual-text left"
                        style={{ opacity: leftVisible ? 1 : 0, transition: `opacity ${FADE_MS}ms ease` }}
                        onMouseEnter={handleLeftEnter}
                        onMouseLeave={handleLeftLeave}
                    >
                        {leftKo ? (
                            <>
                                <span>성분을 만나는</span>
                                <span>순간</span>
                            </>
                        ) : (
                            <>
                                <span>when disign meets</span>
                                <span>production,</span>
                            </>
                        )}
                    </h2>
                    <div className="main__visual-line"></div>
                    <h2
                        className="main__visual-text right"
                        style={{ opacity: rightVisible ? 1 : 0, transition: `opacity ${FADE_MS}ms ease` }}
                        onMouseEnter={handleRightEnter}
                        onMouseLeave={handleRightLeave}
                    >
                        {rightKo ? (
                            <>
                                <span>진짜 피부 회복이</span>
                                <span>시작된다</span>
                            </>
                        ) : (
                            <>
                                <span>perfect</span>
                                <span>packaging is born</span>
                            </>
                        )}
                    </h2>
                </div>
                <div className="main__visual-middle">
                    <span>MEDIHEAL LAB</span>
                    <span>MEDIHEAL LAB</span>
                    <span>MEDIHEAL LAB</span>
                    <span>MEDIHEAL LAB</span>
                    <span>MEDIHEAL LAB</span>
                </div>
                <div className="main__visual-dsc">
                    <span>성분연구는 피부 고민과 성분, 제형을 연결하는 정밀한 설계입니다.</span>
                    <span>메디힐은 자체 엘앤피코스메틱 R&D센터에서 연구하고 제품을 만듭니다.</span>
                    <span>정밀하게 설계된 메디힐의 성분 솔루션을 경험해보세요.</span>
                </div>
            </div>
        </div>
    );
};

export default MainVisual;
