import React, { Component } from 'react';
import './Browse.css';
import Nav from './../Nav/Nav.js'
import router from './../../router.js'
import { connect } from 'react-redux';
import { getBooks } from './../../ducks/reducer.js';

class Browse extends Component {
    constructor() {
        super();
        this.state = {
          books:[]
        }
      }
    
    render() {
        const booksDisplayed = this.props.books.map((books, i) => {
            <section>
                <div>books.imgurl</div>
                <div>books.imgurl</div>
                <div>books.imgurl</div>
                <div><button>Details</button></div>

            </section>
          })
       
        return (

            <div className='Browse'>
                <article>
                    <header>
                       Browse Inventory
                    </header>
                    {booksDisplayed}
                    <footer>
                        <button>+ADD New Book</button>
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
  
