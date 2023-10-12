import React, {useState} from "react";
import { Modal } from 'react-bootstrap'
import EntryForm from "../shared/EntryForm";
import {updateGoalFailure, updateGoalSuccess} from "../shared/AutoDismissAlert/messages";
import { updateEntry } from "../../api/journal";



const EditEntryModal = (props) => {
    const{ user,  show, handleClose, updateEntry, msgAlert, triggerRefresh} = props
    const [entry, setEntry] = useState(props.entry)
    const onChange = (e) => {
        e.persist()
        setEntry(prevEntry => {
            const updatedName= e.target.name
            const updatedValue= e.target.value
    
            const updatedEntry = {[updatedName ]: updatedValue}
            return{
                ...prevEntry, ...updatedEntry
            }
        })
     }

     const onSubmit = (e) => {
        e.preventDefault()
        updateEntry(user, entry)
            .then(()=> handleClose())
            .then(() => {
                msgAlert({
                    heading: 'oh yeah!',
                    message: updateGoalSuccess,
                    variant: 'sucess'
                })

            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'oh no!',
                    message: updateGoalFailure,
                    variant: 'danger'
                })
            })

     }


  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <EntryForm 
            entry={entry}
            handleChange={onChange}
            handleSubmit={onSubmit}
            heading='Update Entry'

            />
        </Modal.Header>
    </Modal>
  )
}

export default EditEntryModal