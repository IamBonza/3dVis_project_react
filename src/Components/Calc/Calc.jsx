import React, {useContext} from 'react';
import classes from './Calc.module.css';
import {AuthContext} from '../../context/context';
import Button from '../Buttton/Button';
import {stylesRadioBtns} from '../../databases/stylesRadioBtns'


const Calc = () => {

    const {isAuth, setIsVisible} = useContext(AuthContext);

    if (!isAuth) {
        return (
            <div className={classes.notAuth}>
                <h1 >Страница доступна только авторизованным пользователям</h1>
                <Button onClick={() => setIsVisible(true)}>Авторизоваться</Button>
            </div>
        )
    }

    return (
        <>
            <form className={classes.formWrapper}>
                <h1 className={classes.fromTitle}>Калькулятор 3d-визуализации</h1>
                <div className={classes.radioBtnsContainer}>
                    <h2 className={classes.radioBtnsContainer__title}>Стиль дизайна интерьера</h2>
                    {stylesRadioBtns.map((elem)=> {
                        return (
                            <label className={classes.radioBtnBlock} key={elem.style}>
                                <input type='radio' className={classes.radioBtnBlock__radioBtn} name={'style'} value={elem.price} id={'style'}/>
                                <div className={classes.radioBtnBlock__title}>
                                    {elem.style}
                                    <span className={classes.radioBtnBlock__titlePrices}>Базовая цена: 1 м² = {elem.price} рублей</span>
                                </div>
                            </label>
                            // </div>
                        )
                    })}
                </div>

                <div className={classes.squareMetersContainer}>
                    <label className={classes.squareMeters__inputNumbersContainer}>
                        <span>Площадь квартиры:</span>
                        <input type='number' className={classes.squareMeters__inputNumbers} min='0' max='200' value='25'/>
                        <span>м²</span>
                    </label>
                    <input type='range' className={classes.squareMeters__inputRange} min='0' max='200' value='25' step='1'/>
                </div>

                <div className={classes.totalPriceContainer}>
                    <div className="totalPriceSection">
                        <p className={classes.totalPriceSection__title}>Стоимость визуализации:</p>
                        <span className={classes.totalPriceSection__total}>10 000 рублей</span>
                    </div>
                    <Button type={'submit'}>Отправить заказ</Button>
                </div>
            </form>
        </>
    )

};

export default Calc;


