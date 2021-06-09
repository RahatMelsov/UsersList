import React from 'react'
import ModalExampleCloseIcon from './modal'
import 'semantic-ui-css/semantic.min.css'
import { Table } from 'semantic-ui-react'
import moment from 'moment';
import { List } from 'semantic-ui-react'

const TableList = (props) => {
  return (
    <Table.Body>
      { props.users.map((u) => {
        return (
          <Table.Row>
            <Table.Cell>{u.named}</Table.Cell>
            <Table.Cell>{u.lastName}</Table.Cell>
            <Table.Cell>{moment(u.DateOfBirth).format('L')}</Table.Cell>
            <Table.Cell>{u.city} from {u.cowntry}</Table.Cell>
            <Table.Cell>
              <List>
                <List.Item>
                  <List.Icon name='users' />
                  <List.Content>Semantic UI</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='marker' />
                  <List.Content>New York, NY</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='marker' />
                  <List.Content>New York, NY</List.Content>
                </List.Item>
              </List>
            </Table.Cell>
            <Table.Cell><ModalExampleCloseIcon Users={props.users} user={u} setUsers={props.setUsers} />
            </Table.Cell>
          </Table.Row>
        )
      })}
    </Table.Body>
  )
}

export default TableList;