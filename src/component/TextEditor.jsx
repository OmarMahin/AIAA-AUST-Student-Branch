import React, { useCallback, useEffect, useRef, useState } from "react"
import Flex from "./Flex"
import Container from "./Container"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import CustomToolbar from "./CustomToolbar"

const TextEditor = ({ value, onChange }) => {
	const modules = {
		toolbar: {
			container: "#toolbar",
		},
	}

	return (
		<div className='border-none text-lg text-font-color'>
			<CustomToolbar></CustomToolbar>
			<ReactQuill
				theme='snow'
				value = {value}
				onChange={(e) => {
					onChange(e)
				}}
				modules={modules}
			/>
		</div>
	)
}

export default TextEditor
