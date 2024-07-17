import { Usuarios } from "./usuarios";

export interface Token {
    exp: string
    data: Usuarios
}