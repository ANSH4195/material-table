import React, { useState } from 'react'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

export const PopAlert = ({ isOpen, message, severity }) => {
  const [open, setOpen] = useState(isOpen)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={10000}
      open={open}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} variant='filled' severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export const StaticAlert = ({ message }) => {
  return (
    <Alert variant='filled' severity='error'>
      {message}
    </Alert>
  )
}
