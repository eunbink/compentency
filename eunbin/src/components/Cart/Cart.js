import React, { Component } from 'react';
import './Cart.css';


class Cart extends Component {
    render() {
        return (
            <div className='Cart'>
                <article>
                    <header>
                        Browse Inventory
                    </header>
                    <section>
                        <div>book goes here lists</div>
                        <div>book goes here lists</div>
                    </section>
                    <footer>
                        <button>+ADD New Book</button>
                    </footer>
                </article>
            </div>
        )
    }
}

export default Cart;
