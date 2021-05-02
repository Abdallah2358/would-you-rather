
import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { handleAddQuestion } from "../Actions/shared";

class CreateQuestion extends Component {

     test = (e) =>{
        e.preventDefault()
        const {dispatch}=this.props
        const op1 = e.target[0].value;
        const op2 = e.target[1].value
        dispatch( handleAddQuestion(op1,op2))
        console.log( op1 , op2  );
    }
    render() {
        return (
            <div className=' row d-flex justify-content-center ' >
                <div className="card my-5 w-75">
                    <div className="card-body">
                        <h1>Would You Rather ?</h1>
                        <Form onSubmit = {this.test}>
                            <Form.Group >
                                <Form.Label>Option one</Form.Label>
                                <Form.Control type="text" placeholder="Enter option one" />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Option two</Form.Label>
                                <Form.Control type="text" placeholder="Enter option two" />
                            </Form.Group>


                            <Button variant="primary" className= 'my-2 ' type="submit">
                                Submit </Button>
                        </Form>

                    </div>
                </div>
            </div>
        );
    }
}



export default connect()(CreateQuestion);