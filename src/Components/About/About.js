// Componentes
import { Component } from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

// Style
import '../../Styles/About.scss'

// Imagem
import pp from '../../Img/pp.jpeg'


class About extends Component {
    render() {
        return (
            <Card>
                <Card.Img variant="top" src={pp} /> {/* Imagem do Card, onde ficará no topo e com a foto do src */}

                <Card.Body> {/* Corpo do Card */}

                    <Card.Title>Daniela Cristina de Farias</Card.Title> {/* Titulo do Card */}

                    <Card.Text> {/* Texto de descrição do Card */}
                        Estudante de Desenvolvimento Web na Blue Edtech, 20 anos, INFP e Libriana, que ama doces, 
                        animais, arte, design, jogos e música (apenas uma ouvinte infelizmente). 🐰✨
                        <br/>
                        Programo há pouco tempo, mas desde então apaixonada em Front-end e Desenvolvimento de Jogos. 👩🏻‍💻
                    </Card.Text>

                    <Link className='btn btn-info' to={{pathname: "https://github.com/danielafarias"}} target='_blank'>Meu GitHub 🌙</Link> 
                    {/* Botão de informação que redicionará o usuario à uma aba nova com o meu github */}

                </Card.Body>

            </Card>
        )
    }
}

export default About;