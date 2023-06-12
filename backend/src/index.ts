import * as express from "express"
import * as bodyParser from "body-parser"
import { AppDataSource } from "./data-source"
import  routes  from "./routes"
import * as cors from 'cors'


const app = express();
app.use(cors())

AppDataSource.initialize().then(connection => {
  console.log('Conexão com o banco de dados estabelecida com sucesso');
}).catch(error => {
  console.error('Erro ao estabelecer conexão com o banco de dados:', error);
  process.exit(1); 
});

app.use(bodyParser.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Servidor em execução na porta 3333');
});