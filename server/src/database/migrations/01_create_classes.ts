import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable(); //Matéria dada
        table.decimal('cost').notNullable();  //Hora aula

        //Interação em tabelas ( Famosa Chave estrangeira)
        table.integer('user_id')
            .notNullable()
            .references('id')        //Qual é a chave de interação
            .inTable('users')       //Com que tabela ta interagindo
            .onUpdate('CASCADE')   // se o id for alterado, alterado tudo tbm 
            .onDelete('CASCADE'); //Deleta tudo, caso o professor seja deletado
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
}