import { Formik, Form, Field } from "formik"
import { useId } from "react"


export default function SearchBar({ onSubmit }) {
const searchId = useId();


    return (
      <header>
        
      <Formik initialValues={{
            search:'',
         
        
        }}
         
            onSubmit={onSubmit}> 
            <Form> 
                <label htmlFor={searchId}>Name</label>
            <Field name="search" id={ searchId} />
            
             
                <button type="submit" onSubmit={onSubmit} >Add contact</button>
</Form>
        </Formik>



  {/* <form>
    <input
      // type="text"
      // autoComplete="off"
      // autoFocus
      // placeholder="Search images and photos"
    />
    <button type="submit" onSubmit={onSubmit}>Search</button>
  </form> */}
</header>
    )
}