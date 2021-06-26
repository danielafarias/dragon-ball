// Componentes
import { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Api } from '../../Api/Api';

//Style
import '../../Styles/DeleteAll.scss';

// Imagem
import deleteImg from '../../Img/deleteImg.png';


class DeleteAll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false // Não está carregando/ Carregamento finalizado
        }
    }

    clickHandler = async event => { // Função que lida com evento de clique

        event.preventDefault(); // Previne o padrão

        this.setState({
            isLoading: true // Está carregando/ Evento acionado
        });

        await Api.buildApiDeleteRequest(Api.deleteAllUrl()) // Espera o request finalizar, mas dessa vez sem pedir o id, já que apaga tudo
            .catch(e => (console.error('Erro ao tentar deletar todo o banco: ', e))); // Trata o erro
    
        this.setState({
            isLoading: false // Volta para não carregando/ carregado
        })

        this.goToHome() // Vai para home após finalizado
    }

    goToHome = () => {
        this.props.history.push('/') // evento que leva o usuario para home
    }

    render() {
        return (
            <>
            <Card>

                <Card.Body>

                    <Card.Title>Excluir tudo!</Card.Title>

                    <Card.Text>
                        Tem certeza que deseja excluir todos os itens da aplicação?
                        Essa ação não poderá ser revertida.
                    </Card.Text>

                    <Button className='btn' variant='danger' onClick={this.clickHandler}> {/* Atende o request e depois de finalizado leva a home */}
                        Excluir                        
                    </Button>

                    <Button className='btn' variant='primary' onClick={this.goToHome}> {/* Não apaga pois não há request acionada, apenas retorna a home */}
                        Cancelar
                    </Button>

                </Card.Body>

            </Card>
            
            <Card.Img variant='bottom' src={deleteImg} alt='goten' />
            </>
        );
    }
}

export default DeleteAll;