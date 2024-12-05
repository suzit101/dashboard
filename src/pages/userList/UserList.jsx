import { DataGrid } from "@material-ui/data-grid";
import "./userList.css";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "username", headerName: "Username", width: 90 },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      renderCell: (parmas) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={parmas.row.avatar} alt="" />
            {parmas.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (parmas) => {
        return (
          <>
            <Link>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(parmas.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
