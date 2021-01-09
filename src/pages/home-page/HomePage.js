import React from 'react';
import { useLocation } from 'react-router-dom';
import ScrollReveal from '../../helpers/ScrollReveal';
import LayoutDefault from '../../layouts/HomePageLayout';
import Home from './HomeView';


const HomePage = () => {
    const childRef = React.useRef();
    let location = useLocation();

    React.useEffect(() => {
        document.body.classList.add('is-loaded')
        childRef.current.init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <ScrollReveal
            ref={childRef}
            children={() => (
                <LayoutDefault>
                <Home />
                </LayoutDefault>
            )} 
        />
    );
};

export default HomePage;