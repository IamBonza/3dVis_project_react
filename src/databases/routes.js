import Main from '../Components/Main/Main';
import ExamplesList from '../Components/ExamplesList/ExamplesList';
import FullExample from '../Components/FullExample/FullExample';
import FavoritesList from '../Components/Favorites/FavoritesList';
import Calc from '../Components/Calc/Calc';

export const routes = [
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/examples",
        element: <ExamplesList/>,
    },
    {
        path: "/examples/:id",
        element: <FullExample/>,
    },
    {
        path: "/favorites",
        element: <FavoritesList/>,
    }, {
        path: "/calc",
        element: <Calc />,
    },
]