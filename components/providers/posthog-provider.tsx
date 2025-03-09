'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'
import PostHogPageView from './PHPageView'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        posthog.init('phc_E52Wqg32qIJQKjTKleXNWMaL7787sgRcEeDmGRP7nxW', {
            api_host: 'https://eu.i.posthog.com',
            capture_pageview: false // Disable automatic pageview capture, as we capture manually
        })
    }, [])

    return (
        <PHProvider client={posthog}>
            <PostHogPageView />
            {children}
        </PHProvider>
    )
}