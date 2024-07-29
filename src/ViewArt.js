import React, {useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

function ViewArt() {
    const [columns] = useState([]);
    const [records] = useState([]);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     axios
    //       .get("http://localhost:4802/art/allart")
    //       .then((response) => {
    //         setColumns(Object.keys(response.data[0]));
    //         setRecords(response.data);
    //       })
    //       .catch((err) => {
    //         console.log(err);
      // }, []);

    let handleSubmit = (id) => {
    //     const conf = window.confirm("Do you want to delete");
    //     if (conf) {
    //       axios
    //         .delete("http://localhost:4802/art/" + id)
    //         .then((res) => {
    //           alert("record has deleted");
    //           navigate("/");
    //           window.location.reload();
    //         })
    //         .catch((err) => console.log(err));
    //     }
      };
  return (
    <div id="body">
      <div className="container ">
        <h1 id="app2" className="text-center text-bg-success ">
          Online Art Gallery
        </h1>
 
        <div className="text-end">
          <Link to="/createart" className="btn btn-primary">
            Add +
          </Link>
        </div>
        <br />
        <table className="table table-bordered  table-striped w-100 border bg-white shadow px-5 pb-5 rounded ">
          <thead>
            <tr>
              {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
 
          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.aid}</td>
                <td>{d.artistName}</td>
                <td>{d.city}</td>
                <td>{d.artName}</td>
 
                <td>
                  <Link
                    to={`/update/${d.bid}`}
                    className="btn btn-sm btn-success "
                  >
                    Update
                  </Link>
                  <button
                    onClick={(e) => handleSubmit(d.aid)}
                    className="btn btn-sm ms-1 btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewArt
