import React from 'react';

// need to use class based component because we need
// to use state at some point to handle user input
class SearchBar extends React.Component{
    state = {term:" "};

    handleChange = (e) => {
        this.setState({
            term: e.target.value
        });
    }

    render() {
        return(
            <div className="ui blue segment">
                <form className="ui form">
                    <div className="field">
                        <label>Giogle Image Search</label>
                        <div className="ui left icon input">
                            <i className="search icon"/>
                            <input 
                                type="text"
                                value={this.state.term}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;