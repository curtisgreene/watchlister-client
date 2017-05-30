import React from 'react'



class SearchForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = { 
			searchTerm: ''
		}
	}

	handleInputChange(e) {
		this.setState({
			searchTerm: e.target.value
		})
	}

	handleSearch(e) {
		this.props.handleSearch(this.state.searchTerm)
	}

	render(){
		return (
			<div>
      			<input type='text' onChange={this.handleInputChange.bind(this)} placeholder={"Search for Movies"}/>
      			<input type='button' value="Search" onClick={this.handleSearch.bind(this)} />
   			 </div>
		)
	}

}

export default SearchForm



