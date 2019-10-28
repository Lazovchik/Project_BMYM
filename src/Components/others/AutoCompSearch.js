import React, {Component} from 'react';
import { getObjetById } from '../../functions/ComponentTools';

// design for this component is from https://www.youtube.com/watch?v=NnpISZANByg
class AutoCompSearch extends Component{

    constructor(props){
        super(props);
        this.state = {
            namesTab : [],
            suggestions: [],
            validUser: false,
            content: this.props.content,
            selected: ''
        };
    }
    componentDidMount()
    {
        this.fillNamesTab();
    }
    render(){
     return(
        <div >
            <input type = 'text' className="form-control" value={this.state.content} onFocus = {this.onFocus}
             onBlur = {this.onBlur} onChange={this.findSuggestions}  />
                <ul className="list-group  position-absolute">
                    {this.renderSuggestions()}
                </ul>
        </div>
     );
    }
    onFocus = () =>{
        if(this.state.content.length === 0)
            this.setState({
                suggestions:this.state.namesTab.slice(0, 3)
            });
    }
    onBlur = () =>{
        var textSelected = this.state.selected;
        if(this.state.suggestions.indexOf(textSelected) === -1)
            textSelected = '';
        else
        {
            this.props.userOk(true);
            this.props.changeContent(textSelected);
        }
        this.setState({
            suggestions:[],
            selected:'',
            content: textSelected
        });
            
    }
    handleSelect = (value) =>{
        this.setState({
            selected: value
        });
        this.props.userOk(false);
    }
    //find any name that look like the user input and put it in suggestions[]
    findSuggestions = (event) =>{
        var suggests = this.state.namesTab;
        const compare = event.target.value;
        if(compare.length !==0)
        {
            const bdd = this.state.namesTab.slice();
            if( bdd.length !== 0)
            {
                suggests = [];
                bdd.forEach(email => {
                    if(email.toLowerCase().search(compare.toLowerCase()) !== -1)
                        suggests.push(email);
                });
                
            }
        }
        
        this.setState({
            suggestions : suggests.slice(0, 3),
            content : compare
        });
        this.props.userOk(false);
    }
    //render the suggestions 
    renderSuggestions(){
        const suggestions = this.state.suggestions;
        const displayed = suggestions.map(sugg => {
            return  (<li className={this.state.selected === sugg ? 'list-group-item active': 'list-group-item' } 
                        value ={sugg} onMouseEnter={() => this.handleSelect(sugg)} key = {sugg}> 
                        {sugg} 
                    </li>);
        });
        
        return displayed;
    }
    //fill the state from users in the locale bdd
    fillNamesTab(){

        var returnTab = [];
        //table of all users
        const userTabs = JSON.parse(localStorage.getItem('users'));
        //get the user
        const mainUser = getObjetById(parseInt(localStorage.getItem('user')), 'user');
        const userName = mainUser.email; 
        //add all elements, except the user connected
        if(userTabs !== null)
        {
            userTabs.forEach(user => {
                if(user.email !== userName)
                    returnTab.push(user.email);
            });
            this.setState({
                namesTab: returnTab.slice()
            });
        }
        
    }
}
export default AutoCompSearch;