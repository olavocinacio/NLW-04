import { Column, Entity, PrimaryColumn, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")

class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;
 
    @Column()
    email: string;
    
    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id) {
            this.id = uuid(); //Se esse id não existe, ele é criado
        }
    }
}

export { User }