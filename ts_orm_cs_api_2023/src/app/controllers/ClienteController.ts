import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Cliente from '../models/Cliente';


class ClienteController{

   

    async list(req: Request, res: Response){
        const repository = getRepository(Cliente);
        const lista = await repository.find();
        return res.json(lista);
    }

    async delete(req: Request, res: Response){

        const repository = getRepository(Cliente);//recupera o repositorio do venda.
        
        const cpf = req.params.data_cpf;
        
        const cpfExists = await repository.findOne({where :{cpf}});//consulta na tabela se existe um registro com o mesmo id da mensagem.

        if(cpfExists){
        
            await repository.remove(cpfExists);//caso exista, então aplica a remocao fisica. (corrigir erro no pdf 11)
            return res.sendStatus(204);//retorna o coigo 204.
        
        }else{
        
            return res.sendStatus(404);//se nao encontrar Venda para remover, retorna o codigo 404.
        }
    }

    async update(req: Request, res: Response){
    
        const repository = getRepository(Cliente);//recupera o repositorio do venda.
    
        const {cpf} = req.body;//extrai os atributos id do corpo da mensagem
    
        const idExists = await repository.findOne({where :{cpf}});//consulta na tabela se existe um registro com o mesmo id.
        
        if(!idExists){
            return res.sendStatus(404);
        }
        
        const c = repository.create(req.body); //cria a entidade Venda
        
        await repository.save(c); //persiste (update) a entidade na tabela.
        
        return res.json(c);
    }

    
 



}

export default new ClienteController();