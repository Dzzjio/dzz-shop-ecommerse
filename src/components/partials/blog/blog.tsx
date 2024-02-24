import BlogBox from "../blogBox/blogBox";
import { StyledBlogBoxContainer } from "./styled";

const BlogContainer = () => {
    return (
        <StyledBlogBoxContainer>
            <BlogBox />
            <BlogBox />
            <BlogBox />
            <BlogBox />
        </StyledBlogBoxContainer>
    )
}

export default BlogContainer;