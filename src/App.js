import './App.css';

//
import { NewsData } from './components/NewsData';

function App() {

  return(
    <div>
       <NewsData/>
    </div>
  );
}
  /*
  const API_Endpoint = `http://api.mediastack.com/v1/news`;
  
  const [categories, setCategories] = useState('general');
  const [countries, setCountry] = useState('in')
  const [newsData, setNewsData] = useState([])
  const getNewsData = () => {
    
  }

  const categorySelect = (e) => {
    setCategories(e.target.value)
  }

  const countrySelect = (e) => {
    setCountry(e.target.value)
  }

  
  useEffect(() => {
    getNewsData();
  }, [categories, countries])*/
 /* return (
    <>
      <h1>News 360</h1>
      <p className='app-description'>Press the Mic and Say Get the news from any category</p>
      <div className='category-filter'>
        <label for="category">Choose a Category</label>
        <select
          name="category"
          id="category"
          className='category-select'
          onChange={categorySelect}
        >
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </div>
      <NewsDisplay newsData={newsData} />

      {newsData.length === 0 ? (
        <h2 className='noNews'>No News Found</h2>
      ) : (
        <></>
      )}
    </>
  );
}*/

export default App;