import React, { useEffect } from 'react'

// Extend the Window interface for Straddle
declare global {
    interface Window {
        Tally?: {
            loadEmbeds: () => void
        }
    }
}

interface StraddleEmbedComponentProps {
    platformId: string
    env: string
    maxWidth?: 'narrow' | 'medium' | 'wide' | 'full' | 'auto'
}

const StraddleEmbedComponent: React.FC<StraddleEmbedComponentProps> = ({ platformId, env, maxWidth = 'full' }) => {
    useEffect(() => {
        if (platformId && env) {
            const embedScriptSrc = 'https://forms.straddle.io/embed.js'

            const loadEmbeds = () => {
                try {
                    if (window.Tally && typeof window.Tally.loadEmbeds === 'function') {
                        window.Tally.loadEmbeds()
                    } else {
                        const iframes = document.querySelectorAll('iframe[data-tally-src]:not([src])')

                        // Fallback: set iframe src directly if Straddle.loadEmbeds is not available
                        for (let i = 0; i < iframes.length; i++) {
                            const htmlIframe = iframes[i] as HTMLIFrameElement
                            const src = htmlIframe.dataset?.tallySrc || htmlIframe.getAttribute('data-tally-src') || ''
                            htmlIframe.src = src
                        }
                    }
                } catch (error) {
                    console.error('StraddleEmbedComponent: failed to load embeds. Error:', error)
                }
            }

            const existingScript = document.querySelector(`script[src="${embedScriptSrc}"]`)

            const handleScriptError = () => {
                console.error('StraddleEmbedComponent: failed to load the Tally embed script.')
                loadEmbeds()
            }

            if (window.Tally && typeof window.Tally.loadEmbeds === 'function') {
                loadEmbeds()
            } else if (!existingScript) {
                const script = document.createElement('script')
                script.src = embedScriptSrc
                script.async = true
                script.onload = loadEmbeds
                script.onerror = handleScriptError
                document.body.appendChild(script)
            } else {
                existingScript.addEventListener('load', loadEmbeds)
                existingScript.addEventListener('error', handleScriptError)
            }

            return () => {
                if (existingScript) {
                    existingScript.removeEventListener('load', loadEmbeds)
                    existingScript.removeEventListener('error', handleScriptError)
                }
            }
        } else {
            console.error('StraddleEmbedComponent: both platformId and env are required.')
        }
    }, [platformId, env])

    const widthClass = {
        narrow: 'max-w-sm',
        medium: 'max-w-3xl',
        wide: 'max-w-5xl',
        full: 'w-full',
        auto: '',
    }[maxWidth]

    return (
        <div className="flex justify-center w-full">
            <div className={`w-full ${widthClass}`}>
                <iframe
                    data-tally-src={`https://go.straddle.io/account?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&embed=1&platform.id=${platformId}&env=${env}`}
                    loading="lazy"
                    width="100%"
                    style={{ minHeight: '500px' }}
                    title="Activate your Straddle account"
                ></iframe>
            </div>
        </div>
    )
}

export default StraddleEmbedComponent
