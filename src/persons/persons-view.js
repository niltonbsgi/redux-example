import React from 'react';
import { connect } from 'react-redux';
import { _List } from './persons-action';

const mapStateToProps = (state) => {
    const { list, error } = state.PersonsReducer;
    return { list, error };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetListPersons: () =>{
            const promise = _List()
            dispatch(promise)
            return promise
        }
    }
}

class PersonsView extends React.Component{
    componentDidMount(){
        const { onGetListPersons } = this.props
        onGetListPersons()
    }
    render(){
        return (
            <div>
                <ul>
                <h3>Star Wars Persons</h3>
                    {
                        this.props.list.map((element, index) =>(
                            <li key={index}>
                                Name: {element.name} | Height: {element.height} | Mass: {element.mass}
                            </li>
                        ))
                    }
                </ul>
            </div>
                )
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (PersonsView)