import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";



const userSlice = createSlice({
    name:"Nakum",
    initialState:userList ,
    reducers:{
        addusers:(state,action)=>{

            console.log(state)
            state.push(action.payload)

        },

        editUsers:(state,action)=>{
            const {id,name,email} = action.payload;
           const userId =  state.find(user=>       
                user.id == id
            )

            if(userId)
             {
                userId.name=name
                userId.email=email 
             }  

        },

        deleteUsers:(state,action)=>{
            const {id} = action.payload;
            const userId =  state.find(user=>       
                user.id == id
            )
            if(userId)
             {
                return state.filter(user=>user.id !==id)
             }


        }
       
    }
})

export const {addusers,editUsers,deleteUsers} = userSlice.actions;
export default userSlice.reducer;