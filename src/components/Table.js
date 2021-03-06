import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteRow, listRows } from '../stateManager/rowActions'

import { withStyles, makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  LinearProgress,
  ButtonGroup,
  Button,
  Fab
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { StaticAlert } from './Alerts'
import { AddPopup, EditPopup } from './Popup'
import AlertHandler from './AlertHandler'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow)

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700
  },
  container: {
    maxHeight: 400
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(8),
    right: theme.spacing(8)
  }
}))

export default function DataTable() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const rowList = useSelector((state) => state.rowList)
  const { loading, error, rows } = rowList

  const rowDelete = useSelector((state) => state.rowDelete)
  const { success: sDel } = rowDelete
  const rowAdd = useSelector((state) => state.rowAdd)
  const { success: sAdd } = rowAdd
  const rowEdit = useSelector((state) => state.rowEdit)
  const { success: sEdit } = rowEdit

  useEffect(() => {
    dispatch(listRows())
  }, [dispatch, sDel, sAdd, sEdit])

  const [addOpen, setAddOpen] = React.useState(false)
  const handleAddClick = () => setAddOpen(!addOpen)

  const [rowNo, setRowNo] = useState('')
  const [editOpen, setEditOpen] = React.useState(false)
  const handleEditClick = (id) => {
    setRowNo(id)
    setEditOpen(!editOpen)
  }

  const deleteHandler = (id) => dispatch(deleteRow(id))

  return (
    <Container maxWidth='lg'>
      <AlertHandler />
      {loading ? (
        <LinearProgress />
      ) : error ? (
        <StaticAlert message={error} />
      ) : (
        <>
          <TableContainer className={classes.container} component={Paper}>
            <Table stickyHeader className={classes.table}>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Username</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Phone</StyledTableCell>
                  <StyledTableCell>Website</StyledTableCell>
                  <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component='th' scope='row'>
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell>{row.username}</StyledTableCell>
                    <StyledTableCell>{row.email}</StyledTableCell>
                    <StyledTableCell>{row.phone}</StyledTableCell>
                    <StyledTableCell>{row.website}</StyledTableCell>
                    <StyledTableCell>
                      <ButtonGroup variant='contained'>
                        <Button
                          variant='contained'
                          color='primary'
                          onClick={() => handleEditClick(row.id)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant='contained'
                          color='secondary'
                          onClick={() => deleteHandler(row.id)}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
            <Fab
              aria-label='add'
              className={classes.fab}
              onClick={handleAddClick}
            >
              <AddIcon />
            </Fab>
            <AddPopup open={addOpen} handleClick={handleAddClick} />
            <EditPopup
              open={editOpen}
              handleClick={handleEditClick}
              rowId={rowNo}
            />
          </TableContainer>
        </>
      )}
    </Container>
  )
}
