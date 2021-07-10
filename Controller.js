const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
let user = models.User;
let tracking = models.Tracking;
let product = models.Product;

app.get('/', (req, res) => {
    res.send('Meu servidor backend já está rodando!');

});



let db = require('./routes/conn');
var sql = require("mssql");
const { response } = require('express');
app.post('/logado', async (req, res) => {

    const pullTable = async () => {
        const pool = await sql.connect(db.db);
        const nome = req.query.name;
        const sqlQuery = `SELECT top 1 * FROM USUARIO_EMPREENDEDOR WHERE login = '${nome}'`;
        const result = await pool.request().query(sqlQuery);
        console.log(result);
    }
    pullTable();
});



app.post('/login', async (req, res) => {
    console.log(req);
    let response = await user.findOne({
        where: {
            name: req.query.name,
            password: req.query.password
        }
    });

    if (response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
    }

});

app.post('/verifyPass', async (req, res) => {
    let response = await user.findOne({
        where: {
            id: req.query.id,
            password: req.query.verificacao
        }
    });
    if (response === null) {
        res.send(JSON.stringify('Código inválido'));
    } else {
        if (req.query.novaSenha === req.query.confNovaSenha) {
            response.password = req.query.novaSenha;
            response.save();
            res.send(JSON.stringify('Senha atualizada com sucesso!'));
        } else {
            res.send(JSON.stringify('Nova Senha e Confirmação não conferem!'));
        }
    }
});

app.get('/teste', async (req, res) => {
    console.log(req.query);
});


app.get('/create', async (req, res) => {
    let create = await user.create({
        name: "joao",
        password: "abc",
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.send('Usuário criado com sucesso!');
});

app.get('/read', async (req, res) => {
    let read = await user.findAll({
        raw: true,
    });
    console.log(read);
});

app.get('/update', async (req, res) => {
    let update = await user.findByPk(2,
        { include: [{ all: true }] }
    ).then((response) => {
        response.Trackings[0].local = 'Nova Cidade';
        response.Trackings[0].save();
    });
});

app.get('/delete', async (req, res) => {
    user.destroy({
        where: { id: 2 }
    });
});

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('Servidor Rodando');
});


