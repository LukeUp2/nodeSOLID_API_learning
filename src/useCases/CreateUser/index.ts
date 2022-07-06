import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostGresUsersRepository } from "../../repositories/implementations/PostGresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailTrapMailProvider();
const postgresUsersRepository = new PostGresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider
)


const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }