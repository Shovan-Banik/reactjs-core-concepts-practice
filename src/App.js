import logo from './logo.svg';
import './App.css';

function App() {
  const articlePara={
    textAlign:'center',
    textShadow:'1px 1px',
    fontStyle:'italic',
    font:'bold'
  }
  return (
    <div className="App">
      <article style={{backgroundColor:'yellow',border:'4px solid black',margin:'10px',borderRadius:'10px',padding:'20px'}}>
        <h2 className='blog'>My failure life</h2>
        <p style={articlePara}>
        Ok, i will write about my self. I  am a failure still today. Still now i want money from my father. It's to much painful. It is time to support my parents but i beg support from parents still now. Sorry parents for my all faults. I love both of you more than my life.
        </p>
      </article>
      <Blog name='Shovan' home='Balla'></Blog>
      <Blog name='Raja' home='Balla'></Blog>
      <Blog name='Proja' home='Mirpur-1'></Blog>
    </div>
  );
}
function Blog(props){
  return(
    <div>
      <h2>Failure person:{props.name}</h2>
      <p>Home:{props.home}</p>
    </div>
  )
}


export default App;
