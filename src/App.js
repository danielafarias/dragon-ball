import React from 'react';

// Routes
import { Switch, Route } from 'react-router-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

//Components
import Create from './Components/Create/Create';
import ReadAll from './Components/ReadAll/ReadAll';
import ReadSingle from './Components/ReadSingle/ReadSingle';
import Update from './Components/Update/Update';
import Delete from './Components/Delete/Delete';
import DeleteAll from './Components/DeleteAll/DeleteAll';
import About from './Components/About/About.js';

//Assets
import logo from './Img/logo.png';

// Styles
import './Styles/App.scss';


function App() {
  return (
    <>
      <div className='logoBar'> {/* Barra onde o logo ficará */}
        <img className='logoImg' src={logo} alt='Dragon Ball anime logo'/> {/* Importa o logo*/}
      </div>

      <Navbar className='justify-content-center' expand='sm'> {/* Mantém a barra de navegação no centro e a expansão definida em small = pequena */}
        <Nav>
          <Nav.Link id='link-style' href='/'>Inicio</Nav.Link> { /* Links de navegação usadas na barra */}
          <Nav.Link id='link-style' href='/create'>Criar</Nav.Link>
          <Nav.Link id='link-style' href='/delete-all'>Deletar Tudo</Nav.Link>
          <Nav.Link id='link-style' href='/about'>Sobre</Nav.Link>
        </Nav>
      </Navbar>

      <Container className='app-container'> {/* Reparte a parte do body que será utilizado para cada conteúdo em cada rota */}
        <Row> {/* Linha */}
          <Col> {/* Coluna */}
          <Switch> {/* Troca as rotas da aplicação */}
            <Route path='/' exact={true} component={ReadAll}></Route> {/* GET = READ */}
            <Route path='/create' component={Create}></Route> {/* POST = CREATE */}
            <Route path='/delete-all' component={DeleteAll}></Route> {/* DELETE */}
            <Route path='/about' component={About}></Route> {/* GET */}
            <Route path='/view/:id' component={ReadSingle}></Route> {/* GET UM ITEM = READ SINGLE */}
            <Route path='/delete/:id' component={Delete}></Route> {/* DELETE UM ITEM = DELETE SINGLE */}
            <Route path='/update/:id' component={Update}></Route> {/* UPDATE = PUT */}
          </Switch>
          </Col> 
        </Row>
      </Container>

    </>
  );
}

export default App;
