import React, { useState } from 'react';

const KedihealFinalCta = () => {
    const [concern, setConcern] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // 제출 로직
    };

    return (
        <section className="kediheal__section kediheal__section--final-cta">
            <div className="kediheal__final-cta-inner">
                <h2 className="kediheal__final-cta-title">
                    메디힐은 멈추지 않고 세상의 피부고민이 완전히 없어지는 그날까지 고민하겠습니다
                </h2>

                <form className="kediheal__final-cta-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="kediheal__final-cta-input"
                        placeholder="당신의 피부고민을 들려주세요"
                        value={concern}
                        onChange={(e) => setConcern(e.target.value)}
                    />
                    <button type="submit" className="kediheal__final-cta-btn">
                        함께하기
                    </button>
                </form>
            </div>
        </section>
    );
};

export default KedihealFinalCta;
