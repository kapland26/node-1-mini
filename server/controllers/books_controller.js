let books = [];
let id = 0;

module.exports = {
    read: (req, res)=>{
        res.status(200).send(books);
    },
     create: (req, res)=>{
        const {title, author } =req.body;
        let book = {
            id : id,
            title: title,
            author: author
        }
        books.push(book);
        id++;
        res.status(200).send(books);
    },
    update: (req, res)=>{
        const {title, author } =req.body;
        const updateID = req.params.id;

        const bookInd = books.findIndex( book => book.id==updateID);
        book = books[bookInd];

        books[bookInd] = {
            id: book.id,
            title: title || book.title,
            author: author || book.author
        }
        res.status(200).send( books );
    },
    delete: (req, res)=>{
        const deleteID = req.params.id;
        const bookInd = books.findIndex( book => book.id==deleteID);
        if (bookInd != -1){
            books.splice(bookInd,1);
            res.status(200).send( books );
        }else{
            res.status(400).send("ID Does not exist");
        }
    }
};