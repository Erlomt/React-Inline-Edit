class InputField extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = { edit: false, msg: this.props.children }; 
        this.onEdit = this.onEdit.bind(this);
        this.endEdit = this.endEdit.bind(this);
    }

    onEdit() {
        this.setState({
            edit: true
        });
    }

    endEdit(e) { 
        if (e.key == 'Enter') {
            var val = this.refs.newText.value; 
        this.setState({
            edit: false,
            msg: val
        });
    }
}

    render() {
        if (this.state.edit)
       return <input autoFocus ref="newText" defaultValue={this.state.msg} type="text" onKeyPress={this.endEdit} />	
        else 
       return<p onClick={this.onEdit}>{this.state.msg}</p>   
    }
}

 


ReactDOM.render(
    <div>
        <InputField>Testfield</InputField>   
    </div>,
    document.getElementById('divToDisplay')
);

