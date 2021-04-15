import { Button, Dialog, DialogActions, DialogContent, TextField } from '@material-ui/core'
import React, { Component } from 'react'
import todoData from "./todoData.json"

 class ListTodo extends Component {
     constructor(props){
         super(props);

         this.state = {
            listcomp:false, 
            openDialog:'',
            todoData:''
         }
     }

edit = (value) => {
this.setState ({
    openDialog: value
})

}

update = () => {
    const list = [...this.state.todoData]; 
    list.push(todoData);
}


    render() {
        return (
            <div>
                <Dialog
                open={this.state.openDialog}
                >
                <DialogContent>
                    <div>
                    <TextField 
                    label="FirstName"
                    />
                    <div>
                    <TextField
                    label="LastName"
                    />
                    </div>
                    <TextField 
                    label="Email"
                    type='email'
                    />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button>Update</Button>
                    <Button onClick={() => this.edit(false)}>Cancel</Button>
                </DialogActions>
                </Dialog>
               <h2 className="text-center">Todo List</h2>
                 <div className = "row">
                   
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> List First Name</th>
                                    <th> List Last Name</th>
                                    <th> List Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todoData.map(
                                        todo => {
                                            return (
                                        <tr >
                                             <td> { todo.firstname} </td>   
                                             <td> {todo.lastname}</td>
                                             <td> {todo.email}</td>
                                             <td>
                                                 <Button onClick={ () => this.edit(true)}>Edit </Button>
                                               
                                                
                                             </td>
                                        </tr>
                                    )
                                        }
                                    )}
                            </tbody>
                        </table>

                 </div>
   
            </div>
        )
    }
}

 export default ListTodo;