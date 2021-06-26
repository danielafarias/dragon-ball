// Componentes
import { Component } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';

// Style
import '../../Styles/ItemCard.scss';


class ItemCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            item: this.props.item // Chama as propriedas dos itens
        }
    }

    render() {
        const { item } = this.state; // Pega o item do estado

        return(
            <Col xs='12' sm='6' md='4' lg='3'> {/* Define os tamanhos e quantidades dos cards conforme o tamanho da pagina */}
                <Route
                    render={({ history }) => (
                        // O history do objeto será utilizado para localizar a rota do objeto para cada,
                        // card. Dando a cada card sua rota propria combinada com a rota do item;

                        <Card className='item-card' onClick={() => {history.push(`/view/${item._id}`)}}>

                            <Card.Img  src={item.imageUrl}></Card.Img> {/* Propriedade do item */}

                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title> {/* Propriedade do item */}
                            </Card.Body>

                        </Card>
                    )}
                />
            </Col>
        );
    }
}

export default ItemCard