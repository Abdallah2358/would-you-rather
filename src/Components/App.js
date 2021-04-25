import React, { Component } from 'react';
class App extends Component{
  render() {
    return (
      <div className='container'>
        <div className="mb-5 w-25 ">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label className="form-label">Example textarea</label>
          <textarea className="form-control " id="exampleFormControlTextarea1" ></textarea>
        </div>
        <div className="mb-2">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label className="form-label">Example textarea</label>
          <textarea className="form-control " id="exampleFormControlTextarea1" ></textarea>
        </div>
      </div>
    );
  } 

}

export default App;
