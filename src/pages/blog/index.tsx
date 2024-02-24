import BlogContainer from "components/partials/blog/blog";
import { StyledBlogPage } from "./styled";

const BlogPage = () => {
    return (
        <StyledBlogPage>
            <BlogContainer />
            <button> Load More</button>
        </StyledBlogPage>
    )
}

export default BlogPage;