// Componentes
import { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Api } from '../../Api/Api';

// Style
import '../../Styles/Delete.scss';

// Imagem
import deleteImg from '../../Img/deleteImg.png';


class Delete extends Component {
    constructor(props) { 
        super(props);

        this.id = this.props.match.params.id; // combina os ids, do requisitado quando este delete for acionado e com o da API

        this.state = {
            isLoading: false // Não está carregando/ Carregamento finalizado
        };
    }

    clickHandler = async event => { //evento assincrono que lida com o click

        event.preventDefault(); //previne o evento do padrão

        this.setState = ({
            isLoading: true // Está carregando/ Chamada de evento
        });

        await Api.buildApiDeleteRequest(Api.deleteUrl(this.id)) // Deleta o item que tem o mesmo id passado como parametro
        .catch(e => {
            console.error('Erro ao tentar deletar o item: ', e) // Trata o erro

            this.setState({
                isLoading: false // Não está carregando/ Evento finalizado
            });
        });

        

        this.goToHome(); // Como o item foi deletado, usuário será retornado à página inicial
    }

    goToHome = () => {
        this.props.history.push(`/`); // função de retorno para a página
    }

    goToView = () => {
        this.props.history.push(`/view/${this.id}`); // Caso o usuário cancele a ação de apagar, voltará ao item
    }

    render() {
        return(
            <>
            <Card>

                <Card.Body>

                    <Card.Title>Excluir Item</Card.Title>

                    <Card.Text>Tem certeza que deseja excluir o item?</Card.Text>

                    <Button className='btn' variant='danger' onClick={this.clickHandler}>Excluir</Button> {/* Chama o evento de deletar e volta à home */}
                    <Button className='btn' variant='primary' onClick={this.goToView}>Cancelar</Button> {/* Chama o evento de cancelar e retornar ao item */}

                </Card.Body>

            </Card>
            
            <Card.Img variant='bottom' src={deleteImg} alt='goten' />
            </>
        );
    }
}

export default Delete;