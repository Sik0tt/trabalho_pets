import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Pagamento from '../models/Pagamento';


class PagamentoController{

   

    async list(req: Request, res: Response){
        const repository = getRepository(Pagamento);
        const lista = await repository.find();
        return res.json(lista);
    }

    async delete(req: Request, res: Response){

        const repository = getRepository(Pagamento);//recupera o repositorio do venda.
        
        const cartao_debito = req.params.cartao_debito;
        
        const cartao_debitoExists = await repository.findOne({where :{cartao_debito}});//consulta na tabela se existe um registro com o mesmo id da mensagem.

        if(cartao_debitoExists){
        
            await repository.remove(cartao_debitoExists);//caso exista, então aplica a remocao fisica. (corrigir erro no pdf 11)
            return res.sendStatus(204);//retorna o coigo 204.
        
        }else{
        
            return res.sendStatus(404);//se nao encontrar Venda para remover, retorna o codigo 404.
        }
    }

    async update(req: Request, res: Response){
    
        const repository = getRepository(Pagamento);//recupera o repositorio do venda.
    
        const {cartao_debito} = req.body;//extrai os atributos id do corpo da mensagem
    
        const cartao_debitoExists = await repository.findOne({where :{cartao_debito}});//consulta na tabela se existe um registro com o mesmo id.
        
        if(!cartao_debitoExists){
            return res.sendStatus(404);
        }
        
        const p = repository.create(req.body); //cria a entidade Venda
        
        await repository.save(p); //persiste (update) a entidade na tabela.
        
        return res.json(p);
    }

    
 



}

export default new PagamentoController();