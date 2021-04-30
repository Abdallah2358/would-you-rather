const Choice = (props) => {
    return (
        <div class="input-group">
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <input type="radio" aria-label="Radio button for following text input" />
                    <label className='mx-3'>{props.ans}</label>
                </div>
            </div>
        </div>
    )
}

export default Choice;