function MovieButton(props) {
    // const newMovie = 'Frozen'

    const getNewMovie = (event) => {
        event.preventDefault();
        // console.log(event.target.value)
        props.moviesearch(props.newMovie)
    }

    return (
        <>
        <form onSubmit={getNewMovie}>
            <input type='submit' value={props.newMovie}/>
        </form>
        </>
    )
}

export default MovieButton