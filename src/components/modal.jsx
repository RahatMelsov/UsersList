import React, { useEffect, useState, SetStateAction } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

function ModalExampleCloseIcon(props) {
    const [open, setOpen] = useState(false)
    const [mine, setMine] = useState({...props.user})


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
                            onChange={event => setMine(prevMine => { return {...prevMine, named: event.target.value}})} />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input id="lastName" value={mine.lastName} onChange={event => setMine(prevMine => {return {...prevMine, lastName: event.target.value}})} />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input id="city" value={mine.city} onChange={event => setMine(prevMine => {return {...prevMine, city: event.target.value}})} />
                    </Form.Field>
                    <Form.Field>
                        <label>Cowntry</label>
                        <input id="cowntry" value={mine.cowntry} onChange={event => setMine(prevMine => {return {...prevMine, cowntry: event.target.value}})} />
                    </Form.Field>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Birth day</label>
                            <input id='day'
                                width={2} type='number' min={1} max={31} value={mine.DateOfBirth.getDate()} onChange={(event) => console.log(event.target.value)} />
                        </Form.Field>
                        <Form.Field>
                            <label>Birth month</label>
                            <input id="month"
                                width={2} type='number' min={1} max={12} value={mine.DateOfBirth.getMonth()} onChange={(event) => console.log(event.target.value)} />
                        </Form.Field>
                        <Form.Field>
                            <label>Birth year</label>
                            <input id="year"
                                width={6} type='number' min={1920}
                                max={2010} value={mine.DateOfBirth.getFullYear()} onChange={(event) => console.log(event.target.value)} />
                        </Form.Field>
                    </Form.Group>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
        </Button>
                <Button color='green' onClick={() => {
                    props.setUsers( prevState => { 
                        prevState.map(
                        obj => (obj.id === props.user.id ? Object.assign(obj, mine) : obj)
                      )
                      console.log(prevState)
                      debugger;
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