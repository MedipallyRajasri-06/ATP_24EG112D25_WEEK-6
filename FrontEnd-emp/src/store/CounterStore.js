import {create} from 'zustand'
 //create store
export const useCounterStore = create((set) => ({
    //state
    newCounter:0,
    newCounter1:100,
    user:{ name:"John",email:"john@example.com", age:30},
    //function to change email
    changeEmail: ()=>set({...user,email:"jane@email.com"}),
    //function to change name and age
    changeNameAndAge: ()=>set({...user,name:"Jane",age:25}),
    //function to modify state
    incrementCounter: () => set((state) => ({newCounter: state.newCounter + 1})),
    incrementCounter1: () => set((state) => ({newCounter1: state.newCounter1 + 1})),
    decrementCounter: () => set((state) => ({newCounter: state.newCounter - 1})),
    //function to change newCounter to 500
    reset:() => set({newCounter: 500}),
    //function to decrement newCounter1 by 20
    decrementCounter1: () => set((state) => ({newCounter1: state.newCounter1 - 20}))

}))
