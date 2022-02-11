import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';


import './Requests.css';

const defaultValues = {
    name: "",
    description: "",
    category: "",
    units: "",
  };

const categories = ["Covid-19 Response", "Clothes", "Hygiene", "Nutrition", "Warmth"];

const CreateRequest = () => {
    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formValues);
    };

    return (
        <div className="new-request-container">
            <h1 className="heading"> Create New Request</h1>
            <form onSubmit={handleSubmit}>
            <FormControl>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select style={{ width: "200px", margin: "5px" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formValues.category || ""}
                label="Category"
                name="category"
                autoWidth
                onChange={handleInputChange}
            >
                {categories.map((category, index) => {
                  return (
                      <MenuItem key={category} value={category}>{category}</MenuItem>
                  )  
                })}
            </Select>
            </FormControl>
            <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    name="name"
                    label="Name"
                    variant="outlined"
                    value={formValues.name || ""}
                    onChange={handleInputChange}
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    name="description"
                    label="Description"
                    variant="outlined"
                    value={formValues.description || ""}
                    onChange={handleInputChange}
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    type="text"
                    label="Units"
                    name="units"
                    variant="outlined"
                    value={ formValues.units || "" }
                    onChange={handleInputChange}
                />
                <br />
                <Button variant="contained" type="submit">
                    Create Request
                </Button>
            </form>
        </div>




    //   <form onSubmit={handleSubmit}>
    //     <Grid container alignItems="center" justify="center" direction="column">
    //     <Grid item>
    //       <FormControl>
    //         <Select
    //         id="select-category"
    //           name="Category"
    //           label="Category"
    //           value={formValues.category}
    //           onChange={handleInputChange}
    //         >
    //           <MenuItem key="covid" value="covid">
    //             Covid-19 Response
    //           </MenuItem>
    //           <MenuItem key="clothes" value="clothes">
    //             Clothes
    //           </MenuItem>
    //           <MenuItem key="hygiene " value="hygiene">
    //             Hygiene
    //           </MenuItem>
    //           <MenuItem key="nutrition " value="nutrition">
    //             Nutrition
    //           </MenuItem>
    //           <MenuItem key="warmth " value="warmth">
    //             Warmth
    //           </MenuItem>
    //         </Select>
    //       </FormControl>
    //     </Grid>
    //       <Grid item>
    //         <TextField
    //           id="name-input"
    //           name="name"
    //           label="Name"
    //           type="text"
    //           value={formValues.name}
    //           onChange={handleInputChange}
    //         />
    //       </Grid>
    //       <Grid item>
    //         <TextField
    //           id="desc-input"
    //           name="description"
    //           label="Description"
    //           type="text"
    //           value={formValues.description}
    //           onChange={handleInputChange}
    //         />
    //       </Grid>
    //       <Button variant="contained" type="submit">
    //         Submit
    //       </Button>
    //     </Grid>
    //   </form>
    );
  };
  export default CreateRequest;