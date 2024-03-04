import React, { useState } from 'react';
import BlogContent from 'components/partials/blog/blog';
import { StyledBlogPage } from './styled';

const BlogPage: React.FC = () => {
    const [visibleBlogs, setVisibleBlogs] = useState<number>(4);

    const handleLoadMore = (): void => {
        setVisibleBlogs(prevVisibleBlogs => prevVisibleBlogs + 4);
    };

    return (
        <StyledBlogPage>
            <BlogContent visibleBlogs={visibleBlogs} />
            <button onClick={handleLoadMore}> Load More</button>
        </StyledBlogPage>
    )
}

export default BlogPage;