import React, { Component } from "react";
import classNames from "classnames";
import css from "./ProductCard.module.css";

class ProductCard extends Component {
    constructor(props) {
        super(props);
    }
    
    render () {

        const { className, product } = this.props;

        return (
            <div className={classNames(css.ProductCard, className)}>
                <div className={css.ProductCard_header}>
                    <img src={product.image} alt ="Product"/>
                </div>
                <div className={css.ProductCard_body}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
                <button className={css.ProductCard_button}>Add to Cart</button>
            </div>
        )
    }


}

export default ProductCard;