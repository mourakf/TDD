const axios = require('axios');
jest.mock('axios')

const mockUsers = [{
  name: 'Alice',
  age: 25
}];
const mockResponse = {
  data: mockUsers
};
describe('Mock test API Users', () => {
  test('Should return all users', async () => {
    axios.get('/users.json') // retorna undefined
    let data = await axios.get.mockResolvedValue(mockResponse)
    expect(data).toHaveProperty('name')

  })
})
