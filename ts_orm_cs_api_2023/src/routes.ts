import {Router} from 'express';
import ClienteController from './app/controllers/ClienteController';
import FuncionarioController from './app/controllers/FuncionarioController';
import PagamentoController from './app/controllers/PagamentoController';
import PessoaController from './app/controllers/PessoaController';
import PetController from './app/controllers/PetController';
import RacaController from './app/controllers/RacaController';
import VendaController from './app/controllers/VendaController';

const router = Router();

//http://localhost:3000/Cliente/list
router.get('/listcliente', ClienteController.list)
router.delete('/deletecliente/:id', ClienteController.delete)
router.post('/updatecliente', ClienteController.update)


//http://localhost:3000/local/list
router.get('/listfuncionario', FuncionarioController.list)
router.delete('/deletefuncionario/id', FuncionarioController.delete)
router.post('/updatefuncionario', FuncionarioController.update)


router.get('/pessoa/list', PessoaController.list)
router.delete('/deletepessoa/:id', PessoaController.delete)
router.post('/updatepessoa', PessoaController.update)

router.get('/listpagamento', PagamentoController.list)
router.delete('/deletepagamento/:id', PagamentoController.delete)
router.post('/updatepagamento', PagamentoController.update)

router.get('/listpet', PetController.list)
router.delete('/deletepet/:id', PetController.delete)
router.post('/updatepet', PetController.update)

router.get('/listraca', RacaController.list)
router.delete('/deleteraca/:id', RacaController.delete)
router.post('/updateraca', RacaController.update)

//http://localhost:3000/venda/list
router.get('/listvenda', VendaController.list);
router.get('/deletevenda/:id', VendaController.delete);
router.post('/updatevenda/', VendaController.update);






export default router;