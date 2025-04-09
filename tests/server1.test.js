import { app } from "../server";
import request from 'supertest';
import {expect, test} from 'vitest';


test('Basic test', () =>{    
    request(app)
    .get('/')
    .expect(200)
    .end((err,resp) =>{
        if(err) throw err
        expect(resp.text).equals('Hello world');
    })
})