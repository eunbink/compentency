import React, { Component } from 'react';
import './Myshelf.css';


class Myshelf extends Component {
    render() {
        return (
            <div className='Myshelf'>
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

export default Myshelf;
