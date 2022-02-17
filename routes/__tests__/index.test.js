var app = require('../../app');

const supertest = require('supertest');

describe('Index Route', () => {

    it("GET /", async () => {

        await supertest(app).get("/")
        .expect(200)
        .then((response) => {
            expect(response.text).toEqual("Hello world!");
        });

    });
});