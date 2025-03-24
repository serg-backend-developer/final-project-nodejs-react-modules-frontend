import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));

function App() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<HomePage />} /> {/* Вкладений маршрут */}
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
 )
};

export default App;