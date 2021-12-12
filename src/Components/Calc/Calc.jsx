import React from 'react';
import classes from './Calc.module.css';
import classNames from "classnames";

const Calc = () => {
    return (
        <div>
            <main className={classes.calcWrapper}>
                <div className={classes.container}>
                    <form id="form">
                        <div className={classes.heading}>
                            <h1 className={classes.headingTitle}>Калькулятор 3d-визуализации</h1>
                        </div>

                        <div className={classes.calcSection}>
                            <div>
                                 <h4 className={classNames(classes.checkboxWrapper, classes.titleBold, classes.sectionTitle)}>Стиль дизайна интерьера</h4>
                                <label className={classes.radioWrapper} data-name="mobile">
                                    <input type="radio" className={classNames(classes.radio, classes.radio-1)} name="style" value="400" checked/>
                                    <div className={classes.titleLite}>
                                        Минимализм, Скандинавский, Хайтек
                                        <span className={classes.note}>Базовая цена: 1 м² = 400 рублей</span>
                                    </div>
                                </label>
                                <label className={classes.radioWrapper} data-name="mobile">
                                    <input type="radio" className={classNames(classes.radio, classes.radio-2)} name="style" value="450"/>
                                    <div className={classes.titleLite}>
                                        Эклектика, Лофт
                                        <span className={classes.note}>Базовая цена: 1 м² = 450 рублей</span>
                                    </div>
                                </label>
                                <label className={classes.radioWrapper} data-name="mobile">
                                    <input type="radio" className={classNames(classes.radio, classes.radio-3)} name="style" value="500"/>
                                    <div className={classes.titleLite}>
                                        Классический, Английский, Прованс, Арт-Деко
                                        <span className={classes.note}>Базовая цена: 1 м² = 500 рублей</span>
                                    </div>
                                </label>
                            </div>
                            <div>
                                {/*<div className={classNames(classes.sliderWrapper, classes.sliderWrapper_1)}>*/}
                                {/*    <div>*/}
                                {/*        <img src="./images/minimal.jpg" alt="style">*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <img src="./images/scand.jpg" alt="style">*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <img src="./images/high_tech.jpg" alt="style">*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className={classNames(classes.sliderWrapper, classes.sliderWrapper_2)}>*/}
                                {/*    <div>*/}
                                {/*        <img src="./images/eclect.jpg" alt="style">*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <img src="./images/loft.jpg" alt="style">*/}
                                {/*    </div>*/}

                                {/*</div>*/}
                                {/*<div className={classNames(classes.sliderWrapper, classes.sliderWrapper_3)}>*/}
                                {/*    <div>*/}
                                {/*        <img src="./images/classic.jpg" alt="style">*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <img src="./images/english.jpg" alt="style">*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <img src="./images/provance.jpg" alt="style">*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <img src="./images/art-deco.jpg" alt="style">*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>

                        <div className={classes.calcSection}>
                            <label
                                className={classNames(classes.checkboxWrapper, classes.titleBold, classes.sectionTitle, classes.sectionTitleVerticalCenter)}>
                                <span className={classes.title__inline}>Площадь квартиры:</span>
                                <input type="number" min="0" max="200" value="25" id="squareInput"
                                       className={classNames(classes.title__inline, classes.inputShort)}/>
                                <span className={classes.title__inline}>м²</span>
                            </label>
                            <input type="range" id="square-range" className={classes.rangeInput} min="0" max="200" value="25"
                                   step="1"/>
                        </div>


                        <div className={classes.calcPrice}>
                            <div className={classes.calcPriceTitle}>Стоимость визуализации:</div>
                            <div className={classes.calcPriceValue}>
                                <span id="totalPrice">0</span>
                                рублей
                            </div>
                        </div>
                    </form>
                </div>
            </main>

            <footer className={classNames(classes.footer, classes.footerInner)}>
                <div className={classes.container}>
                    <p className={classes.footerText}>Александра Генина <a href="mailto:alex3101kushnir@gmail.com"
                                                                    target="_blank" rel="noreferrer">alex3101kushnir@gmail.com</a></p>
                </div>
            </footer>
        </div>

    );
};

export default Calc;