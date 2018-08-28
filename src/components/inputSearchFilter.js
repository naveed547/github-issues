import React, { Component } from 'react';

class InputSearchFilter extends Component {
  constructor(props) {
    super(props);    
  }
  render() {
    console.log(this.props);
    if (this.props.issues && this.props.issues.items && this.props.issues.items.length) {
      return (
        <form id="searchForm" onSubmit={(e) => {
          e.preventDefault();
        }}>
          <input type="search" className="form-control" name="search" onChange={(e) => {
          if(e.target.value.length>4){
            this.props.searchIssues(e.target.value)
          }else {
             this.props.searchIssues('')
          }
        }}  />
        </form>
      );
    } else {
      return ('')
    }
  }
}

export default InputSearchFilter;