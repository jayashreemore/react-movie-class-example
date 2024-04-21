import { useState } from 'react'

function Form(props) {
    // add state to hold data of the form
    const [formData, setFormData] = useState({
        searchterm: '',
        // bonus:''
    })

    const handleChange = (event) => {
        console.log('in handlechange')
        setFormData({ ...formData, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        // prevent the page from refreshing on form submission
        event.preventDefault();
        // console.log(formData);
        props.moviesearch(formData.searchterm);
    }

    // this is an example of another input that we could use
//     <input
//     type="text"
//     name='bonus'
//     onChange={handleChange}
//     value={formData.bonus}
// />

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='searchterm'
                    onChange={handleChange}
                    value={formData.searchterm}
                />
                <input type="submit" value='submit'/>
            </form>
            <p>type in the movie to search for</p>
        </div>
    )
}

export default Form