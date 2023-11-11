import {Router} from 'express';
import ClienteController from './app/controllers/ClienteController';
import FuncionarioController from './app/controllers/FuncionarioController';
import PessoaController from './app/controllers/PessoaController';
import VendaController from './app/controllers/VendaController';

const router = Router();

//http://localhost:3000/Cliente/list
router.get('/cliente/list', ClienteController.list);
router.delete('/cliente/delete', ClienteController.delete)


//http://localhost:3000/local/list
router.get('/funcionario/list', FuncionarioController.list);



router.get('/pessoa/list', PessoaController.list);




//http://localhost:3000/venda/list
router.get('/listvenda', VendaController.list);
router.get('/deletevenda/:id', VendaController.delete);
router.post('/updatevenda/', VendaController.update);






export default router;