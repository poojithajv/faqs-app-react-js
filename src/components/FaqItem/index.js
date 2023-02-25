// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isIconClicked: false}

  onClickingPlusMinusIcon = () => {
    const {isIconClicked} = this.state
    this.setState({isIconClicked: !isIconClicked})
  }

  render() {
    const {isIconClicked} = this.state
    const {faqDetails} = this.props
    const {id, questionText, answerText} = faqDetails
    const imgUrl = isIconClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isIconClicked ? 'minus' : 'plus'

    return (
      <li key={id} className="list-item">
        <div className="faq-container">
          <h1 className="question">{questionText}</h1>
          <button
            type="button"
            className="plus-minus-button"
            onClick={this.onClickingPlusMinusIcon}
          >
            <img src={imgUrl} alt={altText} className="plus-minus-image" />
          </button>
        </div>
        {isIconClicked && <hr className="separator" />}
        {isIconClicked && <p className="answer">{answerText}</p>}
      </li>
    )
  }
}
export default FaqItem
