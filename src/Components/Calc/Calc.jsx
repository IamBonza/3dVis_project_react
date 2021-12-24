import React, {useContext, useEffect, useState} from 'react';
import classes from './Calc.module.css';
import {AuthContext} from '../../context/context';
import Button from '../Buttton/Button';
import {stylesRadioBtns} from '../../databases/stylesRadioBtns'


const Calc = () => {
    const {isAuth, setIsVisible} = useContext(AuthContext);
    const [radio, setRadio] = useState(400)
    const [range, setRange] = useState(25)
    const [orderCount, setOrderCount] = useState(1)

    useEffect( () => {
        if(!localStorage.getItem('orders')) {
            localStorage.setItem('orders', JSON.stringify([]) )
        }
    })


    function sendOrderHandler(e) {
        e.preventDefault()
        const selectedStyle = stylesRadioBtns.find(elem => elem.price === Number(radio))
        // localStorage.setItem(`Order ${orderCount}` ,`Площадь квартиры: ${range} м². Стили: ${selectedStyle.style}`)
        console.log(`Order ${orderCount}` ,`Площадь квартиры: ${range} м². Стили: ${selectedStyle.style}`)
        const order = `Order ${orderCount}. Площадь квартиры: ${range} м². Стили: ${selectedStyle.style}`
        const orderList = JSON.parse(localStorage.getItem('orders'))
        const newOrderList = [...orderList, order]
        console.log(newOrderList)
        localStorage.setItem('orders', JSON.stringify(newOrderList) )
        setOrderCount(prevState => prevState + 1)
    }

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
            <form className={classes.formWrapper} onSubmit={sendOrderHandler}>
                <h1 className={classes.fromTitle}>Калькулятор 3d-визуализации</h1>
                <div className={classes.radioBtnsContainer}>
                    <h2 className={classes.radioBtnsContainer__title}>Стиль дизайна интерьера</h2>
                    {stylesRadioBtns.map((elem)=> {
                        return (
                            <label className={classes.radioBtnBlock} key={elem.style}>
                                <input
                                    type='radio'
                                    className={classes.radioBtnBlock__radioBtn}
                                    name={'style'}
                                    checked={Number(radio) === elem.price}
                                    value={elem.price}
                                    id={'style'}
                                    onChange={(e) => {setRadio(e.target.value)}}
                                />
                                <div className={classes.radioBtnBlock__title}>
                                    {elem.style}
                                    <span className={classes.radioBtnBlock__titlePrices}>
                                        Базовая цена: 1 м² = {elem.price} рублей
                                    </span>
                                </div>
                            </label>
                        )
                    })}
                </div>

                <div className={classes.squareMetersContainer}>
                    <label className={classes.squareMeters__inputNumbersContainer}>
                        <span>Площадь квартиры:</span>
                        <input
                            type='number'
                            className={classes.squareMeters__inputNumbers}
                            min='0' max='200'
                            value={range}
                            onChange={(e) => setRange(e.target.value)}
                        />
                        <span>м²</span>
                    </label>
                    <input
                        type='range'
                        className={classes.squareMeters__inputRange}
                        min='0' max='200' step='1'
                        value={range}
                        onChange={(e) => setRange(e.target.value)}
                    />
                </div>

                <div className={classes.totalPriceContainer}>
                    <div className="totalPriceSection">
                        <p className={classes.totalPriceSection__title}>Стоимость визуализации:</p>
                        <span className={classes.totalPriceSection__total}>{radio * range} рублей</span>
                    </div>
                    <Button type={'submit'}>Отправить заказ</Button>
                </div>
            </form>
        </>
    )

};

export default Calc;


