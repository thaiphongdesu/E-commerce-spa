import React ,{ Component } from 'react';
import axios from 'axios';
import CardItem from './CardItem';
import { Container, Row, Col } from 'reactstrap';
import CardModal from './CartModal';

export default class Products extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        axios.get('https://45l83.sse.codesandbox.io/products').then(res=>{
            this.setState({
                products: res.data
            })
        });
    }   
    
    render(){
        const products = this.state.products;
        return(<div className='products-comp'>
            <div className='top-products'>
                <h2>Products</h2>
                <CardModal/>
            </div>
            <Container>
                <Row xs="1" sm="2" md="4">
                    {products.map(item=><Col><CardItem item={item}/></Col>)}
                </Row>
            </Container>
        </div>);
    }
}