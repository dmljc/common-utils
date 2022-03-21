import { flattenDeep2 } from '@/utils/flatten';

function App() {
    const arr = [1, 2, 'a', true, ['hello', 33, [undefined, false, '0']]];

    console.log('flatten-deep', flattenDeep2(arr));
    
    return (
        <div className="App">
            <h1>
            </h1>
        </div>
    )
}

export default App
