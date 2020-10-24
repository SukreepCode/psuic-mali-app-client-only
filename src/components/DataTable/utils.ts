import { FieldsType } from "./DataTable";

export interface EditableObject {
    [key: string]: any;
}

export function mapFormValuesToFields<ObjectType>(obj: EditableObject,values: any, fields: FieldsType<ObjectType>[]){
    
    // add all keys to add
    fields.map((field: any) => {
      console.log(`${field.key} --- ${values[field.key]}`);
      if (field.hasOwnProperty('type')) {

        if(field.type == "number") { 
          const tmp = Number(values[field.key]); 
          if(Number.isNaN(tmp)) {
            throw `${field.key} of the value ${values[field.key]} is not number`;
          }
          else obj[field.key] = tmp;
        }

        else if(field.type == "string") { obj[field.key] = values[field.key]; }
        else { throw `${field.type} type is no allow (${field.key})`; }
        
      } else {
        console.log(`-> ** ${field.key} --- ${values[field.key]}`);
        obj[field.key] = values[field.key];
      }
    });

    console.log(obj);
    return obj;
  }