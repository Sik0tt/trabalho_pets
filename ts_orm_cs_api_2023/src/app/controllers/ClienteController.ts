import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Cliente from '../models/Cliente';


class ClienteController{

   

    async list(req: Request, res: Response){
        const repository = getRepository(Cliente);
        const lista = await repository.find();
        return res.json(lista);
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