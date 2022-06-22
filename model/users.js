const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/projetoweb3', (err, conn) => {
    if (err) throw err;
    const db = conn.db();

    //insere um item no banco de dados
    db.collection('posts').insertOne({ nome: 'Ada', idade: 24 }, (err, res) => {
        if (err) throw err;
        console.log('Insert sucessful!');
        conn.close();
    });
});