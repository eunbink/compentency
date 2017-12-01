module.exports = {
    
    //--------------GET------------------//
    get_book: (req, res, next) => {    
        const db = req.app.get("db")
        db.get_book()
            .then(response => {
                // console.log(response);
                res.status(200).send(response)})
    },

    //-------------POST------------------//
    
    add_book: (req, res, next) => {        
        const { imgurl, imgpreview, title, author, genre, description } = req.body
        const db = req.app.get("db")
        db.add_book([ imgurl, imgpreview, title, author, genre, description ])
        .then(response => res.status(200).send(response))
        },

        
    //-----------PUT--------------------//
    edit_book: (req, res, next) => {          
        const { imgurl, imgpreview, title, author, genre, description} = req.body
        const db = req.app.get("db")
        db.edit_book([ imgurl, imgpreview, title, author, genre, description])
        .then(response => res.status(200).send(response))
        }, 

}   