import React , { useState, useEffect } from "react";
import { connect } from "react-redux";
import  * as actions  from "../actions/dCandidate";
import { Grid ,Paper,TableContainer,Table,TableHead,TableRow,TableCell,TableBody,withStyles} from "@material-ui/core";
import DCandidateForm  from "./DCandidateForm";
 
const styles = theme => ({
    root : {
     "& .MuiTableCell-head":{
          fontSize:"1.25rem"
    }},
    paper: {
       margin: theme.spacing(2),
       padding: theme.spacing(2)
    }
});
const DCandidates = ({classes,...props}) => {
    useEffect(() => {
     props.fetchAllDCandidates()
    },[]); // Alternative ComponentDidMount
     return (
     <Paper className={classes.paper} elevation={3}>
        <Grid container>
         <Grid item xs={6}>
            <DCandidateForm />
         </Grid>
         <Grid item xs={6}>
             <TableContainer>
             <Table>
                 <TableHead className={classes.root}>
                     <TableRow>
                         <TableCell>Name</TableCell>
                         <TableCell>Mobile</TableCell>
                         <TableCell>Blood Group</TableCell>
                         <TableCell>Age</TableCell>
                         <TableCell>Address</TableCell>
                     </TableRow>
                 </TableHead>
                 <TableBody>
                     {
                         props.dCandidateList.map((record,index) => {
                             return (<TableRow key={index}>
                                 <TableCell>{record.fullName}</TableCell>
                                 <TableCell>{record.mobile}</TableCell>
                                 <TableCell>{record.bloodGroup}</TableCell>
                                 <TableCell>{record.age}</TableCell>
                                <TableCell>{record.address}</TableCell>
                             </TableRow>)
                         })
                     }
                 </TableBody>
             </Table>
             </TableContainer>
        </Grid>
      </Grid>
     </Paper>
      
     );
}

// reducers> dCanditate > list 
// list will be stored inside the Redux store
// dCandidate reducer name
// accessing list  -> on reducer
// in order to access list of store we can make use of the key property here from this props parameter like this props.dCandidateList
// using a class based component we will do componentDidMount  - componentDidUpdate ?
// in this case  of react hooks we don't have any such react-life cycles  
// React hooks there are two main functions (useState, useEffect)
const mapStateToProps = state => ({
    dCandidateList: state.dCandidate.list
})

const mapActionToProps = {
     fetchAllDCandidates: actions.fetchAll
}
export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(DCandidates));
// middle store and component

