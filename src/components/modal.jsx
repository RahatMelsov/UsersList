import React, { useState } from 'react'
import { Button, Header, Icon, Modal, Form, Input } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

function ModalExampleCloseIcon(props) {
    const [open, setOpen] = useState(false)
    const [mine, setMine] = useState({ ...props.user })
    const [startDate, setStartDate] = useState(new Date());


    return (
        <Modal
            closeIcon
            open={open}
            trigger={<Button icon>
                <Icon name='pencil alternate' />
            </Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header icon='archive' content='Archive Old Messages' />
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <input id="name" value={mine.named}
                            onChange={event => setMine(prevMine => { return { ...prevMine, named: event.target.value } })} />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input id="lastName" value={mine.lastName} onChange={event => setMine(prevMine => { return { ...prevMine, lastName: event.target.value } })} />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input id="city" value={mine.city} onChange={event => setMine(prevMine => { return { ...prevMine, city: event.target.value } })} />
                    </Form.Field>
                    <Form.Field>
                        <label>Cowntry</label>
                        <input id="cowntry" value={mine.cowntry} onChange={event => setMine(prevMine => { return { ...prevMine, cowntry: event.target.value } })} />
                    </Form.Field>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Birth day</label>
                            <DatePicker value={moment(mine.DateOfBirth).format('L')}
                                selected={startDate}
                                onChange={(date) => {
                                    setStartDate(date)
                                    return setMine(prevMine => { return { ...prevMine, DateOfBirth: startDate } })
                                }} />
                        </Form.Field>
                    </Form.Group>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
        </Button>
                <Button color='green' onClick={() => {
                    props.setUsers(prevState => {
                        return (prevState.map(
                            obj => (obj.id === props.user.id ? Object.assign(obj, mine) : obj)
                        ))
                    });
                    setOpen(false)
                }}>
                    <Icon name='checkmark' /> Yes
        </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalExampleCloseIcon;