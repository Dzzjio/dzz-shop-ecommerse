import BDForthSection from "./forthSection"
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
            <BDForthSection />
        </BlogDetailsPageContainer>
    )
}

export default BlogDetailsPage