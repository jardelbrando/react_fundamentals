import {Post} from "./Post";
import { Header } from "./components/Header";
import './style.css';

export function App() {

  return (
    <>
      <Header></Header>
      <Post

        author="Jardel Brandão"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quaerat quas molestias excepturi veniam ducimus fuga veritatis nostrum quae? Accusantium sapiente molestias cupiditate dolores laudantium vel. Eveniet eligendi commodi quae."
      />
    </>
  )
}
