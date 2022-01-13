interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    let class_card = props.repository.description === null ? 'text-center' : 'text-left';    
    return (
        <div className="card border border-0">
            <div className="card-header text-center bg-cards">
                <h5>{props.repository.name}</h5>
            </div>
            <div className="card-body text-center">
                <p className={"card-text " + class_card}>
                    {props.repository.description ?? 'undefined'}
                </p>
                <a href={props.repository.html_url}>Acessar repositórios</a>
            </div>
        </div>
    );
}