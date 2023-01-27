import 'reflect-metadata';
import { DataSource } from 'typeorm';
// import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'postgres',
    synchronize: true, // 서버 실행 시 table, column 변경 시 적용,운영환경에선 false(sync맞추다가 데이터가 없어질 수 있으므로),
    logging: false, //로그 남기는것
    entities: ['src/entities/**/*.ts'], //[User]와 같이 1개만 넣을 수도 있음
    migrations: [],
    subscribers: [],
});
