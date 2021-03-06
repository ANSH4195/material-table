import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StaticAlert } from './Alerts'
import { addRow, editRow } from '../stateManager/rowActions'

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'

export const AddPopup = ({ open, handleClick }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [alert, setAlert] = useState('')

  const addRowHandler = () => {
    if (!name || !username || !email || !phone || !website) {
      setAlert('Please fill all the fields.')
      setTimeout(() => {
        setAlert('')
      }, 5000)
    } else {
      const newRow = {
        name,
        username,
        email,
        phone,
        website
      }

      dispatch(addRow(newRow))

      setName('')
      setUsername('')
      setEmail('')
      setPhone('')
      setWebsite('')
      handleClick()
    }
  }

  return (
    <Dialog open={open} onClose={handleClick} fullWidth maxWidth='sm'>
      <DialogTitle>Add Row</DialogTitle>
      {alert && <StaticAlert message={alert} />}
      <DialogContent>
        <DialogContentText>
          Please fill all the fields in the below form to add a row.
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          label='Name'
          type='text'
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          autoFocus
          margin='dense'
          label='Username'
          type='text'
          fullWidth
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          autoFocus
          margin='dense'
          label='Email'
          type='email'
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          autoFocus
          margin='dense'
          label='Phone'
          type='text'
          fullWidth
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          autoFocus
          margin='dense'
          label='Website'
          type='text'
          fullWidth
          required
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClick} color='primary'>
          Cancel
        </Button>
        <Button onClick={addRowHandler} color='primary'>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export const EditPopup = ({ open, handleClick, rowId }) => {
  const dispatch = useDispatch()
  const rowList = useSelector((state) => state.rowList)
  const { rows } = rowList

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [alert, setAlert] = useState('')

  useEffect(() => {
    let row = rows.find((row) => row.id === Number.parseInt(rowId))
    if (row) {
      setName(row.name)
      setUsername(row.username)
      setEmail(row.email)
      setPhone(row.phone)
      setWebsite(row.website)
    }
  }, [rowId, rows])

  const editRowHandler = () => {
    if (!name || !username || !email || !phone || !website) {
      setAlert('Please fill all the fields.')
      setTimeout(() => {
        setAlert('')
      }, 5000)
    } else {
      const updatedRow = {
        name,
        username,
        email,
        phone,
        website,
        id: rowId
      }

      dispatch(editRow(updatedRow))

      setName('')
      setUsername('')
      setEmail('')
      setPhone('')
      setWebsite('')
      handleClick()
    }
  }

  return (
    <Dialog open={open} onClose={handleClick} fullWidth maxWidth='sm'>
      <DialogTitle>Edit Row</DialogTitle>
      {alert && <StaticAlert message={alert} />}
      <DialogContent>
        <DialogContentText>
          Please edit or leave unchanged the fields in the below form to edit
          the row.
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          label='Name'
          type='text'
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          autoFocus
          margin='dense'
          label='Username'
          type='text'
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          autoFocus
          margin='dense'
          label='Email'
          type='email'
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          autoFocus
          margin='dense'
          label='Phone'
          type='text'
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          autoFocus
          margin='dense'
          label='Website'
          type='text'
          fullWidth
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClick} color='primary'>
          Cancel
        </Button>
        <Button onClick={editRowHandler} color='primary'>
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  )
}
