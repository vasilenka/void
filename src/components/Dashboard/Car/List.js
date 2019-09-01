import React from 'react'
import { List, Datagrid, TextField, EmailField } from 'react-admin'

const FurtherDetail = ({ record }) => <div>{JSON.stringify(record.address.city)}</div>

const _List = props => (
  <List {...props}>
    <Datagrid rowClick="edit" expand={<FurtherDetail />}>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
)

export default _List
