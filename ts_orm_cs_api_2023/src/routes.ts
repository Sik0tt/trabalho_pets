import {Router} from 'express';
import ClienteController from './app/controllers/ClienteController';
import FuncionarioController from './app/controllers/FuncionarioController';
import PagamentoController from './app/controllers/PagamentoController';
import PetController from './app/controllers/PetController';
import RacaController from './app/controllers/RacaController';
import VendaController from './app/controllers/VendaController';

const router = Router();


router.get('/listcliente', ClienteController.list)
router.post('/cliente/store', ClienteController.store)
router.put('/updatecliente', ClienteController.update)
router.delete('/deletecliente/:cpf', ClienteController.delete)

//http://localhost:3000/local/list
router.get('/listfuncionario', FuncionarioController.list)
router.post('/funcionario/store', FuncionarioController.store)
router.post('/loginfuncionario', FuncionarioController.login);
router.put('/updatefuncionario', FuncionarioController.update)
router.delete('/deletefuncionario/:cpf', FuncionarioController.delete)


router.get('/listpagamento', PagamentoController.list)
router.post('/pagamento/store', PagamentoController.store)
router.delete('/deletepagamento/:id', PagamentoController.delete)
router.put('/updatepagamento', PagamentoController.update)
router.get('/findpagamento/:id', PagamentoController.find);

router.get('/listpet', PetController.list)
router.post('/pet/store', PetController.store)
router.delete('/deletepet/:id', PetController.delete)
router.put('/updatepet', PetController.update)
router.get('/findpet/:id', PetController.find);

router.get('/listraca', RacaController.list)
router.post('/raca/store', RacaController.store)
router.delete('/deleteraca/:id', RacaController.delete)
router.put('/updateraca', RacaController.update)
router.get('/findraca/:id', RacaController.find);

//http://localhost:3000/venda/list
router.get('/listvenda', VendaController.list);
router.post('/venda/store', VendaController.store)
router.put('/updatevenda', VendaController.update);
router.get('/findvenda/:id', VendaController.find);
router.delete('/deletevenda/:id', VendaController.delete)






export default router;