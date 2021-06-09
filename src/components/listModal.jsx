import React, { useState } from 'react'
import { Button, Header, Icon, Modal, Checkbox, List } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

function ListModal(props) {
    window.lin = 'ddads'
    let id_con;
    const [open, setOpen] = useState(false)
    const [mine, setMine] = useState({ ...props.contract })
    const companys = [
        { name: "Wal-Mart Stores", contactDate: '12/12/12', contractNumber: 1241343 },
        { name: "Exxon Mobil", contactDate: '12/12/10', contractNumber: 1241343 },
        { name: "Chevron", contactDate: '12/12/12', contractNumber: 1241343 },
        { name: "Berkshire Hathaway", contactDate: '12/12/12', contractNumber: 1241343 },
        { name: "Apple", contactDate: '12/12/12', contractNumber: 1241343 },
        { name: "Phillips 66", contactDate: '12/12/12', contractNumber: 1241343 },
    ]

    const few = (e, name_contract) => {
        console.log(e.childNodes[0].checked, name_contract)
        if(window.lin == 'ddads') {
            window.lin = e.childNodes[0]
            id_con = e.childNodes[0].id 
        } else {
            window.lin.checked = false;
            debugger;
            window.lin = e.childNodes[0];
            id_con = e.childNodes[0].id
        }
    }

    return (
        <Modal
            closeIcon
            open={open}
            trigger={<Button icon>
                <h3>ok</h3>
            </Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header />
            <Modal.Content>
                <List>
                    {companys.map((u) => <List.Item><List.Content><h4><Checkbox id={'' + companys.indexOf(u) + ''} label={u.name + " | " + moment(u.contactDate).format('L') + " | " + u.contractNumber} name='contract' onClick={(event) => few(event.currentTarget, 'contract')}/></h4></List.Content> </List.Item>)}
                </List>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
        </Button>
                <Button color='green' onClick={() => {
                    setOpen(false)
                    console.log(id_con)
                    console.log(companys[id_con])
                    debugger;
                    props.setContract(companys[id_con])
                }}>
                    <Icon name='checkmark' /> Yes
        </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ListModal;