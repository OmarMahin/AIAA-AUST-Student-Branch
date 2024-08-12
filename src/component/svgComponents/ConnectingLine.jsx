import React from "react"

const ConnectingLine = ({ className, children }) => {
	return (
		<div className={`lg:w-40 w-32 h-fit ${className} z-10 `}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='217'
				height='178'
				viewBox='0 0 217 178'
				fill='none'
                className='w-full opacity-0'
                id='connecting-line'
			>
				<path
					d='M102.5 173.5C134.167 180.333 184.964 173.5 208 128.5C218.494 108 215.404 82 208 64.5C200.596 47 178 24.5 126.5 36C66.5 49.3981 20 17.5 1 1.5'
					stroke='#BABABA'
					stroke-width='3'
				/>
			</svg>
			{children}
		</div>
	)
}

export default ConnectingLine
