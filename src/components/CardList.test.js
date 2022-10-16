import { shallow } from 'enzyme'
import CardList from './CardList'

it('expect to render CardList component', () => {
  const mockRobots = [
    { id: 1, name: 'Jon Snow', username: 'JohnJohn', email: 'jphn@gamil.com' },
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
})
