import { StyledBlogBox, StyledReadMore } from "./styled";

const BlogBox = () => {
    return (
        <StyledBlogBox>
            <img src="https://sm.ign.com/t/ign_in/news/j/jack-black/jack-black-praises-hbos-the-last-of-us-wants-red-dead-redemp_5f2a.1280.jpg" alt="testimgps5" />
            <div>
                <div>
                    <p> 17 MAY 2024</p>
                </div>
                <p>
                    Uncovering The beauty benefits of red dead redemption.
                </p>
                <StyledReadMore to='/'>Read More &gt;</StyledReadMore>
            </div>
        </StyledBlogBox>
    )   
}

export default BlogBox;