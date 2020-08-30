import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable(); // 0 a 6 é o dia da semana, 0 é domingo e 6 sabado
        table.integer('from').notNullable(); // Que horas começa a atender
        table.integer('to').notNullable(); // Que horas termina de atender

        //Interação em tabelas ( Famosa Chave estrangeira)
        table.integer('class_id')
            .notNullable()
            .references('id')        //Qual é a chave de interação
            .inTable('classes')     //Com que tabela ta interagindo
            .onUpdate('CASCADE')   // se o id for alterado, alterado tudo tbm 
            .onDelete('CASCADE'); //Deleta tudo, caso o professor seja deletado
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('class_schedule');
}