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
        
        const pastor_alemao = req.params.pastor_alemao;
        
        const pastor_alemaoExists = await repository.findOne({where :{pastor_alemao}});//consulta na tabela se existe um registro com o mesmo id da mensagem.

        if(pastor_alemaoExists){
        
            await repository.remove(pastor_alemaoExists);//caso exista, então aplica a remocao fisica. (corrigir erro no pdf 11)
            return res.sendStatus(204);//retorna o coigo 204.
        
        }else{
        
            return res.sendStatus(404);//se nao encontrar Venda para remover, retorna o codigo 404.
        }
    }

    async update(req: Request, res: Response){
    
        const repository = getRepository(Raca);//recupera o repositorio do venda.
    
        const {pastor_alemao} = req.body;//extrai os atributos id do corpo da mensagem
    
        const pastor_alemaoExists = await repository.findOne({where :{pastor_alemao}});//consulta na tabela se existe um registro com o mesmo id.
        
        if(!pastor_alemaoExists){
            return res.sendStatus(404);
        }
        
        const r = repository.create(req.body); //cria a entidade Venda
        
        await repository.save(r); //persiste (update) a entidade na tabela.
        
        return res.json(r);
    }

    
 



}

export default new RacaController();