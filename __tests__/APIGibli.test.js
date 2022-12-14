const request = require('supertest');
const url = "https://ghibliapi.herokuapp.com"

describe("GET /films/{id}", () => {
    test("Should get and return 200 My Neighbor Totoro ", () => {
        request(url)
            .get("/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
            .expect(200)
            .then(response => {
                expect(response.body.title).toEqual("My Neighbor Totoro")
            })
    })
    test("Invalid id Should return 404 ", () => {
        request(url)
            .get("/films/0")
            .expect(404)
            .then(response => {
                expect(response.statusCode).toEqual(404)
            })
    })
})

describe("GET /people", () => {
    test("deve retornar 200 e encontrar a personagem Chihiro", () => {
        request(url)
            .get("/people")
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({
                    "name": "Chihiro Ogino"
                })]))
            })
    })
})