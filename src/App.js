import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React, { useState } from 'react'
import { Table, Form, Segment } from 'semantic-ui-react'
import TableList from './components/table'
import ListModal from './components/listModal'
import moment from 'moment';

function App() {
  debugger;
  const contract = {
    name: "Wal-Mart Stores", 
    contactDate: '12/12/12', 
    contractNumber: 1241343
  }
  const Users = [
    {
      named: "Oliver ",
      lastName: 'Manson',
      DateOfBirth: new Date('1995-12-17'),
      city: 'Liverpool',
      cowntry: 'GreatBrit',
      id: 0,
    },
    {
      named: "Harry ",
      lastName: 'Jackson',
      DateOfBirth: new Date('1995-12-17'),
      city: 'Almaty',
      cowntry: 'Kazakhstan',
      id: 1,
    },
    {
      named: "Jacob ",
      lastName: 'Grayson',
      DateOfBirth: new Date('1995-12-17'),
      city: 'Almaty',
      cowntry: 'Kazakhstan',
      id: 2,
    }
  ]

  const [users, setUsers] = useState(Users)
  const [contracts, setContract] = useState(contract)

  window.User = Users
  window.userrs = users;

  return (
    <div>
      <Table celled striped>
      <Table.Header class='adaptive'>
        <Table.Row>
          <Table.HeaderCell>First name</Table.HeaderCell>
          <Table.HeaderCell>Last name</Table.HeaderCell>
          <Table.HeaderCell>Birth day</Table.HeaderCell>
          <Table.HeaderCell>Location</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <TableList users={users} setUsers={setUsers} />
    </Table>
    <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' value={contracts.name} />
          <Form.Input fluid label='Last name' value= {contracts.contractNumber} />
          <Form.Input fluid label='Last name' value={moment(contracts.dateContract).format('L')} />
          <Form.Button size='tiny'><ListModal contracts = {contracts} setContract={setContract}/></Form.Button>
        </Form.Group>
        </Form>
    </div>
    
  );
}

export default App;
