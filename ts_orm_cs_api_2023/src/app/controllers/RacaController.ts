import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Raca from '../models/Raca';


class RacaController{

   

    async list(req: Request, res: Response){
        const repository = getRepository(Raca);
        const lista = await repository.find();
        return res.json(lista);
    }

    async delete(req: Request, res: Response){

        const repository = getRepository(Raca);//recupera o repositorio do venda.
        
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
    
        const repository = getRepository(Raca);//recupera o repositorio do venda.
    
        const {id} = req.body;//extrai os atributos id do corpo da mensagem
    
        const idExists = await repository.findOne({where :{id}});//consulta na tabela se existe um registro com o mesmo id.
        
        if(!idExists){
            return res.sendStatus(404);
        }
        
        const r = repository.create(req.body); //cria a entidade Venda
        
        await repository.save(r); //persiste (update) a entidade na tabela.
        
        return res.json(r);
    }

    
    async store(req: Request, res: Response){

        const repository = getRepository(Raca);//recupera o repositorio do jogador.

        console.log(req.body);//imprime na saida padrão a mensagem recebida. Isso é apenas para teste...

        const {id} = req.body;//extrai os atributos nickname do corpo da mensagem.

        const idExists = await repository.findOne({where : {id}});//consulta na tabela se existe um registro com o mesmo nickname da mensagem.

        if(idExists){

            return res.sendStatus(409);//caso exista um registro, retorna 409 informando o conflito

        }

        const r = repository.create(req.body);//cria a entidade Jogador.

        await repository.save(r);//efetiva a operacao de insert.

        return res.json(r);//retorna o bojeto json no response.
        
    }

    async find(req: Request, res: Response){

        const repository = getRepository(Raca);
        const id = req.params.id;

        const r = await repository.findOne({where : {"id" : id}});

        if(r){
            return res.json(r)
        }else{
            return res.sendStatus(204);
        }
    }

}

export default new RacaController();