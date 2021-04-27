import { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {

    render() {

        return (
            <div>
                home
            </div>
        );

    }


}
function mapStateToProps({questions , authUser}) {
        return {
            
        }
}

export default connect()(Home);