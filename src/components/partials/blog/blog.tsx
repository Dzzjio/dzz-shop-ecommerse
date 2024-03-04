import React from 'react';
import BlogBox from '../blogBox/blogBox';
import { StyledBlogBoxContainer } from './styled';

interface BlogContentProps {
    visibleBlogs: number;
}

const BlogContent: React.FC<BlogContentProps> = ({ visibleBlogs }) => {
    const blogIndexes: number[] = Array.from({ length: visibleBlogs }, (_, index) => index);

    return (
        <StyledBlogBoxContainer>
            {blogIndexes.map(index => (
                <BlogBox key={index} />
            ))}
        </StyledBlogBoxContainer>
    )
}

export default BlogContent;