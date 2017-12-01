import React, { Component } from 'react';
import './Addbook.css';




class Addbook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ""
        }
        this.inputValue= this.inputValue.bind(this);
  
    }
    inputValue(value){
        return this.setState({input:value});
    }

    render() {
        return (
            <div className='Addbook'>
                   <article>
                    <header className="addbook-header">
                       Add A Book
                    </header>
                    <section className="inputsection">
                        <div id="left">
                        <p>img URL</p>
                        <input onChange={(e)=>{this.inputValue(e.target.value)}}/>
                        <p>img preview</p>
                        </div>
                        <div id="right">
                        <p>title</p>
                        <input onChange={(e)=>{this.inputValue(e.target.value)}}/>
                        <p>Author</p>
                        <input onChange={(e)=>{this.inputValue(e.target.value)}}/>
                        <p>Genre</p>
                        <input onChange={(e)=>{this.inputValue(e.target.value)}}/>
                        <p>Description</p>
                        <input onChange={(e)=>{this.inputValue(e.target.value)}}/>
                        </div>
                        <footer>
                        <button className="inventory">+ADD New Book To Inventory</button>
                    </footer>
                    </section>
                    
                </article>
            </div>
        )
    }
}

export default Addbook;