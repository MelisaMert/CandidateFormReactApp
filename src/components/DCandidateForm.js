import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FormControl, Grid,Button, TextField, withStyles, InputLabel , Select, MenuItem } from "@material-ui/core";
import useForm from './useForm';


const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230
        }
    },
    formControl : {
        margin: theme.spacing(1),
        minWidth: 230
    },
    smMargin : {
        margin: theme.spacing(1),
    }
})
const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    age: '',
    bloodGroup: '',
    address: ''
}

const DCandidateForm = ({classes, ...props}) => {
    const validate = () => {
         let temp = {}
         temp.fullName = values.fullName ? "" : "This field is required"
         temp.mobile = values.mobile ? "" : "This field is required"
         temp.bloodGroup = values.bloodGroup ? "" : "This field is required"
         temp.email = (/^$|.+@.+..+/).test(values.email) ? "" : "Email is not valid."
         setErrors({
             ...temp
         })
         return Object.values(temp).every(x => x == "")
    }
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFieldValues)

    // meterial-ui select
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleSubmit = e => {
        e.preventDefault()
        if(validate())
        {
            window.alert('Validasyon successed');
        }
        // console.log(values);
    }
    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="fullName"
                        variant="outlined"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="email"
                        variant="outlined"
                        label="E mail"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel ref={inputLabel}>Blood Group</InputLabel>
                        <Select
                          name="bloodGroup"
                          value={values.bloodGroup} 
                          onChange={handleInputChange}
                          labelWidth={labelWidth}
                        >
                        <MenuItem value="">Select Blood Group</MenuItem>
                        <MenuItem value="AB+">AB+</MenuItem>
                        <MenuItem value="A+">A+</MenuItem>
                        <MenuItem value="B+">B+</MenuItem>
                        <MenuItem value="0+">0+</MenuItem>
                        <MenuItem value="A-">A-</MenuItem>
                        <MenuItem value="B-">B-</MenuItem>
                        <MenuItem value="0-">0-</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="mobile"
                        variant="outlined"
                        label="Mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="age"
                        variant="outlined"
                        label="Age"
                        value={values.age}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="address"
                        variant="outlined"
                        label="Address"
                        value={values.address}
                        onChange={handleInputChange}
                    />
                    <div>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      className={classes.smMargin}
                    >
                      Submit
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.smMargin}
                    >
                      Reset
                    </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    );
}

export default withStyles(styles)(DCandidateForm);