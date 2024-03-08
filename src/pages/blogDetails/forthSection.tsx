import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StyledForthSection } from "./styled"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import fb from '../../assets/images/facecbook.png'
import lkdn from '../../assets/images/linekdin.png'
import ig from '../../assets/images/instagram.png'
import tw from '../../assets/images/twitter.png'
import worker from '../../assets/images/worker.jpg'
import { useState } from "react"

const BDForthSection = () => {

    const [input1Value, setInput1Value] = useState<string>('');
    const [input2Value, setInput2Value] = useState<string>('');
    const [textareaValue, setTextareaValue] = useState<string>('');
  
    const handleInput1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput1Value(e.target.value);
    };
  
    const handleInput2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput2Value(e.target.value);
    };
  
    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTextareaValue(e.target.value);
    };

    return (
        <StyledForthSection>
            <h3>Additional Information</h3>
            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="forth-section-1-div">
                <div>
                    <span><FontAwesomeIcon icon={faCheck}/></span>
                    <p>Good Materials and Eco-Friendly Fabrics</p>
                </div>
                <div>
                    <span><FontAwesomeIcon icon={faCheck}/></span>
                    <p>Wardrobes Curating Timeless Style</p>
                </div>
                <div>
                    <span><FontAwesomeIcon icon={faCheck}/></span>
                    <p>Promoting Fair Labor Practices in Fashion</p>
                </div>
                <div>
                    <span><FontAwesomeIcon icon={faCheck}/></span>
                    <p>Transparency in Fashion Supply Chains</p>
                </div>
                <div>
                    <span><FontAwesomeIcon icon={faCheck}/></span>
                    <p>The Three R's in Sustainable Fashion</p>
                </div>
                <div>
                    <span><FontAwesomeIcon icon={faCheck}/></span>
                    <p>Vegan Fashion Alternatives</p>
                </div>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <div className="forth-section-2-div">
                <div>
                    <h3>Tags:</h3>
                    <p>Mats</p>
                    <p>Accessories</p>
                    <p>Bottles</p>
                    <p>Trackers</p>
                    <p>Bags</p>
                </div>
                <div>
                    <div><img src={fb} alt="fb" /></div>
                    <div><img src={lkdn} alt="lkdn" /></div>
                    <div><img src={ig} alt="ig" /></div>
                    <div><img src={tw} alt="tw" /></div>
                </div>
            </div>
            <div className="comments">
                <h3>Comments (2)</h3>
                <p>There are many variations of passages of Lorem Ipsum available.</p>
                <div>
                    <img src={worker} alt="worker" />
                    <div>
                        <div>
                            <h4>Monsur Rahman Lito</h4>
                            <button>Reply</button>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    </div>
                </div>
                <div>
                    <img src={worker} alt="worker" />
                    <div>
                        <div>
                            <h4>Monsur Rahman Lito</h4>
                            <button>Reply</button>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    </div>
                </div>
            </div>
            <div className="good-comments">
                <h3>Good Comments</h3>
                <p>There are many variations of passages of Lorem Ipsum available.</p>
                <form></form>
            </div>

            <form>
                <div>
                    <input placeholder="Author" type="text" value={input1Value} onChange={handleInput1Change} />
                    <input placeholder="Email" type="text" value={input2Value} onChange={handleInput2Change} />
                </div>
                <textarea placeholder="Type Comment Here" value={textareaValue} onChange={handleTextareaChange}></textarea>
                <button>Subscribe</button>
            </form>
        </StyledForthSection>
    )
}

export default BDForthSection