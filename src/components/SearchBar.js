import React from 'react';

// need to use class based component because we need
// to use state at some point to handle user input
class SearchBar extends React.Component{
    render() {
        return(
            <div className="ui blue segment">
                <form className="ui form">
                    <div className="field">
                        <label style={{fontSize:'20px'}}>Giogle Images</label>
                        <input type="text"/> 
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;