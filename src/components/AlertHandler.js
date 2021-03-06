import React from 'react'
import { useSelector } from 'react-redux'
import { PopAlert } from './Alerts'
import { LinearProgress } from '@material-ui/core'

const AlertHandler = () => {
  const rowDelete = useSelector((state) => state.rowDelete)
  const { loading: lDel, error: eDel, success: sDel } = rowDelete

  const rowAdd = useSelector((state) => state.rowAdd)
  const { loading: lAdd, error: eAdd, success: sAdd } = rowAdd

  const rowEdit = useSelector((state) => state.rowEdit)
  const { loading: lEdit, error: eEdit, success: sEdit } = rowEdit

  return (
    <>
      {(lDel || lAdd || lEdit) && <LinearProgress />}
      {eDel && <PopAlert isOpen={true} message={eDel} severity='error' />}
      {eAdd && <PopAlert isOpen={true} message={eAdd} severity='error' />}
      {eEdit && <PopAlert isOpen={true} message={eEdit} severity='error' />}
      {sDel && (
        <PopAlert isOpen={true} message='Row Deleted' severity='success' />
      )}
      {sAdd && (
        <PopAlert isOpen={true} message='Row Added' severity='success' />
      )}
      {sEdit && (
        <PopAlert isOpen={true} message='Row Edited' severity='success' />
      )}
    </>
  )
}

export default AlertHandler
