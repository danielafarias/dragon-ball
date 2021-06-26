// Componentes
import { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import ItemCard from './ItemCard';
import { Api } from '../../Api/Api';

// Imagem
import loading from '../../Img/loading.svg';
import homeImg from '../../Img/homeImg.png';

// Style
import '../../Styles/ItemCard.scss';
import '../../Styles/ReadAll.scss';


class ReadAll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,  // Por que começa com true? 
                             // Porque este componente depende de outros para ser acionado, 
                            //ou seja, ele já é iniciado acionando a request de Get.
            item: [] // Os objetos serão colocados em uma lista
        }
    }

    async componentDidMount () {
        const request = await Api.buildApiGetRequest(Api.readAllUrl()); // Request para ler todas as urls/ itens do banco

        const items = await request.json(); // Estes objetos são items

        const itemsWithImageUrl = items.filter(item => Boolean(item.imageUrl)); // Filtra apenas os itens que TEM a propriedade imageUrl true, ou seja tem imagem

        this.setState({
            isLoading: false, // Após o request finalizado retorna a página carregada
            items: itemsWithImageUrl, // A lista de itens guardará os itens filtrados
            filteredItems: itemsWithImageUrl // Itens filtrados
        })
    }

    filterItems = e => {
        const searchValue = e.target.value?.toLowerCase(); // O alvo é parametro colocado no search
    
        const filteredItems = this.state.items.filter(item => // Filtra os itens com o valor
          item.name?.toLowerCase().includes(searchValue),
        );
    
        this.setState({
          filteredItems, // E devolve nos itens filtrados apenas esses com o valor de parametro
        });
      };

    render() {

        const { isLoading, filteredItems } = this.state; // Pega o estado de carregamento e itens filtrados

        if (isLoading) { // SE AINDA TIVER CARREGANDO:
            return (
                <Container>
                    <Row>
                        <img className="loading" src={loading} alt='Carregando'/> {/* RETORNARÁ IMG DE LOADING */}
                    </Row>
                </Container>
            );
        } else { // SE JA TIVER CARREGADO:
            if (filteredItems === false) { // SE NÃO HOUVER ITENS FILTRADOS
                return (
                    <Container>
                        <Row>
                            <p className='noData'>Não há personagens cadastrados!</p> {/* RETORNARÁ ESSA MENSAGEM */}
                            <img className="noData" src={homeImg} alt='Mestre Kame'/>
                        </Row>
                    </Container>
                );
            } else { // SE TIVER ITENS FILTRADOS
                return (
                    <Container>
                        <Row>
                            {filteredItems.map(item => (
                                <ItemCard item={item} key={item._id} /> 
                            ))} {/* RETORNARÁ O CARD DE CADA ITEM POR PERCORRIDOS POR ID */}
                        </Row>
                    </Container>
                );
            }
        }
    }
}

export default ReadAll;