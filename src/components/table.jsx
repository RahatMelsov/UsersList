import React from 'react'
import ModalExampleCloseIcon from './modal'
import 'semantic-ui-css/semantic.min.css'
import { Table} from 'semantic-ui-react'

const TableList = (props) => {
    debugger;
    return (
        <Table.Body>
           { props.users.map((u)=> {
              return (
                <Table.Row>
                  <Table.Cell>{u.named}</Table.Cell>
                  <Table.Cell>{u.lastName}</Table.Cell>
                  <Table.Cell>{u.DateOfBirth.getDate()+ '.'+ u.DateOfBirth.getMonth() + '.' + u.DateOfBirth.getFullYear()}</Table.Cell>
                  <Table.Cell>{u.city} from {u.cowntry}</Table.Cell>
                  <Table.Cell><ModalExampleCloseIcon Users = {props.users} user={u} setUsers={props.setUsers}/>
                  </Table.Cell>
                </Table.Row>
              )
            })}  
        </Table.Body>
    )
}

export default TableList;