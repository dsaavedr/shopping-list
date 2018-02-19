import React from 'react';

export default class Modal extends React.Component {
  render(){
    return (
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">Are you sure?</h4>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button onClick={ () => this.props.clearList()} type="button" data-dismiss="modal" className="btn btn-primary">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
