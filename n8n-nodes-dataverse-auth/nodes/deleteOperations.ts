import { INodeProperties } from "n8n-workflow";
import { Operation } from "./operation";
import { Properties } from "./properties";

export const deleteOperations: INodeProperties[] = [
  {
    displayName: "Entity Name",
    name: Properties.ENTITYNAME,
    type: "options",
    typeOptions: {
      loadOptionsMethod: "getEntityList",
    },
    required: true,
    default: "",
    displayOptions: {
      show: {
        operation: [Operation.DELETE],
      },
    },
    description: "Name of the entity to delete from",
  },
  {
    displayName: "Record ID",
    name: Properties.DELETE_RECORDID,
    type: "string",
    required: true,
    default: "",
    displayOptions: {
      show: {
        operation: [Operation.DELETE],
      },
    },
    description: "ID of the record to delete",
  },
];
