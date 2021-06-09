import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React, { useState } from 'react'
import { Table } from 'semantic-ui-react'
import TableList from './components/table'

function App() {
  const Users = [
    {
      named: "Oliver ",
      lastName: 'Manson',
      DateOfBirth: new Date('1995-12-17'),
      city: 'Liverpool',
      cowntry: 'GreatBrit',
      id: 0,
      contract: {
        numberContract: 12,
        dateContract: new Date('1995-12-17'),
        company: 'Central'
      }
    
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


  window.User = Users
  window.userrs = users;

  return (
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>First name</Table.HeaderCell>
          <Table.HeaderCell>Last name</Table.HeaderCell>
          <Table.HeaderCell>Birth day</Table.HeaderCell>
          <Table.HeaderCell>Location</Table.HeaderCell>
          <Table.HeaderCell>Contract</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <TableList users={users} setUsers={setUsers} />
    </Table>
  );
}

export default App;
