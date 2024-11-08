import './App.css'
import Card from './components/Card'
import Collapse from './components/Collapse'

function App() {
  return (
    <div className='card-group text-center justify-content-center gap-5 my-5'>
      <Collapse href="collapseExample1">
        <Card title="Muhammed" text="My name is Muhammed" button="Click me 1" image="https://picsum.photos/id/1/200/300" />
      </Collapse>
      <Collapse href="collapseExample2">
        <Card title="Metin" text="My name is Metin" button="Click me 2" image="https://picsum.photos/id/2/200/300" />
      </Collapse>
      <Collapse href="collapseExample3">
        <Card title="Xezer" text="My name is Xezer" button="Click me 3" image="https://picsum.photos/id/3/200/300" />
      </Collapse>
    </div>
  )
}

export default App
