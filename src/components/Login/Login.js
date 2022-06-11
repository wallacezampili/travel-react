import './Login.css'

export default (props) => {
    return (
        <div className="form">
            <form >
               
                <div>
                    <label for="name" className='placeholder'>Username: </label>
                    <input type="text" name="name" className="input"></input>
                </div>
                <div>
                    <label for="password" className='placeholder'>Password: </label>
                    <input type="password" name="password" className="input"></input>
                </div>
                <div className='submit'>
                    
                  <input type="submit" value="Submit" className='btn '></input>
               
                </div>
            </form>
        </div>
    )
}