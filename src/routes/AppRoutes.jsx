import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Solutions from '../pages/Solutions';
import Services from '../pages/Services';
import QuimiCraft from '../pages/QuimiCraft';
import MoveCard from '../pages/MoveCard';
import FAQ from '../pages/FAQ';
import Contact from '../pages/Contact';
import PrivacyPolicy from '../pages/legal/PrivacyPolicy';
import TermsConditions from '../pages/legal/TermsConditions';
import NotFound from '../pages/NotFound';
import { ROUTES } from '../config/routes.config';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.HOME} element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path={ROUTES.ABOUT} element={<About />} />
                    <Route path={ROUTES.SOLUTIONS} element={<Solutions />} />
                    <Route path={ROUTES.SERVICES} element={<Services />} />
                    <Route path={ROUTES.QUIMICRAFT} element={<QuimiCraft />} />
                    <Route path={ROUTES.MOVECARD} element={<MoveCard />} />
                    <Route path={ROUTES.FAQ} element={<FAQ />} />
                    <Route path={ROUTES.CONTACT} element={<Contact />} />
                    <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
                    <Route path={ROUTES.TERMS_CONDITIONS} element={<TermsConditions />} />
                    <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
