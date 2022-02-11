import React, { useState, useEffect, Fragment } from "react";
import { onSnapshot, collectionGroup, query } from "firebase/firestore";
import { db } from "../../firebase";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';

import CreateRequest from './CreateRequest';
import './Requests.css';

const theme = createTheme();

const columns = [ 
  {name: "name",
      label: "Name",
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      name: "category",
      label: "Category",
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      name: "amount",
      label: "Amount",
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      name: "unit",
      label: "Unit",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <FormControlLabel
            label=""
            value={value}
            control={<TextField value={value} />}
            onChange={event => updateValue(event.target.value)}
          />
        )
      }
    },
  ];
  
  const options = {
    filterType: "dropdown",
    resizableColumns: true,
    responsive: "standard",
    selectableRows: "none", // By default, rows have checkboxes. This option tuerns them off.
    rowsPerPage: 5,
    download: false,
    print: false,
    filter: false
  };
  

function Requests(props) {
  const [requests, setRequests] = useState([]);
  const [viewState, setViewState] = useState('start');

  useEffect(() => {
        const q = query(collectionGroup(db, "requests"));
        onSnapshot(q, (querySnapshot) => {
          setRequests(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              amount: doc.get('amount'),
              category: doc.get('category'),
              name:doc.get('name'),
              unit: doc.get('unit'),
              urgency: doc.get('urgency'),
              specDesc: doc.get('specificDescription'),
            }))
          );
        });
      }, []);
console.log(requests);

  return ( 
    <div>
   {viewState === 'start' && (
    <Fragment>
      <h1 className="heading">Current Requested Items</h1> 
      <div className="main-container">    
    <Button variant="contained" endIcon={<AddIcon />} onClick={() => setViewState('add-request')}>New Request</Button>
    <ThemeProvider theme={theme}>   
        <div className="requests-container">  
          <MUIDataTable
            data={requests}
            columns={columns}
            options={options}
          />
        </div> 
        </ThemeProvider>  
        </div> 
        </Fragment>  
   )}

   {viewState === 'add-request' && <CreateRequest />}
   </div>
  );
}; 

export default Requests;
