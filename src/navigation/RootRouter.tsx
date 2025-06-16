import { Route, Routes } from "react-router";
import { Suspense, lazy } from "react";
import Loader from "../components/shared/loader/Loader";

const Participants = lazy(() => import('../components/participants/Participants'));
// const HomeScreen = lazy(() => import('../screens/home/HomeScreen'));
// const TorScreen = lazy(() => import('../screens/tor/TorScreen'));
// const AuraScreen = lazy(() => import('../screens/aura/AuraScreen'));
// const OasisScreen = lazy(() => import('../screens/oasis/OasisScreen'));
// const TermsScreen = lazy(() => import('../screens/terms/TermsScreen'));
// const DemoScreen = lazy(() => import('../screens/demo/DemoScreen'));

const RootRouter = () => {
    
    return (
        <Routes>
            <Route 
                path="/medellin" 
                element={
                    <Suspense fallback={<Loader/>}>
                        <Participants/>
                    </Suspense>
                }
            />
            <Route 
                path="/bogota" 
                element={
                    <Suspense fallback={<Loader/>}>
                        <Participants/>
                    </Suspense>
                }
            />
        </Routes>
    );
}

export default RootRouter;