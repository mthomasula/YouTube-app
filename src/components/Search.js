import React from 'react'


class Search extends React.Component {

    state = { term: ''};

    onInputChange = (event) => {
        this.setState({ term : event.target.value });
    };

    onUserSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }


    render() {
        return (
            <div className="search-bar ui segment">
               <form onSubmit={this.onUserSubmit} className="ui form">
                    <div className="field">
                        <label style={{fontFamily:'arial', fontSize:'23px'}}>Find Videos...</label>
                        <input type="text"
                         value={this.state.term}
                         onChange={this.onInputChange} />
                    </div>
               </form>
            </div>
        
        );
    }
}


export default Search;