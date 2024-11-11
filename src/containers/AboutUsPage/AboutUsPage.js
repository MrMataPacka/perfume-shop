import css from './AboutUsPage.module.css';
import { ProductCard } from "../../components";
import { products } from "../../utils/products";


const AboutUsPage = () => {
    return (
        <div className={css.App}>
            <h1 className={css.AppTitle}>About Us</h1>
            <p>Tienda Kawaii para necesidades bonitas.</p>
            
            <div className={css.ProductList}>
                {products.map ((product) => {
                    return <ProductCard key={product.id} product={product} className={css.ProductList_card}/>
                })}
            </div>
            
        </div>
    );
}

export default AboutUsPage;

