import React from "react";
import {
  // Datagrid,
  // TextField,
  Edit,
  SimpleForm,
  DisabledInput,
  TextInput
  // DateInput,
  // LongTextInput,
  // ReferenceManyField,
  // DateField,
  // EditButton,
} from "react-admin";

const PostTitle = ({ record }) => {
  return <span>Edit Car Data</span>;
};

const _Edit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <DisabledInput label="Id" source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" type="email" />
      <TextInput source="address.street" />
      <TextInput source="phone" type="tel" />
      <TextInput source="website" type="url" />
      <TextInput source="company.name" />
    </SimpleForm>
  </Edit>
);

export default _Edit;
