import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Venda from '../models/Venda';


class VendaController{

    async find(req: Request, res: Response){
        const repository = getRepository(Venda);

        const nickname = req.params.nickname;

        const j = await repository.createQueryBuilder('tb_jogador').where({"nickname" : nickname}).innerJoinAndSelect("tb_jogador.endereco", "endereco").leftJoinAndSelect("tb_jogador.patentes", "patente").getOne();

        if(j){     
            console.log(j);      
            return res.json(j);
        }else{
            return res.sendStatus(204);
        }
    }

    async login(req: Request, res: Response){
        const repository = getRepository(Venda);

        const {nickname, senha} = req.body;
        const j = await repository.findOne(
            {where : {"nickname" : nickname, "senha" : senha }});

        if(j){           
          //  res.sendStatus(201);
            return res.json(j);
        }else{
            return res.sendStatus(204);
        }
    }

  
    async list(req: Request, res: Response){
        const repository = getRepository(Venda);

        const lista = await repository.createQueryBuilder('tb_jogador').innerJoinAndSelect("tb_jogador.endereco", "endereco").leftJoinAndSelect("tb_jogador.patentes", "patente").getMany();

        return res.json(lista);
    }

    async delete(req: Request, res: Response){

        const repository = getRepository(Venda);//recupera o repositorio do jogador.
        
        const nickname = req.params.nickname;
        
        const nicknameExists = await repository.findOne({where :{nickname}});//consulta na tabela se existe um registro com o mesmo nickname da mensagem.

        if(nicknameExists){
        
            await repository.remove(nicknameExists);//caso exista, então aplica a remocao fisica. (corrigir erro no pdf 11)
            return res.sendStatus(204);//retorna o coigo 204.
        
        }else{
        
            return res.sendStatus(404);//se nao encontrar jogador para remover, retorna o codigo 404.
        }
    }

    async update(req: Request, res: Response){
    
        const repository = getRepository(Venda);//recupera o repositorio do jogador.
    
        const {nickname} = req.body;//extrai os atributos id do corpo da mensagem
    
        const nicknameExists = await repository.findOne({where :{nickname}});//consulta na tabela se existe um registro com o mesmo nickname.
        
        if(!nicknameExists){
            return res.sendStatus(404);
        }
        
        const j = repository.create(req.body); //cria a entidade Jogador
        
        await repository.save(j); //persiste (update) a entidade na tabela.
        
        return res.json(j);
    }

    async store(req: Request, res: Response){

        const repository = getRepository(Venda);//recupera o repositorio do Patente.


        const {nickname} = req.body;//extrai os atributos id do corpo da mensagem

        const nicknameExists = await repository.findOne({where : {nickname}});//consulta na tabela se existe um registro com o mesmo nickname da mensagem.

        
    }
 



}

export default new VendaController();