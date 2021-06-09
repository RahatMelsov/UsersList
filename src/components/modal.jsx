import React, { useState } from 'react'
import { Button, Header, Icon, Modal, Form, Checkbox, Grid, Segment } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

function ModalExampleCloseIcon(props) {
    const [open, setOpen] = useState(false)
    const [mine, setMine] = useState({ ...props.user })
    const [startDate, setStartDate] = useState(new Date());

    const SingleChoose = (checkbox, name_chek) => {
        console.log(checkbox, name_chek)
        let c = document.getElementsByName(name_chek)
        debugger;
    }

    const contractsData = {
        companys: [
            "Wal-Mart Stores",
            "Exxon Mobil",
            "Chevron",
            "Berkshire Hathaway",
            "Apple",
            "Phillips 66",
        ],
        contactDate: [
            '12/12/12',
            '12/12/10',
            '12/07/12',
            '10/12/12',
            '12/12/07',
            '12/06/12',
        ],
        contractNumber: [
            1241343,
            2144314,
            1231413,
            2314352,
            3132431,
            3214243
        ]
    }

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
                    <label><h2>Contract</h2></label>
                    <Grid columns='equal' divided inverted padded>
                        <Grid.Row color='black' textAlign='left'>
                            <Grid.Column>
                                <label><h3>Company</h3></label>
                                {contractsData.companys.map(u => {
                                    return (
                                        <Segment color='black' inverted>
                                            <Checkbox label={u} name="company" onClick={(event) => SingleChoose(event.target, 'company')} />
                                        </Segment>
                                    )
                                })}
                            </Grid.Column>
                            <Grid.Column>
                                <label><h3>Number of Document</h3></label>
                                {contractsData.contractNumber.map(u => {
                                    return (
                                        <Segment color='black' inverted>
                                            <Checkbox label={u} name="number" onClick={(event) => SingleChoose(event.target, 'company')} />
                                        </Segment>
                                    )
                                })}
                            </Grid.Column>
                            <Grid.Column>
                                <label><h3>Date Agree</h3></label>
                                {contractsData.contactDate.map(u => {
                                    return (
                                        <Segment color='black' inverted>
                                            <Checkbox label={u} name="date" onClick={(event) => SingleChoose(event.target, 'company')} />
                                        </Segment>
                                    )
                                })}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
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