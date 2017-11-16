import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchString: "search" };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown =this.handleKeyDown.bind(this);

    }

    handleKeyDown(event){
        if(event.keyCode === 13){
            this.handleClick();
        }
    }

    handleClick() {
        this.props.useSearchString(this.state.searchString);
    }

    handleChange(event) {
        this.setState({ searchString: event.target.value });
    }

    render() {
        return (
            <div>
                Search posts: <input type='text' value={this.state.searchString} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />

                {/* <button onClick={this.handleClick}>Search posts</button> */}
            </div>
        );
    }


}
export default Search;