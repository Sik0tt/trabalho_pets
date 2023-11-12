import {Router} from 'express';
import ClienteController from './app/controllers/ClienteController';
import FuncionarioController from './app/controllers/FuncionarioController';
import PagamentoController from './app/controllers/PagamentoController';
import PessoaController from './app/controllers/PessoaController';
import PetController from './app/controllers/PetController';
import RacaController from './app/controllers/RacaController';
import VendaController from './app/controllers/VendaController';

const router = Router();


router.get('/listcliente', ClienteController.list)
router.post('/storecliente', ClienteController.store)
router.delete('/deletecliente/:cpf', ClienteController.delete)
router.put('/updatecliente/:cpf', ClienteController.update)



router.get('/listfuncionario', FuncionarioController.list)
router.post('/funcionario/store', FuncionarioController.store)
router.delete('/deletefuncionario/cpf', FuncionarioController.delete)
router.put('/updatefuncionario/cpf', FuncionarioController.update)


router.get('/listpessoa', PessoaController.list)
router.post('/pessoa/store', PessoaController.store)
router.delete('/deletepessoa/:cpf', PessoaController.delete)
router.put('/updatepessoa/:cpf', PessoaController.update)

router.get('/listpagamento', PagamentoController.list)
router.post('/pagamento/store', PagamentoController.store)
router.delete('/deletepagamento/:cartao_debito', PagamentoController.delete)
router.put('/updatepagamento/cartao_debito', PagamentoController.update)

router.get('/listpet', PetController.list)
router.post('/pet/store', PetController.store)
router.delete('/deletepet/:id', PetController.delete)
router.put('/updatepet/:id', PetController.update)

router.get('/listraca', RacaController.list)
router.post('/raca/store', RacaController.store)
router.delete('/deleteraca/:id', RacaController.delete)
router.put('/updateraca/:id', RacaController.update)

//http://localhost:3000/venda/list
router.get('/listvenda', VendaController.list);
router.post('/venda/store', VendaController.store)
router.get('/deletevenda/:id', VendaController.delete);
router.put('/updatevenda/:id', VendaController.update);






export default router;