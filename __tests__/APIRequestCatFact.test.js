const request = require('supertest');
const APIUrl = "https://catfact.ninja/"


describe('Cat fact API requests test', () => {
    test('Should list the cat breeds', async () => {
        const res = await request(APIUrl).get('breeds?limit=1').expect(200)
        expect(res.body.data[0]).toHaveProperty('breed')
    })
    test('should return a random fact about cats', async () => {
        const res = await request(APIUrl).get('fact')
        expect(res.body).toHaveProperty("fact")
    })
})