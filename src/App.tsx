import './styles/global.scss';
import { RepositoryList } from './components/RepositoryList';

export function App() {
    return (
        <section className='container'>
            <RepositoryList/>
        </section>
    );
}