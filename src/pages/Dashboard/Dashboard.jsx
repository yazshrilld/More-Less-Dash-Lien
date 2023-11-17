import BaseTable from "../../components/BaseTable";
import Statistics from "../../components/Statistics/Statistics";
import { DUMMY_DATA_APPROVED, ColumnHeaders } from "../../assets/data/data";
import { useState } from "react";

const Dashboard = () => {

  const data = DUMMY_DATA_APPROVED
  const columnHeaders = ColumnHeaders;

  const rowsData = [...Array(25).keys()].map(() => data)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <>
      <div className="text-black space-y-10">
        <div>My Dashboard</div>
        <Statistics />
        <BaseTable
          rows={rowsData || []}
          // rows={rowsData || []}
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

export default Dashboard;

// headers = ['reference', 'amount', 'currency',]
// rest ---> ['pay me', '71632687', 'naira]
// create object {}
// ['pay me', '71632687', 'naira]  ---- forEach  'pay me' index = 0
// object.refernece = 'pay me', amount = '71632687', currency = 'naira' 
// above is the desired result we want for the transformation.
// we create a variable called transform and call the map array method on the values, that is the rest array above, then inside the map code block, we create an empty object where we would push all the new transformed values to.
// after creating the on=bject, we then run a forEach array method again on the new array we get from the map method, that is arr in line 33, this is because the map method returns a new array on each iteration of the whole array in the rest array.
// The forEach array method also iterates through the new array and then we pass a callbackFn that exeutes a block of code, with each individual element in the array and the index of the element currently on iteration. He used the index of the current array element on iteration to reference the the index of the headers and assign that referenced value in the headers the current element being iterated, and this statement/line of code pushes the reference and the value as objects property key-value pair into the the object we created initially at the map of the aaray.

// object[headers[0]] = itm = 'pay me'