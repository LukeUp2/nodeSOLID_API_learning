import { User } from "../entities/User";

//"Contrato" com os métodos que se comunicam com o banco
export interface IUsersRepository {

    findByEmail(email: string): Promise<User>
    save(user: User): Promise<void>
}