const { test, describe, it, mock } = require('node:test');
const assert = require('assert');
const request = require('supertest');
const app = require('../src/app');
const UserService = require('../src/services/userService')

const userService = new UserService();

describe('Test user routes', () => {

    test('Should return a 200 status code', async () => {
        const response = await request(app).get('/users')
        assert.strictEqual(response.statusCode, 200);
    });

    it('Should return an error on users routes', async () => {
            await it('Should return a 500 status code when invalid MongoID is provided', async () => {
                const response = await request(app).get('/users/3')
                assert.strictEqual(response.statusCode, 500);
            });

            await it('Should return a 404 status code', async () => {
                const response = await request(app).get('/user/id/873')
                assert.strictEqual(response.statusCode, 404);
            });
    })
});


it('Should return a user list', async () => {
    const getAllUsersMock = mock.fn(() => {
        return [{id: 1, name: "Alfredo", lastname: "Navarro", phone: "943391168", email: "alfredont1088@gmail.com"}];
    });
    mock.method(userService, 'getAll', getAllUsersMock);
    assert.deepStrictEqual(await userService.getAll(), [{id: 1, name: "Alfredo", lastname: "Navarro", phone: "943391168", email: "alfredont1088@gmail.com"}]);
})