type AnalyticsValue = string | number | boolean

type AnalyticsWindow = Window & {
  gtag?: (command: 'event', eventName: string, parameters?: Record<string, AnalyticsValue>) => void
}

export function trackEvent(eventName: string, parameters?: Record<string, AnalyticsValue>) {
  if (typeof window === 'undefined') return
  ;(window as AnalyticsWindow).gtag?.('event', eventName, parameters)
}
