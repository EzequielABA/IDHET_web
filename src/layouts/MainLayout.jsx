import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Outlet } from 'react-router-dom';
import useScrollTop from '../hooks/useScrollTop';

const MainLayout = () => {
    useScrollTop();

    return (
        <div className="main-layout">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
