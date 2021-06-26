// Component
import { Container, Col, Row } from 'react-bootstrap';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../../Api/Api';

// Style
import '../../Styles/ReadSingle.scss';

class ReadSingle extends Component {

    constructor(props) {
        super(props);
        this.id = this.props.match.params.id; // combina os ids, do requisitado quando este read for acionado e com o da API

        this.state = {
            isLoading: true, // Por que começa com true? 
                            // Porque este componente depende de outros para ser acionado, 
                           //ou seja, ele já é iniciado acionando a request de Get.
            item: {} // Objeto vazio até então
        };
    }

    async componentDidMount() {
        const request = await Api.buildApiGetRequest(
            Api.readSingleUrl(this.id) // Request GET por id
        );

        const item = await request.json(); // O objeto pego é guardado aqui

        this.setState({
            isLoading: false, // Pagina carregada
            item // Objeto agora existe
        });
    }

    render() {

        const { item } = this.state;

        return (
            <>
                <Container className='actions'>
                    <Link className='btn btn-info' to={'/update/' + item._id}>Editar</Link> {/* Botão que leva para rota de update */}
                    <Link className='btn btn-danger' to={'/delete/' + item._id}>Excluir</Link> {/* Botão que leva para rota de delete de confirmação */}
                </Container>

                <hr />

                <Container className='info'>
                    <Row>
                        <Col>
                            <h1 className='info-title'>{item.name}</h1> {/* Atributo do Objeto */}
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <img className='info-img' src={item.imageUrl} alt={item.name}/> {/* Atributo do Objeto */}
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default ReadSingle;