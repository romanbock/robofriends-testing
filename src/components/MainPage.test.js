import { shallow } from 'enzyme'
import MainPage from './MainPage'

let wrapper
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchFields: '',
    isPending: false,
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders MainPage without crashing ', () => {
  expect(wrapper).toMatchSnapshot()
})

it('filters robots correctly', () => {
  expect(wrapper.instance().filterRobots()).toEqual([])
  const mockPropsWithSearchTerm = {
    onRequestRobots: jest.fn(),
    robots: [{ id: 3, name: 'John', email: 'john@gmail.com' }],
    searchField: 'john',
    isPending: false,
  }
  const wrapperWithSearchTerm = shallow(
    <MainPage {...mockPropsWithSearchTerm} />
  )

  expect(wrapperWithSearchTerm.instance().filterRobots()).toEqual([
    { id: 3, name: 'John', email: 'john@gmail.com' },
  ])
})

it('filters robots correctly with empty filtered robots', () => {
  expect(wrapper.instance().filterRobots()).toEqual([])
  const mockPropsWithSearchTerm = {
    onRequestRobots: jest.fn(),
    robots: [{ id: 3, name: 'John', email: 'john@gmail.com' }],
    searchField: 'a',
    isPending: false,
  }
  const filteredRobots = []
  const wrapperWithSearchTerm = shallow(
    <MainPage {...mockPropsWithSearchTerm} />
  )

  expect(wrapperWithSearchTerm.instance().filterRobots()).toEqual(
    filteredRobots
  )
})
