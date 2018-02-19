import React from 'react';
import Modal from './Modal';

export class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      listItems: ['Veggies', 'Bread', 'Fruits', 'Bananas'],

    }
  }

  addItem = (e) => {
    e.preventDefault();

    const { listItems } = this.state,
          newItem = this.textInput.value;

    if (newItem) {
      this.setState({
        listItems: [...listItems, newItem]
      });
    } else {
      let target = $('#alertPlaceHolder');
      target.hide();
      target.append(
        "<div id='alert-empty' class='alert alert-danger alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Warning!</strong> List item may not be empty.</div>"
      )
      target.fadeIn();
      setTimeout(() => {
          $('#alert-empty').fadeOut(
            () => $('#alert-empty').remove()
          );
        },
        3000);
    }

    this.form.reset();
  }

  clearList = () => {
    this.setState({
      listItems: []
    });
  }

  deleteElement = (key) => {
    const { listItems } = this.state;

    listItems.splice(key, 1);

    this.setState({
      listItems: listItems
    })
  }

  render(){
    const { listItems } = this.state;
    return (
      <div className="container">
        <h2>Shopping list</h2>

        <form className="form-inline" onSubmit={(e) => {this.addItem(e)}} ref={ (input) => this.form = input}>
          <div className="form-group">
            <label className="sr-only" htmlFor="newItemOutput">Add New Item</label>
            <input className="form-control" type="text" placeholder="Bread" id="newItemOutput" ref={ (input) => { this.textInput = input; }}/>
          </div>
          <button className="btn btn-primary" type="submit">Create</button>
        </form>

        <div id="alertPlaceHolder"></div>
         <div className="row table-container">
           <table className="table table-hover">
             <thead>
               <tr>
                 <th>#</th><th>Item</th><th>Action</th>
               </tr>
             </thead>
             <tbody>
               {
                 listItems.map((item, key) => {
                   return <tr key={key}><th scope="row">{key + 1}</th><td>{ item }</td><td><button onClick={ (e) => this.deleteElement(key)} type="button" className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></td></tr>
                 })
               }
             </tbody>
           </table>
           <button data-toggle="modal" data-target="#myModal" className="btn btn-default clear-list">Clear list</button>
           <Modal clearList={this.clearList.bind(this)}/>
         </div>
        </div>
    )
  }
}
