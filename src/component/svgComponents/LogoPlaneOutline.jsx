import React, { useCallback, useRef } from "react"

const LogoPlaneOutline = ({className, getRef}) => {
	const planeRef = useCallback((e) => {
		getRef(e)
	})

	return (
		<div className={`w-fit h-14 ${className} z-20 `} ref={planeRef}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='127'
				height='67'
				viewBox='0 0 127 67'
				fill='none'
				className="h-full opacity-0"
				id='logo-plane-outline'
			>
				<path
					d='M2 1.39746L48.6077 65.4937L79.9802 33.9178L2 1.39746ZM2 1.39746L97.4799 27.0472L93.3456 53.0189L84.5155 31.6318L2 1.39746ZM2 1.39746L125.011 11.7076L98.4449 24.4482L2 1.39746ZM74.4966 43.9944L81.9323 35.5339L91.0774 53.9997L74.4966 43.9944Z'
					stroke='white'
				/>
			</svg>
		</div>
	)
}

export default LogoPlaneOutline
