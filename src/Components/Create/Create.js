// Componentes
import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Api } from '../../Api/Api';

// Style
import '../../Styles/Create.scss';

// Imagens
import createImg from '../../Img/createImg.png';

class Create extends Component {

    constructor(props) {
        super(props); // Propriedades pai do construtor
        this.state = {
            isLoading: false // O estado da página é que não ainda foi carregado mas está carregando

        }
    }

    submitHandler =  async event => { // Função que vai lidar com o botão de envio, essa função será um evento assíncrono, ou seja, não agirá de maneira simultanea / em sicronia
        
        event.preventDefault(); // prevenção do event que impede de ganhar propriedades padrão

        const { name, imageUrl } = event.target; // Atributos do objeto que serão alvos do evento

        const item = {
            name: name.value,
            imageUrl: imageUrl.value
        } // Atributos do objeto = item

        this.setState({
            isLoading: true // Muda o estado para carregando
        })

        const request = await Api.buildApiPostRequest( // constante que irá fazer com que a request espere a construção do método para avançar
            Api.createUrl(), // Cria a URL do item
            item).catch(e => { // Pega o erro caso ocorra para tratar
                console.error('Erro ao tentar adicionar um item ao banco: ', e) // Na qual esse tratamento devolve essa mensagem
            })

            this.setState({
                isLoading: false // volta para o loading como falso
            })

            const result = await request.json(); // constante chamada resultado que devolve a resposta da request

            const id = result._id; // A ID = ID gerada na API

            this.props.history.push(`/view/${id}`) // Depois de tudo, ao fim retorna a 'historia' do item, retornando ao usuario o card do personagem insertido

            // Sobre o ciclo do isLoading que pode ser um pouco confuso:
            // isLoading é o estado que pergunta se a página está carregando ou não,
            // Então nele se define: 
            // isLoading: false = Não está carregando,
            // isLoading: true = Está carregando.
            
            // (˵ ͡° ͜ʖ ͡°˵)^ E para se entender melhor vamos usar de exemplo o Create:

            // 1 - isLoading está false, pois a página não têm nenhuma ação sendo chamada, 
            // possível ver apenas a página carregada com o formulário estático;

            // 2 - isLoading está true, pois o submitHandler foi acionado, dando inicio a request de POST;
            
            // 3 - isLoading está false, porque após o processo de request anterior, o item foi criado e está no 
            // banco de dados, com seu devido id criado, assim entrará num processo de ida para a rota de visualização 
            // do item em si;
    }

    render() {
        return (
            <>
                <h2>Adicionar personagens</h2>

                <img src={createImg} alt='Goten' />
                
                <Form onSubmit={this.submitHandler}> {/* Será acionado o evento quando as informações serem enviados */}
                    <Form.Group controlId='name'> {/* Controla o dado inserido o categorizando para também ser usado */}
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

                    <Button variant='primary' type='submit'>Criar</Button>
                </Form>
            </>
        );
    }
}

export default Create;