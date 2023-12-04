import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routing/Router';

const queryClient = new QueryClient()

const ReactQueryDevtoolsProduction = React.lazy(() =>
    import('@tanstack/react-query-devtools/build/lib/index.prod.js').then(
        (d) => ({
            default: d.ReactQueryDevtools,
        }),
    ),
)

function App() {
    const [showDevtools, setShowDevtools] = useState(false)

    React.useEffect(() => {
    // @ts-ignore
        window.toggleDevtools = () => setShowDevtools((old) => !old)
    }, [])
  
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen />
            {showDevtools && (
                <React.Suspense fallback={null}>
                    <ReactQueryDevtoolsProduction />
                </React.Suspense>
            )}
        </QueryClientProvider>
    );
}

export default App;
