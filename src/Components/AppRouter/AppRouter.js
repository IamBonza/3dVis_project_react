import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import {AppContext} from '../../context/appContext';

const AppRouter = () => {

    const {routes} = useContext(AppContext)


    return (
        <>
            <Routes>
                {routes.map((route) => {
                    return (
                        <Route key={route.path}
                               path={route.path}
                               element={route.element}
                        />
                    )
                })}
            </Routes>
        </>
    );
};

export default AppRouter;