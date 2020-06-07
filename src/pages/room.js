import React, { useEffect } from 'react'
import { Router } from '@reach/router'
import { navigate } from '@reach/router'
import Layout from '../components/layout'
import VideoDisplay from '../components/video-display'

const BounceToHome = () => {
    useEffect(() => {
        navigate('/', { replace: true });
    }, [])
    return null;
}
export default () => (
    <Layout>
        <Router>
            <VideoDisplay path="room/:roomID"> </VideoDisplay>
            <BounceToHome default />
        </Router>
    </Layout>
);
