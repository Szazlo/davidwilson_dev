'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import PostHogPageView from '@/components/providers/PHPageView';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY || '', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || '',
  })
}

export default function PHProvider({ children }: { children: React.ReactNode }) {
    return (
        <PostHogProvider client={posthog}>
            <PostHogPageView />
            {children}
        </PostHogProvider>
    )
}