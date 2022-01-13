import { useState, useEffect } from "react";
import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/AlissonFredo/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])
    
    return (
        
        <section className="repository-list mt-4">
            <h1 className="text-center mb-3">Lista de repositórios</h1>
            <div className="card-columns">
                {repositories.map((repository, key) => {
                    return <RepositoryItem key={key} repository={repository}/>
                })}
            </div>
        </section>
    );
}