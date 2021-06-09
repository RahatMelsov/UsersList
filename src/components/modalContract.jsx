import React, { useState } from 'react'
import { Button, Header, Icon, Modal, Image, Checkbox, Grid } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

function ModalContract(props) {
    const [open, setOpen] = useState(false)
    const [mine, setMine] = useState({ ...props.user })
    const [startDate, setStartDate] = useState(new Date());

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
                <Grid divided='vertically'>

                    <Grid.Row columns={3}>
                        <Grid.Column>
                        <Checkbox label='Make my profile visible' />
                        <Checkbox label='Make my profile visible' />
                        <Checkbox label='Make my profile visible' />
                        <Checkbox label='Make my profile visible' />
                        <Checkbox label='Make my profile visible' />
                        </Grid.Column>
                        <Grid.Column>
                        <Checkbox label='Make my profile visible' />
                        <Checkbox label='Make my profile visible' />
                        <Checkbox label='Make my profile visible' />
                        <Checkbox label='Make my profile visible' />
                        <Checkbox label='Make my profile visible' />
                        </Grid.Column>
                        <Grid.Column>
                        <Checkbox label='Make my profile visible' />
                        <Checkbox label='Make my profile visible' />
                        <Checkbox label='Make my profile visible' />
                        <Checkbox label='Make my profile visible' />
                        <Checkbox label='Make my profile visible' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
        </Button>
                <Button color='green' onClick={() => {
                    setOpen(false)
                }}>
                    <Icon name='checkmark' /> Yes
        </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalContract;