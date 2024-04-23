import { Formik, Form, Field } from "formik"
import { useId } from "react"
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Ooops, you`ve clicked too early. Enter something');


export default function SearchBar({ handleSearch }) {
const searchId = useId();

 

    return (
      <header>
        
        <Formik initialValues={{
          search: '',
        }}
          onSubmit={(values, actions) => {
            if (values.search.trim() === '') {
              notify()
             
            } else {
            handleSearch(values.search);
            actions.resetForm()
            }
       
          }}
        > 
            <Form> 
                <label htmlFor={searchId}>Name</label>
            <Field name="search" id={ searchId } />
            
             
            <button type="submit">Add contact</button>
            <Toaster />
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