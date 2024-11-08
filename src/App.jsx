import './App.css'
import Card from './components/Card'
import Collapse from './components/Collapse'

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='card-group w-100'>
          <div className='col p-3'>
            <Collapse href="collapseExample1">
              <Card text="Card Text 1" button="Click me 1" image="https://picsum.photos/id/1/200/300" />
            </Collapse>
          </div>
          <div className='col p-3'>
            <Collapse href="collapseExample2">
              <Card title="Title 2" text="Card Text 2" button="Click me 2" image="https://picsum.photos/id/2/200/300" />
            </Collapse>
          </div>
          <div className='col p-3'>
            <Collapse href="collapseExample3">
              <Card title="title 3" text="Card Text 3" button="Click me 3" image="https://picsum.photos/id/3/200/300" />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
