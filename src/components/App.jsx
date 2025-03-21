import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));

function App() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </>
 )
};

export default App;