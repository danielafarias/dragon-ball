import { Container, Col, Row } from 'react-bootstrap';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../../Api/Api';
import '../../Styles/ReadSingle.scss';

class ReadSingle extends Component {

    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;

        this.state = {
            isLoading: true,
            item: {}
        };
    }

    async componentDidMount() {
        const request = await Api.buildApiGetRequest(
            Api.readSingleUrl(this.id)
        );

        const item = await request.json();

        this.setState({
            isLoading: false,
            item
        });
    }

    render() {

        const { isLoading, item } = this.state;

        return (
            <>
                <Container className='actions'>
                    <Link className='btn btn-info' to={'/update/' + item._id}>Editar</Link>
                    <Link className='btn-danger' to={'/delete' + item._id}>Excluir</Link>
                </Container>

                <Container className='info'>
                    <Row>
                        <Col>
                            <h1 className='info-title'>{item.name}</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <img className='info-img' src={item.imageUrl} alt={item.name}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default ReadSingle;