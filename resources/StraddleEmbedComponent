import React, { useEffect } from 'react'

interface StraddleEmbedComponentProps {
  platformId: string;
  maxWidth?: 'narrow' | 'medium' | 'wide' | 'full' | 'auto';
}

const StraddleEmbedComponent: React.FC<StraddleEmbedComponentProps> = ({
  platformId,
  maxWidth = 'full'
}) => {
  useEffect(() => {
    const embedScriptSrc = 'https://forms.straddle.io/embed.js'
    const isDebugMode = false

    const loadEmbeds = () => {
      try {
        if (window.Straddle && typeof window.Straddle.loadEmbeds === 'function') {
          window.Straddle.loadEmbeds()
        } else {
          const iframes = document.querySelectorAll(
            'iframe[data-straddle-src]:not([src])'
          )

          if (typeof iframes.forEach === 'function') {
            iframes.forEach((iframe) => {
              if (isDebugMode) {
                console.log('Straddle: Setting src for iframe:', iframe)
              }
              const src =
                iframe.dataset?.straddleSrc ||
                iframe.getAttribute('data-straddle-src') ||
                ''
              iframe.src = src
            })
          } else {
            for (let i = 0; i < iframes.length; i++) {
              const iframe = iframes[i]
              if (isDebugMode) {
                console.log('Straddle: Setting src for iframe:', iframe)
              }
              const src = iframe.getAttribute('data-straddle-src') || ''
              iframe.src = src
            }
          }
        }
      } catch (error) {
        console.error('Straddle: Failed to load embeds. Error:', error)
      }
    }

    const existingScript = document.querySelector(
      `script[src="${embedScriptSrc}"]`
    )

    const handleScriptError = () => {
      console.error('Failed to load the Straddle embed script.')
      loadEmbeds()
    }

    if (window.Straddle && typeof window.Straddle.loadEmbeds === 'function') {
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
  }, [platformId])

  const widthClass = {
    narrow: 'max-w-sm',
    medium: 'max-w-3xl', // Approximately 800px
    wide: 'max-w-5xl',
    full: 'w-full',
    auto: ''
  }[maxWidth]

  return (
    <div className="flex justify-center w-full">
      <div className={`w-full ${widthClass}`}>
        <iframe
          data-straddle-src={`https://go.straddle.io/account?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&embed=1&platforms.id=${platformId}`}
          loading="lazy"
          width="100%"
          style={{ minHeight: '500px' }}
          frameBorder="0"
          title="Activate your Straddle account"
        ></iframe>
      </div>
    </div>
  )
}

export default StraddleEmbedComponent
