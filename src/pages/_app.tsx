import { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { pageview } from  '../lib/gtag';
import { useEffect } from 'react';

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    // Google Analyticsをページ遷移時にも対応させる
    const router = useRouter();
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles != null && jssStyles.parentElement != null) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
        const handleRouteChange = (url: string) => {
            pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    return (
        <Component {...pageProps} />
    );
};

export default CustomApp;