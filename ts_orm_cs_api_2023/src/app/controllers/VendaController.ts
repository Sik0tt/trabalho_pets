import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Venda from '../models/Venda';


class VendaController{

   

    async list(req: Request, res: Response){
        const repository = getRepository(Venda);
        const lista = await repository.find();
        return res.json(lista);
    }

    async delete(req: Request, res: Response){

        const repository = getRepository(Venda);//recupera o repositorio do venda.
        
        const id = req.params.id;
        
        const idExists = await repository.findOne({where :{id}});//consulta na tabela se existe um registro com o mesmo id da mensagem.

        if(idExists){
        
            await repository.remove(idExists);//caso exista, então aplica a remocao fisica. (corrigir erro no pdf 11)
            return res.sendStatus(204);//retorna o coigo 204.
        
        }else{
        
            return res.sendStatus(404);//se nao encontrar Venda para remover, retorna o codigo 404.
        }
    }

    async update(req: Request, res: Response){
    
        const repository = getRepository(Venda);//recupera o repositorio do venda.
    
        const {id} = req.body;//extrai os atributos id do corpo da mensagem
    
        const idExists = await repository.findOne({where :{id}});//consulta na tabela se existe um registro com o mesmo id.
        
        if(!idExists){
            return res.sendStatus(404);
        }
        
        const v = repository.create(req.body); //cria a entidade Venda
        
        await repository.save(v); //persiste (update) a entidade na tabela.
        
        return res.json(v);
    }

    
 



}

export default new VendaController();