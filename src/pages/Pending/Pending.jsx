import BaseTable from "../../components/BaseTable";
import { DUMMY_DATA_PENDING, ColumnHeaders } from "../../assets/data/data";
import { useState } from "react";

const Pending = () => {
  const data = DUMMY_DATA_PENDING;
  const columnHeaders = ColumnHeaders;

  const rowsData = [...Array(25).keys()].map(() => data);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  return (
    <>
      <div className="text-black space-y-10">
        <div>Pending Lien</div>
        <BaseTable
          rows={rowsData || []}
          columns={columnHeaders}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      </div>
    </>
  );
};

export default Pending;
