import React, {Component} from 'react';

class TextCounter extends Component {
    static defaultProps = {
        limit: 15
    };

    constructor(props) {
        super(props);
        this.state = {
            totalChars: 0,
            text: ''
        };
        // aqui faz o bind e atualiza os dados
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Controla a quantidade item que esta sendo passado
     * passando para o text e o value
     * @param event
     */
    handleChange(event) {
        const element = event.target,
            text = element.value;
        if (text.length < this.props.limit) {
            // durante as atualizações
            this.setState({
                totalChars: text.length,
                text
            })
        }
    }

    render() {
        const {state, props} = this;
        return (
            <div>
                <h1>MeuContador</h1>
                {/*onChange informa o item durante a mudança*/}
                <textarea onChange={this.handleChange} value={state.text}/>
                <div>
                    <strong>Total: </strong>{this.state.totalChars} / {props.limit}
                </div>

            </div>
        )
    }
}

export default TextCounter;