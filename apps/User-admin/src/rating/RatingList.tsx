import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RatingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Ratings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Location ID" source="locationId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User ID" source="userId" />
        <TextField label="value" source="value" />
      </Datagrid>
    </List>
  );
};