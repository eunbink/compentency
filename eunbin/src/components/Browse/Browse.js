import React, { Component } from 'react';
import './Browse.css';
import { connect } from 'react-redux';
import { getBooks } from './../../ducks/reducer.js';
import { NavLink } from 'react-router-dom';

class Browse extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        }
    }
    componentDidMount() {
        this.props.getBooks();
    }


    render() {
        const booksDisplayed = this.props.books.map((books, i) => {
            return (
                <div>
                    <section>
                        <div>{books.genre}</div>
                        <div>{books.imgpreview}</div>
                        <div>{books.title}</div>
                        <div>{books.author}</div>
                        <div><button className="detailbutton">Details</button></div>
                    </section>
                    
                </div>
            
            )
        })

        return (

            <div className='Browse'>
                <article>
                    <header>
                        Browse Inventory
                    </header>
                   {booksDisplayed}
                   <footer>
                   <NavLink activeClassName='active' to='/Addbook'><button >+Add New Book</button></NavLink>
                    </footer>
                </article>
            </div>

        )
    }
}

function mapStateToProp(state) {
    return {
        books: state.books
    }
}

export default connect(mapStateToProp, { getBooks })(Browse);

