import React from 'react'
import AnimatePage from "../component/AnimatePage"
import BlogComment from '../component/BlogComment'
import BlogContent from '../component/BlogContent'
import Container from '../component/Container'

const Swashplate_Blog = () => {
  return (
    <AnimatePage>
        <Container>
            <BlogContent content = {"HIbigi sdasdhahjsgd <<Title>>Hi<<Title>> dsawad"}></BlogContent>
            <BlogComment></BlogComment>
        </Container>
        
    </AnimatePage>
  )
}

export default Swashplate_Blog