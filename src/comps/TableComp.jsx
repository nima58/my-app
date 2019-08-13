import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class TableComp extends React.Component {
  constructor(props){
    super(props);
    console.log('TableComp log -> ' + this.props.items);
    this.State = {
      items : props.items
    };

  }
  render(){

    const columns = [
    {
      Header: 'ID',
      accessor: 'id'
    },
    {
      Header: 'Baluchi',
      accessor: 'bcc'
    },{
      Header: 'English',
      accessor: 'eng'
    },{
      Header: 'Farsi',
      accessor: 'fa'
    },{
      Header: 'Urdu',
      accessor: 'ur'
    },{
      Header: 'POS',
      accessor: 'pos'
    },{
      Header: 'Latin Sci',
      accessor: 'bcc_latin_sci'
    },{
      Header: 'Latin Com',
      accessor: 'bcc_latin_com'
    }
  ]
    return(
      <div>
        <ReactTable
              data={this.props.items}
              columns={columns}
              defaultPageSize = {3}
              pageSizeOptions = {[3, 6]}
        />
      </div>
    );
  }
}
export default TableComp;
