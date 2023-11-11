import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Pessoa from '../models/Pessoa';


class PessoaController{

   

    async list(req: Request, res: Response){
        const repository = getRepository(Pessoa);
        const lista = await repository.find();
        return res.json(lista);
    }

    async delete(req: Request, res: Response){

        const repository = getRepository(Pessoa);//recupera o repositorio do venda.
        
        const cpf = req.params.cpf;
        
        const cpfExists = await repository.findOne({where :{cpf}});//consulta na tabela se existe um registro com o mesmo id da mensagem.

        if(cpfExists){
        
            await repository.remove(cpfExists);//caso exista, então aplica a remocao fisica. (corrigir erro no pdf 11)
            return res.sendStatus(204);//retorna o coigo 204.
        
        }else{
        
            return res.sendStatus(404);//se nao encontrar Venda para remover, retorna o codigo 404.
        }
    }

    async update(req: Request, res: Response){
    
        const repository = getRepository(Pessoa);//recupera o repositorio do venda.
    
        const {cpf} = req.body;//extrai os atributos id do corpo da mensagem
    
        const cpfExists = await repository.findOne({where :{cpf}});//consulta na tabela se existe um registro com o mesmo id.
        
        if(!cpfExists){
            return res.sendStatus(404);
        }
        
        const p = repository.create(req.body); //cria a entidade Venda
        
        await repository.save(p); //persiste (update) a entidade na tabela.
        
        return res.json(p);
    }

    
 



}

export default new PessoaController();