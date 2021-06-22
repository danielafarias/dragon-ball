import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../Styles/Create.scss';
import { Api } from '../../Api/Api';


class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false

        }
    }

    submitHandler =  async event => {
        event.preventDefault();

        const { name, imageUrl } = event.target;

        const item = {
            name: name.value,
            imageUrl: imageUrl.value
        }

        this.setState({
            isLoading: true
        })

        const request = await Api.buildApiPostRequest(
            Api.createUrl(),
            item).catch(e => {
                console.error('Erro ao tentar adicionar um item ao banco: ', e)
            })

            this.setState({
                isLoading: false
            })

            const result = await request.json();

            const id = result._id;

            this.props.history.push(`/view/${id}`)
    }

    render() {
        return (
            <>
                <h2>Adicionar personagens</h2>
        
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>
                            Nome
                        </Form.Label>
                        <Form.Control type='text' placeholder='Digite o nome'/>
                        <Form.Text className='text-muted'>Esse nome será utilizado na visualização dos itens na lista.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId='imageUrl'>
                        <Form.Label>URL da imagem</Form.Label>
                        <Form.Control type="text" placeholder='insira a URL da imagem'/>
                        <Form.Text className='text-muted'>A imagem em questão será exibida na lista de itens.
                            Certifique-se de que essa URL representa uma imagem válida.
                        </Form.Text>
                    </Form.Group>

                    <Button variant='primary' type='submit'>Enviar</Button>
                </Form>
            </>
        );
    }
}

export default Create;