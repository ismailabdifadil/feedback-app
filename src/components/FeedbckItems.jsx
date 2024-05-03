import FeedbackItem from "./FeedbackItem"

const FeedbckItems = ({feedback}) => {
  return (
    <div>
      {feedback.map((item)=>{
        <FeedbackItem item={item}/>
      })}

    </div>
  )
}

export default FeedbckItems
