import SecondSection from "./secondSection"
import { BlogDetailsPageContainer } from "./styled"
import BDTopSection from "./topSection"

const BlogDetailsPage = () => {
    return (
        <BlogDetailsPageContainer>
            <BDTopSection />
            <SecondSection />
        </BlogDetailsPageContainer>
    )
}

export default BlogDetailsPage