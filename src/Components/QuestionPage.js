import Question from './Question';
import {  useParams } from "react-router";

import { connect } from 'react-redux';

const QuestionPage = (props) => {
    const { id } = useParams();
    const { users, questions } = props
    if (!questions[id]) {
        return <div>
            <h3>Error 404  No match for <code>{`/question/${id}`}</code></h3>
        </div>
    }
    const author = questions[id].author
    const avatarURL = users[author].avatarURL

    return (
        <div className=' row d-flex justify-content-center my-5' >
            <div className="card" style={{ width: '70%', }}>
                <img src={avatarURL} className="card-img-top my-2 w-25" alt={author} />
                <Question isVoting={'true'} isAnswered={'false'} id={id} />
            </div>
        </div>
    );



}
function mapStateToProps({ users, questions }) {
    return {
        users, questions
    }
}

export default connect(mapStateToProps)(QuestionPage);