import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Cliente from '../models/Cliente';


class ClienteController{

   

    async list(req: Request, res: Response){
        const repository = getRepository(Cliente);
        const lista = await repository.find();
        return res.json(lista);
    }

    async update(req: Request, res: Response){
    
        const repository = getRepository(Cliente);//recupera o repositorio do venda.
    
        const cpf = req.body.cpf;//extrai os atributos id do corpo da mensagem
    
        const cpfExists = await repository.findOne({where :{cpf}});//consulta na tabela se existe um registro com o mesmo id.
        
        if(!cpfExists){
            return res.sendStatus(404);
        }
        
        const p = repository.create(req.body); //cria a entidade Venda
        
        await repository.save(p); //persiste (update) a entidade na tabela.
        
        return res.json(p);
    }

    async delete(req: Request, res: Response){

        const repository = getRepository(Cliente);//recupera o repositorio do venda.
        
        const cpf = req.params.cpf;
        
        const cpfExists = await repository.findOne({where :{cpf}});//consulta na tabela se existe um registro com o mesmo id da mensagem.

        if(cpfExists){
        
            await repository.remove(cpfExists);//caso exista, então aplica a remocao fisica. (corrigir erro no pdf 11)
            return res.sendStatus(204);//retorna o coigo 204.
        
        }else{
        
            return res.sendStatus(404);//se nao encontrar Venda para remover, retorna o codigo 404.
        }
    }

   
 
    async store(req: Request, res: Response){

        const repository = getRepository(Cliente);//recupera o repositorio do jogador.

        console.log(req.body);//imprime na saida padrão a mensagem recebida. Isso é apenas para teste...

        const {cpf} = req.body;//extrai os atributos nickname do corpo da mensagem.

        const cpfExists = await repository.findOne({where : {cpf}});//consulta na tabela se existe um registro com o mesmo nickname da mensagem.

        if(cpfExists){

            return res.sendStatus(409);//caso exista um registro, retorna 409 informando o conflito

        }

        const c = repository.create(req.body);//cria a entidade Jogador.

        await repository.save(c);//efetiva a operacao de insert.

        return res.json(c);//retorna o bojeto json no response.
        
    }
 


}

export default new ClienteController();