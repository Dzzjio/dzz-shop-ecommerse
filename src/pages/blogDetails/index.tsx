import SecondSection from "./secondSection"
import { BlogDetailsPageContainer } from "./styled"
import BDThirdSection from "./thirdSection"
import BDTopSection from "./topSection"

const BlogDetailsPage = () => {
    return (
        <BlogDetailsPageContainer>
            <BDTopSection />
            <SecondSection />
            <BDThirdSection />
        </BlogDetailsPageContainer>
    )
}

export default BlogDetailsPage