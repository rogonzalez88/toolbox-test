import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';
import FormMessage from './components/FormMessage'
import ListMessage from './components/ListMessage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={12}>
              <h1>Toolbox Test</h1>
              <Grid>
                <Row className="show-grid">
                  <Col xs={12} md={8}>
                    <p className="lead">Utilizar este formulario para enviar mensajes</p>
                    <FormMessage></FormMessage>
                  </Col>
                  <Col xs={6} md={4}>
                    <p className="lead">Mensajes Enviados</p>
                    <ListMessage></ListMessage>
                  </Col>
                </Row>
              </Grid>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
