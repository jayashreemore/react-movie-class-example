function UpdateButton(props) {
    // in order for this to actually run useEffect,
    // it needs to update the state value updateMovie
    const runUseEffect = (event) => {
        event.preventDefault();
        console.log(props)
        props.setUpdateMovie(props.updateMovie + 1)
    }

    return (
        <div>
            <form onSubmit={runUseEffect}>
                <input type='submit' value='I run useEffect' />
            </form>
        </div>
    )
}

export default UpdateButton