import React from 'react';
import ProductCard from './productCard';

// Tasks of the day
// Implement at least 2 components of your components diagram (both on functional and class syntaxes)
// Implement events on each component (at least "onclick" both on functional an class syntaxes)
// Implement rudimentary styling on each component
// Add state management to each component (check "state" on video resources)
// Define Props for every component in the app

// Class component 

class ProductList extends React.Component {

    

    constructor(props) {
        super(props)
        this.state = {
            products: [],
        }

        this.retrieveProducts = async () => {
            this.setState({ products: this.props.products });
        };
    }

    
    
    componentDidMount() {
        this.retrieveProducts();
    }

    render(){
        var productsList = [];
        this.state.products.forEach((prod) => {
            productsList.push(
                <ProductCard key={prod.id} productName={prod.productName} productImg={prod.productImg}/>
          );
        });
        return(
            <>
            <div>
                { productsList }
            </div> 
            </>
        )
    }
}

export default ProductList;