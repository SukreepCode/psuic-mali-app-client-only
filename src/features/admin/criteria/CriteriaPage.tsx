import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import DataList from "../../../components/DataList/DataList";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as Criteria from "./criteria.slice";
import { Criteria as CriteriaType } from "./criteria.service";

const CriteriaPage = ({ match }: RouteComponentProps<any>) => {
  const dispatch = useDispatch();
  const criteria = useSelector(Criteria.selector);
  const dm1Criteria = useSelector(Criteria.dm1selector);
  const dm2Criteria = useSelector(Criteria.dm2selector);

  return (
    <AdminLayout>
      <div className="container ">
        <div className="content-layout ">
          <h1>Criteria Data</h1>
          <h1>DM 1</h1>
          <DataList<CriteriaType>
            objects={dm1Criteria}
            fields={[
              // {key: "id", title: "ID"},
              { key: "title", title: "Title", required: true, type: "string" },
              { key: "ratio", title: "Ratio", required: true, type: "number"  },
              { key: "type", title: "Type", required: true, type: "string"  },
            ]}
            onFetchAll={() => dispatch(Criteria.fetchAll())}
            onFetch={(id: string) => dispatch(Criteria.fetch(id))}
            onDelete={(id: string) => dispatch(Criteria.deleteData(id))}
            onAdd={(criteria: CriteriaType) => dispatch(Criteria.addData(criteria))}
            onEdit={(id: string, criteria: CriteriaType) =>
              dispatch(Criteria.editData(id, criteria))
            }
          />
           <h1>DM 2</h1>
          <DataList<CriteriaType>
            objects={dm2Criteria}
            fields={[
              // {key: "id", title: "ID"},
              { key: "title", title: "Title", required: true },
              { key: "ratio", title: "Ratio", required: true },
              { key: "type", title: "Type", required: true },
            ]}
            onFetchAll={() => dispatch(Criteria.fetchAll())}
            onFetch={(id: string) => dispatch(Criteria.fetch(id))}
            onDelete={(id: string) => dispatch(Criteria.deleteData(id))}
            onAdd={(criteria: CriteriaType) => dispatch(Criteria.addData(criteria))}
            onEdit={(id: string, criteria: CriteriaType) =>
              dispatch(Criteria.editData(id, criteria))
            }
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default CriteriaPage;
